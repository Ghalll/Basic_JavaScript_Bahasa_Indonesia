//* syntax for loop
console.log("syntax logika perulangan 'for loop'");
for (let x = 1; x < 6; x++) {
  console.log(`urutan ke ${x}`);
}

//* syntax for of loop
//! harus menggunakan array bisa pas
let array;
console.log("syntax logika perulangan 'for of loop'");
array = ["januari", "febuari", "maret", "april", "mei"];
for (let y of array) {
  console.log(`bulan ke ${y}`);
}

//* syntax while
let i = 1;
console.log("syntax logika perulangan 'while'");
while (i <= 10) {
  console.log(`antrian ke ${i}`);
  i++;
}

//*syntax do while
//-while lebih cocok digunakan untuk kasus tidak tahu pasti berapa banyak perulangan yang diperlukan.
let a = 1;
console.log("syntax logika perulangan 'do-while'");
do {
  console.log(`kamu yang ke ${a}`);
  a++;
} while (a < 10);
