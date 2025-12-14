/* // # Constructor Function
? sebuah fungsi untuk membuat objek baru dengan properti dan metode tertentu. 
? Fungsi ini digunakan untuk membuat banyak objek serupa dengan nilai properti yang berbeda-beda.
  ! intinya fungsi ini: cara membuat object blueprint dengan cara constructor function.
  ! harus pakai huruf kapital utk nama functionnya. huruf kapital yg di awal.
  ! Keyword 'this' dimanfaatkan untuk mengakses nilai properti atau method dari objek tersebut.
  ! guna Keyword 'prototype' buat menyimpan method dan properties agar diakses oleh semua instance objek.
  ! guna Keyword 'new' buat digunakan untuk membuat instance baru (object) dengan properti dan method yang didefinisikan.
*/

// * contoh syntax Constructor Function
function Buku(judul, penulis, penerbit, harga, tebal) {
  // ini properti
  this.judul = judul;
  this.penulis = penulis;
  this.penerbit = penerbit;
  this.harga = harga;
  this.tebal = tebal;
}
// ini metode
Buku.prototype.baca = function() {
  console.log(`saya lagi baca buku ${this.judul}`);
};
Buku.prototype.beli = function() {
  console.log(`saya beli buku ${this.judul} harganya ${this.harga} ribu`);
};
Buku.prototype.foto = function() {
  console.log(`foto buat story buku ${this.judul} penulis ${this.penulis} penerbit dari ${this.penerbit}`);
};
// membuat instance baru (objek baru)
const book1 = new Buku('Melogika Rasa','Gede Prabowo','Bentang Pustaka',84000,268);
const book2 = new Buku('Les Miserables','Victor Marie','Bentang Pustaka',154000,604);
const book3 = new Buku('Filsafat Rousseau','Frederick Copleston','Basabasi',80000,252);
// mengakses properti objek 
console.log(book1);
console.log(book2);
console.log(book3);
// mengakses metode objek
book1.baca();
book1.beli();
book3.foto();