//! Template Literal
console.log(`hello dari template literal`)

let coba = (a) => {
    return a
}

let nama = `Reza`
let umur = 17

let kalimat = coba`hello nama saya ${nama} saya berumur ${umur} tahun`;
console.log(kalimat)
console.dir(kalimat)