const balance = 5000.43

const currencyFomater = (lang, currency, balance) => 
Intl.NumberFormat(lang, {
    style:"currency",
    maximumFractionDigits:2,
    currency,
}).format(balance);


console.log(currencyFomater("pt-AO","AOA", balance));