// modulo (%) for non integer numbers 
const mod = (amount, numerator) => amount - numerator * Math.floor(amount / numerator)

export {
    mod
}