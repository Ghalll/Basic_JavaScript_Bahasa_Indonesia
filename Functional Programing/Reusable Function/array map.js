/* // # Array Map();
? merupakan fungsi bawaan dari array 
! merupakan salah satu contoh high-order function.

    * fungsi:
     digunakan untuk memodifikasi setiap elemen dalam sebuah array
     dan mengembalikan array baru dengan elemen yang sudah dimodifikasi.

    * syntax:
        [].map( () => {} );
*/

const mobil = ["Toyota","Honda","Supra","BMW","audi","Bugatti"];
const mobilsport =mobil.map((car)=>{return `${car}!`}); // memodifikasi. 
console.log(mobil);
console.log(mobilsport); 


// * contoh lain.
const numbers = [1, 2, 3, 4, 5];

// Menggunakan map() untuk mengembalikan array baru dengan nilai yang sudah dimodifikasi
const squaredNumbers = numbers.map((num) => num * num);

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
