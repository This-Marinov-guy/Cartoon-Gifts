export const isProd = () => {
    return process.env.NODE_ENV === 'production'
}

export const removeLogsOnProd = () => {
    if (isProd()) {
        console.error = () => { }
        console.debug = () => { }
    }
}

export const askBeforeRedirect = (basedOnEnv = true) => {
    const handleBeforeUnload = (event) => {
        event.preventDefault();
        event.returnValue = ''; // This is needed for older browsers
    };

    if (basedOnEnv && isProd()) {
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }
}

export const changeLanguage = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const language = searchParams.get('lang');

    document.addEventListener('DOMContentLoaded', (event) => {
        if (language) {
            var dropdown = document.querySelector('.goog-te-combo');
            dropdown.value = language;
            dropdown.dispatchEvent(new Event('change'));
        }
    });
}