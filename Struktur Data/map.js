//# Map.
// -sama seperti object, tapi key value nya bisa dengan tipe data apapun
//? menambahkan elemen pada saat membuat objek Map
const capital = new Map([
  ["indonesia", "jakarta"],
  [true, true],
  [1945, 1708],
  ["cos", 25 > 20]
]);
console.log(capital);
console.log("\n");

//metode '(get)' dan '(set)'
// (get) untuk mendapatkan nilai berdasarkan key tertentu
// (set) untuk menambahkan data key-value
const city = new Map([
  ["Jakarta", "Indonesia"],
  ["London", "England"],
  ["Tokyo", "Japan"]
]);
console.log(city.size);
console.log(city.get("London"));
city.set("New Delhi", "India");
console.log(city.size);
console.log(city.get("New Delhi"));
console.log("\n");

//* membuat object map baru dengan elemen kosong
const iPhone12 = new Map([]);
iPhone12.set("rom", 128);
iPhone12.set("ram", 4);
iPhone12.set("Battre", 2815);
iPhone12.set("layar", 6.1);
iPhone12.set("back cam", "12+12mp");
iPhone12.set("face cam", "12mp");
console.log(iPhone12);
iPhone12.set("chipset", "A14 Bionic");
