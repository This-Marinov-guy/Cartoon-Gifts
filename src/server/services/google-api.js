import { ORDER_DRIVE_FOLDER, ORDER_SPREADSHEET } from '@utils/defines';
import { google } from 'googleapis';
import moment from 'moment';
import { Readable } from 'stream';

const credentials = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS);
const auth = new google.auth.GoogleAuth({
    credentials: credentials,
    scopes: ['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/spreadsheets'],
});

export const writeToGoogleSheet = async (data) => {
    const client = await auth.getClient();

    // Create an instance of Google Sheets API
    const sheets = google.sheets({ version: 'v4', auth: client });

    // Spreadsheet ID and range of data
    const spreadsheetId = ORDER_SPREADSHEET;
    const range = 'All';

    await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: [data],
        },
    });
}

export const createFolder = async (parentFolderId, folderName = moment().format('DD MM YY h:mm a')) => {
    try {
        const client = await auth.getClient();
        const drive = google.drive({ version: 'v3', auth: client });

        // Check if a folder with the given name exists within the parent folder
        const folderSearch = await drive.files.list({
            q: `name='${folderName}' and mimeType='application/vnd.google-apps.folder' and '${parentFolderId}' in parents and trashed=false`,
            fields: 'files(id, name)',
        });
        let folderId = folderSearch.data.files.length > 0 ? folderSearch.data.files[0].id : null;

        // If folder doesn't exist, create it inside the parent folder
        if (!folderId) {
            const folderMetadata = {
                name: folderName,
                parents: [parentFolderId],
                mimeType: 'application/vnd.google-apps.folder',
            };

            const folderResponse = await drive.files.create({
                resource: folderMetadata,
                fields: 'id',
            });

            folderId = folderResponse.data.id;
        }

        return folderId;
    } catch (err) {
        console.log(err);
        return null;
    }
}


const bufferToStream = (buffer) => {
    const stream = new Readable();
    stream.push(buffer);
    stream.push(null);
    return stream;
};

const makeFilePublicAndGetUrl = async (drive, fileId) => {
    await drive.permissions.create({
        fileId,
        requestBody: { role: 'reader', type: 'anyone' },
    });
    return `https://drive.google.com/uc?id=${fileId}&export=download`;
};

// Upload a single file to an existing folder (by folderId).
// index is used to name the file (0-based → "1.jpg", "2.jpg", etc.)
export const uploadSingleFile = async (file, folderId, index = 0) => {
    const client = await auth.getClient();
    const drive = google.drive({ version: 'v3', auth: client });

    const fileMetadata = {
        name: `${index + 1}.jpg`,
        parents: [folderId],
    };
    const media = {
        mimeType: file.mimetype,
        body: bufferToStream(file.buffer),
    };

    const response = await drive.files.create({
        resource: fileMetadata,
        media,
        fields: 'id',
    });

    return makeFilePublicAndGetUrl(drive, response.data.id);
};

export const uploadFiles = async (files, folderName = moment().format('DD MM YY h:mm a')) => {
    const client = await auth.getClient();
    const drive = google.drive({ version: 'v3', auth: client });
    const uploadedFileUrls = [];
    
    const folderId = await createFolder(ORDER_DRIVE_FOLDER, folderName);
    if (!folderId) throw new Error('Folder creation failed');

    for (let index = 0; index < files.length; index++) {
        const file = files[index];
        const fileMetadata = {
            name: `${index + 1}.jpg`,
            parents: [folderId],
        };
        const media = {
            mimeType: file.mimetype,
            body: bufferToStream(file.buffer),
        };

        const response = await drive.files.create({
            resource: fileMetadata,
            media,
            fields: 'id',
        });

        const url = await makeFilePublicAndGetUrl(drive, response.data.id);
        uploadedFileUrls.push(url);
    }

    return uploadedFileUrls;
};