// ? Berbagai cara membuat objek pada javascript 

//! Object Literal

let objek = {}     //* semudah 1 baris diatas dengan assign {}
let manusia = {

    nama    : "reza",      //* penulisan property pada object, ada tanda (,) saat mengakhiri
    tangan  : 2,
    kaki    : 2,
    energi  : 0,

    makan(porsi){                  //* penulisan method pada object
        this.energi = this.energi + porsi   //* pemakaian (this) karna scope function   
        return "menambah energi sebesar " + porsi
    }
}

//! Function Declaration
//todo menggunakan skema class dan objek / cetak biru dan objek/ rangkaian dan nyata tapi tidak real penyimpanan
//? Function ini ibaratnya blueprint/class yang nantinya akan diisi objek nyata
function Manusia(nama,umur){
    let manusia = {};       //* inisiasi objek biar nanti diisi
    manusia.nama = nama;    //* menambahkan properti objek manusia dengan simbol (.) dan assign (=) dari parameter
    manusia.umur = umur;
    manusia.energi = 0;     //* menambahkan properti objek manusia bukan dari parameter

    manusia.makan = function(porsi){    //* membuat method makan untuk manusia
        this.energi += porsi 
        return this.nama + " telah makan sebanyak " + porsi
    }

    return manusia   //* mereturn objek yang sudah diisi
}

//? Sampai disini baru kita buat the REAL OBJEK, karna sebelumnya hanya membuat mesinnya
let manusia1 = Manusia("Reza",18)   //* membuat objek manusia pertama bernama Reza dan berumur 18
let manusia2 = Manusia("Ayiel",15) //* membuat objek kedua bernama ayiel

//? Function Declaration dengan manajemen memori yang lebih baik dengan memisahkan method
//* Buat terlebih dahulu objek yang berisikan method2
methodMotor = {
    jalan(jarak){
        this.bensin -= jarak
        return "Motor berjalan sebanyak " + jarak 
    },

    isibensin(liter){
        this.bensin += liter
        return "Motor terisi bensin sebanyak " + liter
    }
}

//* Baru buat function declaration untuk membuat objek
function Motor(nama,tahun_keluar){
    let motor = {}
    motor.nama = nama;
    motor.tahun_keluar = tahun_keluar;
    motor.bensin = 100;

    //? Menghubungkan ke method yg di luar
    motor.jalan = methodMotor.jalan;   //* Baru hubungkan dengan method yang di luar
    motor.isibensin = methodMotor.isibensin;

    return motor
}

//? Sampai disini baru kita buat the REAL OBJEK, karna sebelumnya hanya membuat mesinnya
let supra = Motor("supra",1999);
let mio = Motor("Mio", 2000);


//! Constructor Function
//todo sama dengan sebelumnya
//? Metode ini yang akan dikembangkan menjadi class pada es6 javascript 
//? bedanya hanya syntax dan penambahan keyword ("new" operator)

//* Bisa juga memisahkan method diluar objek
let methodMobil = {
    jalan :function(jarak){
        this.bensin -= jarak
        return "Mobil berjalan sebanyak " + jarak
    }
}

function Mobil(nama,tahun_keluar){
    this.nama = nama,                   //* menggunakan this agar reference ke "new" objek nanti
    this.tahun_keluar = tahun_keluar,
    this.bensin = 100

    this.jalan = methodMobil.jalan
}

//? Sampai disini baru kita buat the REAL OBJEK, karna sebelumnya hanya membuat mesinnya
let toyota = new Mobil("Toyota",2002);  //* inisiasi objek dengan keyword new sebagai objek baru
let ferrari = new Mobil("Ferrari",2005);

//! Menggunakan Object.create()
//? Object.create() ini sama dengan pewarisan yaitu "extends" untuk menyatukan 2 objek yg dipisah tadi

//* Kali ini menggunakan function declaration sebagai mesin pembuat objek
function Mobilmodern(nama,tahun_keluar){
    let mobil = Object.create(methodMobil) //* Terbaca sebagai Prototype di console log, inilah yang akan jadi cikal bakal class pada javascript
    mobil.nama = nama,                  
    mobil.tahun_keluar = tahun_keluar,
    mobil.bensin = 100

    return mobil
}

//? Sampai disini baru kita buat the REAL OBJEK, karna sebelumnya hanya membuat mesinnya
let tesla = Mobilmodern("Tesla",2010)