
import { NextResponse } from 'next/server';

export const config = { runtime: 'edge' }

export default async function POST(req, res) {
    if (req.method === 'POST') {

        const formData = await req.formData();

        return NextResponse.json({ success: true, formData }, { status: 200 });

    } else {
        return NextResponse.json({ status: false, message: 'Only POST methods are allowed on this route' }, { status: 405 })
    }
}