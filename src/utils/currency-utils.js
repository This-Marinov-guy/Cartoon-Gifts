/**
 * Returns the EUR equivalent price when the active currency is BGN, otherwise null.
 * Since BGN prices are stored in EUR (multiplier = 2 converts to BGN display),
 * the base price IS already the EUR amount.
 *
 * @param {number} price - The base price (stored in EUR)
 * @param {string} currencyValue - Active currency value, e.g. 'BGN' | 'EUR'
 * @returns {number|null}
 */
export const getEurEquivalent = (price, currencyValue) => {
    if (currencyValue === 'BGN') {
        return price; // exact EUR sum (base price before multiplier)
    }
    return null;
};

/**
 * Returns a display object for the EUR equivalent, or null if not applicable.
 *
 * @param {number|null} eurPrice
 * @param {Object} additionalStyles - Extra CSS to merge into the wrapper style
 * @returns {{ styles: Object, text: string, icon: string }|null}
 */
export const getEurEquivalentDisplay = (eurPrice, additionalStyles = {}) => {
    if (eurPrice === null || eurPrice === undefined) return null;

    const styles = {
        fontSize: '0.9em',
        color: '#666',
        marginTop: '5px',
        fontStyle: 'italic',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        ...additionalStyles,
    };

    return {
        styles,
        text: `\u2248 ${eurPrice.toFixed(2)} \u20AC`, // ≈ X.XX €
        icon: '\u20AC',                               // €
    };
};

/**
 * Formats a price with its currency symbol.
 *
 * @param {number} price - Base price
 * @param {{ multiplier: number, symbol: string }} currency
 * @returns {string}
 */
export const formatPrice = (price, currency) => {
    return `${(price * currency.multiplier).toFixed(2)} ${currency.symbol}`;
};
