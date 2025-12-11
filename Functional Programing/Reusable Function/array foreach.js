/* // # Array forEach();
    * fungsi:
    -  memanggil fungsi callback pada setiap iterasi index array.
    -  digunakan untuk melakukan perulangan pada setiap elemen di dalam array.

    * syntax:
    [].forEach(()=>{})
    
    * output:
    - tidak mengembalikan nilai apa pun.
*/

const kopi = ["Caffe Latte","Americano","Espresso ","Cappucino","Mocha"]
kopi.forEach((rasakopi)=>{console.log(`-${rasakopi}`)});

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) => {console.log(number);});
