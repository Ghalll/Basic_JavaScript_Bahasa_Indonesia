//Statement if menguji suatu kondisi
//jika kondisi nilai 'true' kode jalan
//jika kondisi nilai 'false' kode dilewatkan
// contoh
let b = 40;
if (b < 20) {
  console.log("benar");
} else {
  console.log("salah");
}

//fungsi syntax else if
//mengecek banyak kondisi
let prov = "riau";
let city = null;
if (prov == "sumbar") {
  city = "Padang";
} else if (prov == "riau") {
  city = "pekanbaru";
} else if (prov == "aceh") {
  city = "banda aceh";
} else if (prov == "sumut") {
  city = "medan";
} else {
  city;
}
console.log(prov, city);

//contoh syntax if dalam bentuk ternary operator
//syntax ternary operator, if-else statement hanya dalam satu baris.
let age = 25;
let isAdult = age >= 18 ? "Yes" : "No";
console.log("\n" + isAdult);

const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`);

b > 7 ? console.log("ya \n") : console.log("gak \n");

//Truthy & Falsy
//nilai-nilai yang dianggap benar (truthy) atau salah (falsy)
//tanpa melakukan expression terhadap nilainya.
let nama = "";
if (nama) {
  console.log(`halo ${nama}`);
} else {
  console.log("nama masih kosong");
}

const y = "";
const x = 10;
if (x) {
  console.log("Nilai x truthy");
} else {
  console.log("Nilai x falsy");
}
if (y) {
  console.log("Nilai y truthy");
} else {
  console.log("Nilai y falsy");
}
