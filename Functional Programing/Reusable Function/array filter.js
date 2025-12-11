/* // # Array Filter();
    * fungsi:
    -digunkan untuk melakukan proses penyaringan terhadap nilai array yg ada berdasarkan kondisi tertentu yang diberikan.
    -Fungsi filter() memiliki satu parameter, yaitu sebuah fungsi callback yang mengembalikan nilai boolean. 

    * Syntax:
        [].filter( () => kondisi );
*/

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const ganjil = num.filter((num) => num % 2 === 1);
const genap = num.filter((num) => num % 2 === 0);
console.log(ganjil);
console.log(genap);



// * contoh lain
const nilaiMHS = [
  {
    nama: "Akbar",
    IPK: 3.67,
  },
  {
    nama: "Agung",
    IPK: 3.45,
  },
  {
    nama: "Baruna",
    IPK: 3.35,
  },
  {
    nama: "Dani",
    IPK: 4.67,
  },
  {
    nama: "Alif",
    IPK : 3.50,
  }
];

const asleb = nilaiMHS.filter((x) => x.IPK>3.50);
console.log(asleb);