/* // # Pure Function
? adalah konsep fungsi yang tidak bergantung dengan nilai yg berada diluar dari fungsi atau parameter.
? Pure functions juga tidak memiliki efek samping.
? selalu menghasilkan nilai yang sama ketika dipanggil dengan argumen yang sama.
    # 3 konsep pure function
    - 1. Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama.
    - 2. Hanya bergantung pada argumen yang diberikan.
    - 3. Tidak menimbulkan efek samping.
*/

// * Impure function
let PI = 3.14;
const hitungLuasLingkaran = (jariJari) => {
  return PI * (jariJari * jariJari);
};
console.log(hitungLuasLingkaran(4));

PI = 5;
console.log(hitungLuasLingkaran(4));
/*
! code diatas adalah 'impure function'. lawan dari 'pure function'.
    -code impure function membutuhkan nilai yng berada di luar function. => 'PI'
    -memiliki efek samping jika nilai luarnya berubah.
    -tidak selalu menghasilkan nilai yang sama.
*/

// * Pure function
const hitungLuasLingkaran2 = (jariJari) => {
  return 3.14 * (jariJari * jariJari);
};
console.log(hitungLuasLingkaran(4));
console.log(hitungLuasLingkaran(7));
/*
-nilai 'PI' dipindahkan kedalam function. dan tidak dapat berubah.
-sehingga selalu menghasilkan nilai yang sama terus bila parameter yang diberikan sama.
*/

// * contoh lain pure function.
const createPersonWithAge = (age, person) => {
  return { ...person, age };
};
const person = {
  name: "Bobo",
};
const newPerson = createPersonWithAge(18, person);
console.log({
  person,
  newPerson,
});
