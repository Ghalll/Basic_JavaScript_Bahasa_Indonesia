//# Operator
// ? simbol atau tanda khusus untuk melakukan operasi :
// - Logika, perbandingan, matematika, ternary, Assignment.

//* Assignment Operator
//? fungsi: memberikan nilai pada variabel.
//pakai tanda sama dengan '='
let x = 10;
let y = 5;
let nama = "jokowi";

//* Aritmatika operator
//? fungsi:
//symbol: '+', '-', '*', '/', '%'.

//* Penjumlahan
let z = x + y;
console.log(z); // Output: 15

//* Pengurangan
z = x - y;
console.log(z); // Output: 5

//* Perkalian
z = x * y;
console.log(z); // Output: 50

//* Pembagian
z = x / y;
console.log(z); // Output: 2

//* Sisa Bagi
z = x % y;
console.log(z); // Output: 0

//* Increment
z = ++x;
console.log(z); // Output: 11

//* Decrement
z = --y;
console.log(z); // Output: 4

console.log("\n");

//* Comparison Oprator
//? fungsi: mengevaluasi dan membandingkan dua nilai.
//symbol yang di pakai : '<', '>', '=', '!'.
let a = 10;
let b = 20;
console.log(a == b); //operator kedua nilai apakah sama
console.log(a != b); //operator kedua nilai apakah tidak sama
console.log(a === b); //operator Membandingkan, kedua nilai apakah identik.
console.log(a !== b); //operator Membandingkan, kedua nilai apakah tak identik.
console.log(a > b); //Membandingkan, apakah nilai pertama besar dari nilai kedua.
console.log(a >= b); //Membandingkan, apakah nilai pertama besar sama dengan nilai kedua.
console.log(a < b); //Membandingkan, apakah nilai pertama kecil dari nilai kedua.
console.log(a <= b); //Membandingkan apakah nilai pertama kecil sama dengan nilai kedua.
console.log("\n");

//* Logical Operator
//? fungsi: menggabungkan atau membandingkan nilai-nilai boolean (true/false)
//symbol: '&&', '||', '!'.
let q = 5;
let v = 12;

/*AND operator:nilai true jika kedua nilai yang dibandingkan bernilai true,
nilai false jika salah satu atau kedua nilai yang dibandingkan bernilai false.*/
console.log(q < 7 && v > 5); // (true && true) -> true
console.log(q < 7 && v > 15); // (true && false) -> false

/*OR operator:nilai true jika salah satu atau kedua nilai yang dibandingkan bernilai true
nilai false jika kedua nilai yang dibandingkan bernilai false.*/
console.log(q < 7 || v > 5); //  (true || true) -> true
console.log(q < 7 || v > 15); //  (true || false) -> true
console.log(q < 3 || v > 15); //  (false || false) -> false

/*NOT operator:membalikkan nilai boolean,jika nilai awalnya true, maka hasilnya false
jika nilai awalnya false, maka hasilnya true*/
console.log(!(q < v)); // !(true) -> false
console.log(!(q > v)); // !(fasle) -> true
console.log(!(q < 7 && v > 5)); //  !(true && true) -> !(true) -> false
