/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Escribe un comentario en una línea

// Comentario de una línea

// 2. Escribe un comentario en varias líneas

/* Esto es un comentario
de varias líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let myString = "Esto es una cadena o string"

let myInteger = 10
let myReal = 1.2

let myBoolean = true
let myBoolean2 = false

let myUndefinedValue

let myNullValue = null

let mySymbol = Symbol("Símbolo")

let myBigInt = 2131644131259154112599645959526326559n
let myBigInt2 = BigInt(123456789789456123123456789n)


// 4. Imprime por consola el valor de todas las variables

console.log(myString)
console.log(myInteger)
console.log(myReal)
console.log(myBoolean)
console.log(myBoolean2)
console.log(myUndefinedValue)
console.log(myNullValue)
console.log(mySymbol)
console.log(myBigInt)
console.log(myBigInt2)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof myString)
console.log(typeof myInteger)
console.log(typeof myReal)
console.log(typeof myBoolean)
console.log(typeof myUndefinedValue)
console.log(typeof myNullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

myString = "Nueva cadena"
myInteger = 128
myReal = 0.25
myBoolean = false
myBoolean2 = true

myNullValue = !null // ???

mySymbol = Symbol("Nuevo_Símbolo")

myBigInt = BigInt(4567891234567891231313466665655656594746987)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

myString = 123456789
myInteger = 0.25
myReal = 25
myBoolean = 0
myBoolean2 = 1

myNullValue = !null // ???

mySymbol = BigInt(100000)

myBigInt = Symbol("Nuevo_Símbolo")

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const myName = "Fernando"
const entero = 25
const real = 0.25
const constant = undefined
const nullValue = null
const mySymbol2 = Symbol("Símbolo")
const myBig = BigInt(12256489954123256989652635985956265959595)
const myBig2 = 12256489954123256989652635985956265959595n

// 9. A continuación, modifica los valores de las constantes

// myName = "Juan"
// entero = 30
// real = 0.30
// constant = 100
// nullValue = null
// mySymbol2 = Symbol("símbolo3")
// myBig = 123456789987654321n

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse