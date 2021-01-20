// ! DOM JS
// ! Document Object Model

// ? gampangnya si DOM itu element2 pada HTML

// ! DOM tree
// * tau kan di html body itu parentnya dari p h1 ul li dll
// * nah body bisa dibilang Parent Node, karna parentnya
// * sedangkan Root Node, itu sumber dari node2 yaitu Document
// * ada juga Child Node, yaitu anakan dari Parent Node

//! DOM Selection
//? yaitu bagaimana cara mengambil dom html

//! getElementById 
//! -> Element
const judul = document.getElementById('judul');
judul.style.color = "salmon"; //! memanipulasi style dom, otomatis menambahkan inline css pada tagnya
judul.style.backgroundColor = "gray";
judul.innerHTML = "Di ganti dari dom JS"

//! getElementByTagName
//! -> HTMLCollection
const p = document.getElementsByTagName('p'); //* keluarannya nanti HTMLCollection, cek yutub pak sandhika
console.log(p[0], `getElementByTagName lewat index`)
console.log(p, `getElementByTagName`)

const p2 = document.getElementsByTagName('p')[0];
console.log(p2, `getElementByTagName langsung ambil index`)

//! getElementByClassName
//! -> HTMLCollection
const pclass = document.getElementsByClassName('p1');
console.log(pclass, `getElementByClassName`)
pclass[0].innerHTML = `di ganti pake dom lewat classnames`


//! ini gegeh bgt si

//! querySelector
const section = document.querySelector('#a div');
section.innerHTML = `
<div><h1 class=bg-blue>hello nambah dari js dom</h1></div>
<div><h1>hello nambah dari js dom</h1></div>
<div><h1 class="bg-blue">hello nambah dari js dom</h1></div>
`

//! querySelectorAll
// otw

//? tau innerHTML kan?
//! NAH INI DIBIKIN CARA MODERNNYA, gk cuman pake string doang
//! Manipulasi Node
// otw
