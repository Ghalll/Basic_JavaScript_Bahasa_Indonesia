/* // # VARIABLE SCOPE
? cara bagaimana suatu variabel dapat diakses dalam program.
! tergantung pada lokasi dan cara di mana variabel tersebut dideklarasikan.
! 2 jenis variabel scope
  * local scope:
    - variabel yang hanya diakses hanya pada fungsi tertentu.
    - Jika variabel didefinisikan di dalam fungsi, maka variabel bersifat lokal.
    - variabel hanya dapat diakses di dalam blok kode tempat variabel tersebut dideklarasikan.
  * global scope: 
    - Variabel yang dapat diakses dari seluruh script.
    - Jika variabel didefinisikan di luar fungsi, maka variabel tersebut bersifat global.
    - variabel bisa diakses diseluruh bagian program, bisa didalam dan diluar blok kode tempat variabel dideklarasikan. 
! jika lupa tulis keyword let,const,var ketika membuat variabel, maka variabel tersebut menjadi global.
*/

const a = "a"; // ? global variable, dapat diakses pada parent() dan child()
function parent() {
  const b = "b"; // ? local variable, dapat diakses pada parent() dan child().
  function child() {
    const c = "c"; // ? local variable, dapat diakses hanya pada fungsi child().
  }
}

// * contoh variabel local scope
function printName() {
  const name = "John"; // ? variabel dengan local scope
  console.log(`My name is ${name}.`);
}
printName();

function jumlah(a, b) {
  let hasil = null;
  return (hasil = a + b);
}
console.log(jumlah(12, 34));

// * contoh variabel global scope
const cuaca = "mendung";
function hari() {
  console.log(`cuaca hari ini ${cuaca}`);
}
hari();

let hasil = null;
function total(a, b) {
  return (hasil = a + b);
}
console.log(total(12, 5));
