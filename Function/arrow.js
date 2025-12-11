/* // TODO : Arrow Function
? cara untuk membuat function dengan sintaks yang singkat. 
* didefinisikan menggunakan tanda panah atau fat arrow ( => ).
! tidak perlu menuliskan keyword function.
    * tulis parameter dalam kurung `()`, lalu tanda panah `( => )`, baru kurung kurwal `{}`
    * Apabila fungsi hanya memiliki satu parameter, maka bisa dihapus tanda kurungnya.
    * jika parameter tidak ada.kosong, tanda kurung tetep harus dibuat.
    * jika isi/body function hanya satu baris, bisa dihapus tanda kurung kurawalnya.
    * Ketika sebuah fungsi perlu mengembalikan nilai, tidak perlu tulis return (hanya bekerja untuk fungsi satu baris).
*/

// * contoh
const sayName = name => {
  console.log(`Nama saya ${name}`);
};
sayName("Ghaly");

// * contoh hanya 1 parameter
const halo = nama => {
  console.log(`Hall0 ${nama}`);
};
halo("ayu");

const kali = x => {
  return x * 2;
};
console.log(kali(10));

// * contoh parameter kosong
const sayHello = () => {
  console.log("Selamat pagi semuanya!");
};
sayHello();

// * contoh isi function 1 baris doang
const makan = jajan => console.log(`saya beli ${jajan}`);
makan("martabak mesir");

const pangkat = x => x ** 2;
console.log(pangkat(6)); // 6x6=36

// * function 1 baris yang tak perlu tulis `return`
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 3x4=12
