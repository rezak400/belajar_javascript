//! Prototype
//? Prototype itu sama skema/konsep dengan class di java, seperti blueprint untuk objek
console.log("Hello dari protoype js")

//! Ngambil dari constructor function sebelumnya

//* Gk perlu lagi memisahkan objek, cukup dengan skema prototype yg udah tertanam di javascript
// let methodMobil = {
//     jalan :function(jarak){
//         this.bensin -= jarak
//         return "Mobil berjalan sebanyak " + jarak
//     }
// }

function Mobil(nama,tahun_keluar){
    // let this = {} //! ini sebenarnya yg terjadi di layar belakang saat memuncunkan keyword this
    // return this   //! pantes aja bisa reference this karna di return
    this.nama = nama,                   //* menggunakan this agar reference ke "new" objek nanti
    this.tahun_keluar = tahun_keluar,
    this.bensin = 100
}

Mobil.prototype.jalan = function(jarak){    //* penulisan syntax pada prototype
    this.bensin -= jarak
    return "Mobil berjalan sebanyak " + jarak
}

//? Sampai disini baru kita buat the REAL OBJEK, karna sebelumnya hanya membuat mesinnya
let toyota = new Mobil("Toyota",2002);  //* inisiasi objek dengan keyword new sebagai objek real

//! Muncullah fitur yg javascript telat karna bahasnya cuman dibuat 10 hari
//! Yaitu syntax Class pada javascript es6 2015

class Manusia{
    constructor(nama,umur){   //* penulisan constructor itu seperti, apa yg HARUS default pada class ini yang akan dijadikan parameter nantinya
        this.nama = nama
        this.umur = umur
    }

    tangan = 2; //* bagaimana cara penulisan property?
    kaki = 2;
    energi = 0;

    makan(banyak){
        this.energi += banyak
        return this.nama + " Telah makan sebanyak " + banyak
    }
}

let reza = new Manusia("Reza",17);

//! Hampit semua yang dijavascript itu objek

let variabel_array = [6,5,4]           //* inisiasi variabel_array menjadi sebuah array

//! BELAKANG LAYAR
let variabel_array = new Array(); //* inilah yang sebenarnya terjadi di belakang layar
function Array(){                                       //* yg terjadi di belakang layar
    let this = Object.create(Array.prototype)
    this.sort = function(){                             //* yang terjadi saat buat built in function
        return "blalabla bisa sort array"
    }
}

//! Hapus belakang layar agar ini bisa muncul
console.log(variabel_array.sort())   //* makanya kita bisa make built in function yg SANGAT BANYAKK

