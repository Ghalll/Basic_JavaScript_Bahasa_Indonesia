/* // TODO : Function Parameter
 ? Parameter merupakan variabel yang didefinisikan sebagai inputan dari sebuah fungsi.
 ! Parameter dari fungsi dapat berupa tipe data apa pun, mulai dari string, number, object, bahkan fungsi lain.
 * Default Parameters
   ? nilai default yang diberikan pada parameter sebuah function.
   ? Jika function dipanggil tanpa memberikan nilai pada parameter tertentu, 
   ? maka parameter tersebut akan menggunakan nilai default yang sudah ditentukan sebelumnya.
 * Rest Parameter
   ? kebalikan dari Spread 
   ? menggunakan tanda titik 3 (...)
   ? menggabungkan beberapa elemen menjadi satu array.
   ? bermanfaat untuk membuat sebuah fungsi dengan parameter yang tidak pasti.
*/

// * contoh parameter
function multiply(a, b) {
  return a * b;
}

// * contoh parameter dengan object
const prov = {
  riau: "pekanbaru",
  sumbar: "padang",
  sumut: "medan",
  jambi: "jambi",
  aceh: "bandar aceh",
  sumsel: "palembang"
};
function kota({ riau, sumbar }) {
  console.log(`ibu kota riau : ${riau}`);
  console.log(`ibu kota minang : ${sumbar}`);
}
kota(prov);

// * Default Parameters
function greet(name = "stranger") {
  console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, stranger!
greet("syamsi"); // Output: Hello, syamsi!

// * Rest Parameter data tipe 'int'.
function sum(...angka) {
  let total = 0;
  for (let x of angka) {
    total = x + total;
  }
  return total;
}
console.log(sum(1, 2, 3, 1));

// * Rest Parameter data tipe 'string'.
function day(...hari) {
  for (let i = 0; i < hari.length; i++) {
    console.log(`hari ke-${i + 1}: ${hari[i]}`);
  }
}
day("senin", "selasa", "rabu", "kamis", "jum'at", "sabtu", "minggu");
