//! Built In Function
//? Built in function sendiri artinya function yang udah ada secara default/ sudah tertanam di javascript

//? contoh
//* Array.prototype.map()
let angka = [1,2,3,4,5]
let murid = ["Reza","Ayiel","Icad"]
console.log(murid)

let murid_baru = murid.map((a) => { //* menggunakan high order function serta callback
    return `murid_${a}` 
})

console.log(murid_baru) //* array setelah diberi function map()

//* Array.prototype.filter()
let angka_baru = angka.filter((a) => {
    return a + 3;
})
let murid_baru_filter = murid.map((a) => {
    return a.length < 5
})

console.log(angka)
console.log(angka_baru)
console.log(murid_baru_filter)