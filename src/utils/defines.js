//PRICING
export const SHIPPING_COUNTRIES = [
    { value: 'england', label: 'United Kingdom' },
    { value: 'bulgaria', label: 'Bulgaria' },
    { value: 'romania', label: 'Romania' },
    { value: 'serbia', label: 'Serbia' },
];


export const LANGUAGES = [
    { value: 'en', text: 'English' },
    { value: 'bg', text: 'Български' },
    // { value: 'ro', text: 'Romanian' },
];

export const CURRENCIES = [
    {value: 'EUR', label: 'euro', symbol: '€', multiplier: 1},
    {value: 'GBP', label: 'pounds', symbol: '£', multiplier: 0.85},
    {value: 'BGN', label: 'лева', symbol: 'лв.', multiplier: 2},
]

export const SIZE_ITEMS = [
    {
        property: 'A4',
        price: 0
    },
    {
        property: 'A3',
        price: 10
    },
    {
        property: 'A2',
        price: 20
    },
    {
        property: 'A1',
        price: 35
    }
]

export const DELIVERY_ITEMS = [
    {
        property: 'Digital',
        tag: 'common:delivery_items.digital',
        price: 0
    },
    {
        property: 'Normal (Physical)',
        tag: 'common:delivery_items.normal',
        price: 7
    },
    {
        property: 'Express (Physical)',
        tag: 'common:delivery_items.express',
        price: 15
    },
]

export const PET_OPTIONS = [
    {
        property: 'No',
        tag: 'common:answers.no',
    },
    {
        property: 'Yes',
        tag: 'common:answers.yes',
    },
]

export const PAYMENT_OPTIONS = [
    {
        property: 'Online (card)',
        tag: 'common:payment_items.online',
        value: 'online'
    },
    {
        property: 'Cash',
        tag: 'common:payment_items.cash',
        value: 'cash'
    },
]

export const BASIC_PRICE = 30
export const PERSON_IMAGE_PRICE = 5
export const PET_IMAGE_PRICE = 0
// 0 - 100 percentage
export const ACTIVE_DISCOUNT = null;

// ERROR MESSAGES

export const ERROR_MESSAGE = 'error_msg'
export const ERROR_COMM = 'error_com'

export const EMAIL = 'cartoongifts.eu@gmail.com'

// Drive

export const ORDER_SPREADSHEET = '1n2CC04eMbtup587CZiB0G-k5i5s65l6sr_-19xSsOC0';
export const ORDER_DRIVE_FOLDER = '1TgNo9ZEw__UGv_fUiqbCWkxq2f6yoTB2';