// * SYNTAX SPREAD
// ? fungsi 'spread operator'
// ! Spread operator dituliskan dengan tiga titik (...).
// ! menyebarkan elemen-elemen dari sebuah array atau objek.

let makan = ["pecal ayam", "bakso", "mie ayam", "ramen", "nasgor"];
console.log("tanpa operator spread jadi gini :");
console.log(makan);
console.log("dengan operator spread jadi gini :");
console.log(...makan);
console.log("\n");

//spread oprator juga bisa untuk pegabunggan array
//menjadi 1 array yang baru
let minum = ["nesacfe", "teh pucuk", "sprite", "air putih"];
console.log("tanpa operator spread jadi gini :");
const jajan = [makan, minum];
console.log(jajan);
console.log("dengan operator spread jadi gini :");
const jajan2 = [...makan, ...minum];
console.log(jajan2);
console.log("\n");

//contoh spread operator pada syntax data tipe object
//untuk penggabungan 2 data object bersatu menjdi 1 data object
//nama key pada tiap object hrus beda
let bangsa1 = {
  negara: "indonesia",
  agama: "islam",
  merdeka: 1945178,
  umur: 77,
  bentuk: "republik"
};
let bangsa2 = {
  ngr: "malaysia",
  agm: "islam",
  mrdk: 1957318,
  old: 66,
  pemerintahn: "monarki konstitusional"
};
console.log("tanpa operator spread jadi gini :");
const bg1 = { bangsa1, bangsa2 };
console.log(bg1);
console.log("dengan operator spread jadi gini :");
const bg2 = { ...bangsa1, ...bangsa2 };
console.log(bg2);
