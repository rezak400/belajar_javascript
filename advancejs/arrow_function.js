//! Arrow Function
console.log("Hello dari arrow function")

//? Beberapa cara menulis function
//! Function Declaration
function sayHello(nama){
    return `Hello ${nama}`
}

//! Function Expression
let sayHello2 = function(){  //* disimpan di dalam variabel yg diisi dengan function tanpa nama (anonymouse function)
    return `Hello ${nama}`
}

//! Perlu diketahui beberapa perbedaan besar dari declaration dan expression, karna arrow function merupakan lanjutan dari expression
//! Salah satunya arrow and expression function harus didefinisikan terlebih dahulu, gk kenal hoisting
//* Arrow function merupakan versi ringkas dari function expression -MDN

//! Arrow Function
let sayHello3 = (nama) => {  //* terdapat semacam arrow =>
    return `Hello ${nama}`
}

//! Arrow Function Implisit Return
let sayHello4 = nama => `Hello ${nama}`;

//! Arrow Function tanpa parameter
let sayHello5 = () => `Hello world`;

//! Contoh penggunaan Arrow Function
let murid = ["Reza","Ayiel","Irsyad"];

//? Pertama memakai function biasa
let jumlahHuruf = murid.map(function(nama){
    return { nama:nama, jumlah_huruf:nama.length}
})
console.log(jumlahHuruf)

//? Pemakaian arrow function
let jumlahHuruf2 = murid.map(nama => ({ nama, jumlah_huruf:nama.length }))
console.log(jumlahHuruf2)
console.table(jumlahHuruf2) //* baru tau nih console table, sangat membantu


let mahasiswa = function(){
    this.nama = "reza";
    this.sayHello = function(){

    }
}
