/* // # DECLARING FUNCTION 
 * Function atau fungsi : 
    ? blok kode yang dirancang untuk melakukan tugas tertentu.
    ? digunakan untuk menghasilkan output berdasarkan input tertentu.
    ? function merupakan sebuah variabel yang berisi blok logika.
 * istilah Parameter & Argument pada Function :
    ! Parameter merupakan variabel yang didefinisikan sebagai inputan dari sebuah fungsi.
    ! Argument merupakan nilai atau expression yang dimasukkan ke dalam fungsi.
 * return :
    ? mengembalikan nilai dari sebuah function.
 * Expression Function : 
    ? meyimpan Function ke dalam ekspresi variabel. 
    ? dengan ini tidak perlu membuat nama functionnya. 
*/

//  Contoh Parameter pada Function
function tambah(x, y) {
  return x + y;
}
//  Contoh Argument pada Function
tambah(10, 12);

//  Contoh lengkap function :
function multiply(a, b) {
  return a * b;
}
let result = multiply(10, 2);
console.log(result);

//  Contoh Expression Function
const kali = function (q, v) {
  return q * v;
};
let hasil = kali(30, 2);
console.log(hasil);

//  contoh function yang mengembalikan nilai string
function greeting(name) {
  return `Hello,${name}!`;
}
let message = greeting("John");
console.log(message);
