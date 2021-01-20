//! Higher Order Function
console.log(`Hello dari higher order function`)

//! Higher Order Function adalah function yang bekerja didalam function seperti : passing argumen function, return sebuah function dll
//? Fungsinya adalah sebagai abstraksi
//? Contoh ketika kita bilang ingin mengadakan pesta, pesta sendiri berarti membuat kue, membuat minuman dll

//? membuatMakan() disini disebut sebagai callback
//? pesta() disebut dengan Higher Order Function
let membuatMakan = () => {
    `membuat makan`
}

let pesta = (membuatMakan) => { //* passing function sebagai argumen
    //* menggunakan arrow function
    let membuatKue = () => {}
    let membuatMinuman = () => {}

    membuatkue()
    membuatMakan()
}


//! contoh lain
for(let i=0; i < 10; i++){
    console.log(i)
}

//? menjadi
let ulangi = (n) => {
    for(let i=0; i < n; i++){
        console.log(i)
    }
}

ulangi(10) //* lebih efektif efisien, menyembunyikan kerumitan, abstraksi