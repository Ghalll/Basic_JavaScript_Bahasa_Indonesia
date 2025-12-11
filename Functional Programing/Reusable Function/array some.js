/* // # Array Some();
? adalah sebuah method pada array. 

    * fungsi:
    - digunakan untuk memeriksa apakah setidaknya satu elemen dalam array memenuhi kondisi yang ditentukan.
    - dan nilai yang dikembalikan adalah nilai boolean. true/false.

    * syntax:
        arr.some(callback(element, [index], [array]), [thisArg])
*/

const angka = [2,3,7,9,13];
const isEven = angka.some((x) => x % 2 ===0);
console.log(isEven);

// * contoh lain
// tidak ada kata dalam array words yang jumlahnya lebih dari 5 huruf.
const words = ["hello", "world", "foo", "bar"];
const result = words.some((word) => {word.length > 5;});
console.log(result); 