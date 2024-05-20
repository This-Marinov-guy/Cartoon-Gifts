//PRICING

export const SHIPPING_COUNTRIES = [
    { value: 'bulgaria', label: 'Bulgaria' },
    { value: 'england', label: 'United Kingdom' },
    { value: 'romania', label: 'Romania' },
];


export const LANGUAGES = [
    { value: 'en', label: 'English' },
    { value: 'bg', label: 'Bulgarian' },
    { value: 'ro', label: 'Romanian' },
];


export const CURRENCIES = [
    {value: 'EUR', label: 'euro', symbol: '€', multiplier: 1},
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
        price: 45
    }
]

export const DELIVERY_ITEMS = [
    {
        property: 'Digital',
        price: 0
    },
    {
        property: 'Normal (Physical)',
        price: 5
    },
    {
        property: 'Express (Physical)',
        price: 15
    },
]

export const PET_OPTIONS = [
    {
        property: 'No',
    },
    {
        property: 'Yes',
    },
]

export const BASIC_PRICE = 30
export const PERSON_IMAGE_PRICE = 5
export const PET_IMAGE_PRICE = 2

// ERROR MESSAGES

export const ERROR_MESSAGE = 'It looks like something went wrong - please try again with new details or contact our team!'
export const ERROR_COMM = 'Accept our apologies, please try later or contact our team for help!'

export const EMAIL = 'cartoongifts.eu@gmail.com'