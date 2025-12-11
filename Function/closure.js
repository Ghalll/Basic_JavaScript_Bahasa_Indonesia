/* // # Closure
? fungsi yang dapat mengakses variabel di dalam lexical scope-nya. 
! >>> fungsi yang berada di dalam fungsi induk,(lexical scope) memiliki akses ke variabel dilingkup induknya.
  * variabel privat :
    ? variabel yang tidak dapat diakses atau dimodifikasi dari luar lingkup (scope) tertentu.
    ? Variabel hanya dapat diakses dan dimodifikasi oleh fungsi atau metode yang berada dalam lingkup yang sama.
    ? variabel privat dapat dicapai dengan menggunakan closure. 
*/

// * contoh
function init() {
  // ? fungsi init sebagai fungsi induk
  const name = "Obi Wan"; // ? Variabel lokal di dalam scope fungsi init
  function greet() {
    // ? Inner function, merupakan contoh closure
    console.log(`Halo, ${name}`); // ? Memanggil variabel yang dideklarasikan di fungsi induk
  }
  greet();
}
init();

function call() {
  const name = "Obi Wan";
  function greet() {
    console.log(`Halo, ${name}`);
  }
  return greet;
}
const myFunction = call();
myFunction();

function kali(x) {
  function hasil() {
    console.log(`hasilnya:${x * 2}`);
  }
  return hasil;
}
const hasil = kali(10);
hasil();

// * contoh variabel privat
function counter(x) {
  // ? Di dalam fungsi counter(), variabel privat adalah `x`.
  const itung = () => {
    return ++x;
  };
  return itung;
}
const count = counter(100);
console.log(count());
console.log(count());
console.log(count());
