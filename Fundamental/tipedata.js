//# Tipe data merupakan pengklasifikasian data berdasarkan jenisnya
//# Fungsi 'typeof()' untuk mengetahui tipe data pada variabel

// Number:tipe data untuk menyimpan nilai angka.
let numberVariable = 10;
const x = 3.14;
console.log(typeof x);

// String: tipe data untuk menyimpan nilai teks.
let stringVariable = "Halo dunia!";
const author = "John Doe";

// Boolean: tipe data untuk menyimpan nilai true atau false.
let booleanVariable = true;
const isStudent = false;

// Null: tipe data untuk menyimpan nilai null.
let nullVariable = null;

// Undefined: tipe data untuk menyimpan nilai undefined. variabel tidak memiliki nilai
let undefinedVariable;

// Object: tipe data untuk menyimpan sekumpulan properti dan nilai.
let objectVariable = { name: "John Doe", age: 25 };

// Array: tipe data untuk menyimpan sekumpulan nilai dalam sebuah array.
let arrayVariable = [1, 2, 3, 4, 5];

// Function: tipe data untuk menyimpan fungsi.
function greeting(name) {
  console.log("Halo " + name + "!");
}

// BigInt:merepresentasikan angka dengan ukuran yang sangat besar.
const nilai1 = 1234567890123456789012345678901234567890n;
const nilai2 = BigInt(9007199254740991);

// Symbol: tipe data yang digunakan untuk merepresentasikan identifier unik
const id = Symbol("id");
console.log(typeof id);
