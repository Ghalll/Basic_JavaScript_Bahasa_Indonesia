//# syntac 'Destructuring Object'
//- Destructuring Object pakai kurung kurawal '{}'
//? fungsi : mengambil nilai dari sebuah objek dan menampungnya ke dalam variabel-variabel terpisah/lokal.

let buku = {
  judul: "REiNKARNASi",
  penerbit: "KPG",
  penulis: "Maman Suherman",
  kategori: "Sastra",
  ISBN: 9786024813765,
  tebal: 120,
  harga: 90.0
};
const { judul, penulis, tebal, harga } = buku;
console.log(`judul buku : ${judul}`);
console.log(`Harga : ${harga} ribu`);
console.log(`Jumlah halaman : ${buku.tebal} \n`);

//* metode Destructuring Assignment
const profil = {
  firstName: "John",
  lastName: "Doe",
  age: 18
};
let firstName = "Dimas";
let age = 20;
({ firstName, age } = profil);
console.log(firstName);
console.log(age + "\n");

//* Default Values
//ketika membuat var yang gk ada di data object pada destructing
//nilai nya jdi undifined, sbnrnya bsa mendefinisikan nilai defaultnya
const hp = {
  merek: "iPhone xr",
  ram: "3gb",
  rom: "128gb",
  mha: 2.876
};
const { merek, ram, rom, batre = false } = hp;
console.log(merek);
console.log(ram);
console.log(rom);
console.log(batre);

//* Assigning to Different Local Variable Names
// -var pada object dengan yg akan didestructuringkan bisa tidak sama
// -bisa penamaan var yang dikasih berbeda degn object
const { merek: brand, rom: storage, mha: battery } = hp;
console.log("\n" + brand);
console.log(storage);
console.log(battery);
