let str = 'napis'

let strTwo = 'Akademia108'

function odwrocenie(text) {
    let result = text
    .split('')
    .reverse()
    .join('')
    return result
}

console.log( odwrocenie(str) );
console.log( odwrocenie(strTwo) );

function sortowanie(text) {
    let result = text
    .split('')
    .sort()
    .join('')
    return result
}

console.log( sortowanie(strTwo) )


