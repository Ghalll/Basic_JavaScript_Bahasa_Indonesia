// - Pengenalan tentang apa itu Paradigma Functional Programing
// ? adalah paradigma pemrograman di mana proses komputasi didasarkan pada fungsi matematika murni.
/* 
# intinya:
! paradigma pemrograman yang berfokus pada pemakaian fungsi (function).
    Dalam functional programming, sebuah fungsi dianggap sebagai sebuah nilai,
    dan dapat dipakai sebagai parameter dan/atau nilai kembali (return value) dari fungsi lainnya.

*   Functional Programing ditulis dengan gaya deklaratif yang berfokus pada “what to solve”
*   dibanding “how to solve” yang dianut oleh gaya imperatif.    

# tujuan dari functional programing:
# untuk membuat kode yang dutulis lebih mudah dibaca dan ringkas,
*/


//* gaya penulisan kode imperatif
const nama = ["jokowi", "megawat", "puan", "siamin"];
const orang = [];
for (let i = 0; i < nama.length; i++) {
  orang.push(`${nama[i]}`);
}
console.log(orang);

//* gaya penulisan kode deklaratif
const names = ["jokowi", "megawat", "puan", "siamin"];
const people = names.map((name) => `${name}!`);
console.log(people);
