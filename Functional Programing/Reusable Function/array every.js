/* // # Array Every();
    * fungsi:
    - untuk mengecheck apakah semua nilai dari sebuah array sesuai dengan kriteria yang didefinisikan. 
    - digunakan untuk memeriksa apakah semua elemen pada array memenuhi kondisi tertentu. 

    * syntax:
    arr.every(callback(element, [index], [array])

    * output:
    - nilai boolean.
*/


// memeriksa apakah semua nilai pada array numbers besar dari 5.
const numbers = [10, 20, 30, 40, 50];
const allGreaterThanFive = numbers.every((number) => {return number > 5;});
console.log(allGreaterThanFive); // Output: true


// memeriksa ipk lebih dari 3
const nilaiMHS = [
    {
      nama: "Akbar",
      IPK: 3.67,
    },
    {
      nama: "Agung",
      IPK: 3.45,
    },
    {
      nama: "Baruna",
      IPK: 3.35,
    },
    {
      nama: "Dani",
      IPK: 4.67,
    },
    {
      nama: "Alif",
      IPK : 3.50,
    }
  ];
  
const minimumScore = 3.00;
const examPassed = nilaiMHS.every(score => score.IPK >= minimumScore);
console.log(examPassed); // true