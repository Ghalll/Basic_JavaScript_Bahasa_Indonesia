/* // # Array Reduce();
    * fungsi:
    - digunakan untuk mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan output satu nilai saja.
    - digunakan untuk mengurangi atau mengubah sebuah array menjadi sebuah nilai tunggal (single value) 
    
    * syntax :
        arr.reduce(callback(accumulator, currentValue, [currentIndex], [array]), [initialValue]);

    ! harus membutuhkan minimal 2 parameter, agar fungsi reduce berjalan.
*/



const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((x, y) => {
  return x + y;
});
console.log(sum); // Output: 15


//* contoh lain
const nilaiMC = [
    {
        nama:"Akbar",
        nilai:89,
    },
    {
        nama:"Agung",
        nilai:96,
    },
    {
        nama:"Abel",
        nilai:80,
    },
    {
        nama:"Alif",
        nilai:90,
    },
    {
        nama:"Rehan",
        nilai:85,
    },
    {
        nama:"Baruna",
        nilai:78,
    },
    {
        nama:"Dani",
        nilai:88,
    }
];
const total = nilaiMC.reduce((x,y) => x + y.nilai, 0);
console.log(`total nilai microcontroller : ${total}`);
const rerata = nilaiMC.reduce((x,y) => x + y.nilai/7.00);
console.log(`nilai rata-rata microcontroller : ${rerata}`);