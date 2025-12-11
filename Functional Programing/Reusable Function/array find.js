/* // # Array Find();
?  adalah method pada objek array

    * fungsi:
    - mencari nilai yang sesuai dengan callback function.
    - digunakan untuk mencari elemen tertentu apakah didalam array ada.
    - digunakan untuk mencari elemen pada array yang memenuhi kondisi yang diberikan.

    * syntax:
        [].find (() => kondisi);
        arr.find(callback(element, [index], [array]), [thisArg]);

    * output nilai:
    - mengembalikan satu nilai dari elemen yang pertama kali ditemukan.
    - jika tidak ditemukan akan menghasilkan nilai undefined  
*/

const numbers = [10, 20, 30, 40, 50];
const foundNumber = numbers.find((number) => number < 30);
console.log(foundNumber); // 40

// * contoh lain
// mencari siswa bernama james di data array students.
const students = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
];
const findjames = students.find(x => x.name === 'James');
console.log(findjames);