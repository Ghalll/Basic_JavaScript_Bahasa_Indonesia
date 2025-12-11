//tipe data array
//dapat mennyimpan banyak data/nilai pada satu variabel
const random = ["Biru", "besar", false, 2023, "jepang"];
console.log(random[0]);
console.log("data sebelum di modifikasi");
console.log(random);

// ? memodifikasi data array ditumpukan akhir
// ! fungsi pop mengeluarkan
// ! fungsi push menambahkan
random.pop();
random.push("kuwait");
console.log("data yang dimodifikasi pada tumpukan akhir");
console.log(random);

//memodifikasi data ditumpukan awal
//fungsi shift mengeluarkan
//fungsi unshift menambahkan
random.shift();
random.unshift("hijau");
console.log("data array yang di modif pada tumpukan awal");
console.log(random);

//menghapus data pada array
//tapi meninggal alamt indexnya
//fungsi delete
delete random[2];
console.log("data array yang dihapus 'false'");
console.log(random);

//menghapus data pada array
//tanpa meninggalkan alamt indexnya
//fugsi splice
random.splice(2,1);
console.log("data array yang dihapus serta alamat indexnya");
console.log(random);
