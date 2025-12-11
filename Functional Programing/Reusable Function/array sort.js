/* // # Array Sort();
? Array sort adalah metode pada array 
? fungsi bawaan dari array yang berguna untuk melakukan pengurutan nilai dari sebuah deretan nilai.

    * fungsi:
    - untuk mengurutkan elemen dalam sebuah array.
    - secara default,mengubah semua nilai dalam deretan menjadi bentuk string dan mengurutkannya secara ascending.

    * syntax:
        [].sort(); //default
        arr.sort([compareFunction])
*/

// diurutkan secara default. 
const months = ['Mar', 'jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);



// diurutkan secara ascending
const array2 = [1, 30, 4, 1000];
const compareNumber = (a, b) => {
  return a - b;
};
const sorting = array2.sort(compareNumber);
console.log(sorting);


const numbers = [30, 1, 4, 10, 50, 9, 2, 6, 500, 3, 5];
numbers.sort((a, b) => a - b);
console.log(numbers); 
