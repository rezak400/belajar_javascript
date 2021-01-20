//! Closure
//? Closure adalah sebuah function yang sebelumnya sudah memiliki data/hasil/environtment dari function lain
console.log("Hello dari closure js")

//? Contoh

function init(){
    let nama = "Reza";                  //* variabel nama merupakan local variabel dari scope function init()
    function tampilNama(){
        console.log("hello " + nama)    //* ketika function tampilNama() membutuhkan variabel di scope function parent, maka function tampilNama() disebut dengan closure
    }

    console.dir(tampilNama) //* cek di console, maka ada scope > closure yg membuktikan bahwa ini merupakan closure
    
    tampilNama();
}

init()

//? untuk apa Closure?
//* membuat factory function, alias mesin pembuat function

function ucapkanSelamat(waktu){
    return function(nama){      //* cara penulisan closure yg lain
        return `Selamat ${waktu} ${nama}`
    }
}

//* Cara penulisan lain closure
//! Immediately Invoke Function namanya
//! menggunakan function expression
let ucapkanSelamat2 = (function(waktu){
    return function(nama){      
        return `Selamat ${waktu} ${nama}`
    }
})();

let ucapkanPagi = ucapkanSelamat("pagi");
let ucapkanMalam = ucapkanSelamat("malam"); //* bisa menjadi mesin pembuat function

console.log(ucapkanPagi("Reza"))

console.log(ucapkanSelamat2("Reza")) //* yg pertama undefined karna sudah di immediate function, sudah dijalankan tanpa diisi