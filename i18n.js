// Resource: https://medium.com/flycode/step-by-step-how-to-internationalize-your-nextjs-app-with-next-translate-3c8b13b87fc4

module.exports = {
    locales: ['en', 'bg'], // Array with the languages that we want to use - English, Bulgarian
    defaultLocale: 'en', // Default language of your website
    pages: { // Namespaces that you want to import per page (we stick to one namespace for all the application in this tutorial)
        '*': ['common', 'components', 'layout'], // Common namespace for all the pages
        '/404': ['error'], 
    },
};