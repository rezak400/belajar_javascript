//! Execution Context dan Scope Javascript
//? Execution context gampangnya adalah bagaimana cara javascript mengeksekusi kodenya
console.log("Hello dari execution context js")

//? Contoh scope

//? Kita bisa mengakses window, dan this karna merupakan objek default dari javascript
console.log(window)
console.log(this)

//? Contoh execution
console.log(nama); //* kita mengeluarkan output sebuah variabel yg sudah diinisiasi "DIBAWAH"  
var nama = "Reza" //* variabel ini di hoisting (atau dlm bhs indonesia di arak ke atas) makanya kluarnya undefine

//! IMPORTANT
//! itulah kenapa datang keyword let, dan const 

//* akan mengeluarkan output "undefined"
//? Karna pada dasarnya javascript terdiri dari fase "creation" dan "execution"

//? Pada saat pertama, javascript mencari variabel dan function terlebih dahulu agar disi undefine untuk variabel
//? Dan masuk ke local eksekusi untuk function pada javascript

var manusia = "Reza";
var kelas   =   12;

function sebut(manusia){
    console.log(arguments)  //! melihat ada argumen atau tida, tida ada argumen yg dikasih
    return "Halo " + manusia + kelas
}

console.log(sebut())    //* tidak mengeluarkan "Reza" sebagai nama karna tidak dikasih ke argument, lihat tulisan merah diatas

//? Hubungan "parameter" dan "argumen" pada function sangat penting, sebagai lempar dan tangkap
//? dimana kalo tida ada yg melempar maka tidak ada isinya, dan kalau tida ada yg melempar, maka function akan mencari ke atas


function hello(a){   //* tidak ada parameter disini
    console.log(arguments)  //! melihat argumen yg terdaftar, ternyata tidak ada karna tidak dilempar dari argumen
    return `hello ` + robot
}

var robot = "toyota"  //* maka function loncat keatas dan mengambil reference dari global variabel
console.log(hello())

