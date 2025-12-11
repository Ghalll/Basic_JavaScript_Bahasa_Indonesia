/* // # Higher-Order Function.
?  sebuah function yang dapat menjadikan function lain sebagai parameternya/atau mengembalikan fungsi sebagai nilai.
*Teknik Higher-Order Function biasanya digunakan untuk:
    -Mengabstraksi atau mengisolasi sebuah aksi, event, atau menangani alur asynchronous menggunakan callback, promise, dan lainnya.
    -Membuat utilities yang dapat digunakan di berbagai tipe data.
    -Membuat teknik currying atau function composition.
*/
//

// *
const hello = () => {
  console.log("Hello!");
};

const say = (someFunction) => {
  someFunction();
};

const sayHello = () => {
  return () => {
    console.log("Hello!");
  };
};

say(hello);


// * contoh Higher-Order Function yang menerima fungsi lain sebagai parameter.
function calculate(num, operation) {
  return operation(num);
}
// * contoh penggunaan Higher-Order Function dengan fungsi callback
function double(num) {
    return num * 2;
}
function triple(num) {
    return num * 3;
}

console.log(calculate(2, double)); // output: 4
console.log(calculate(3, triple)); // output: 9
