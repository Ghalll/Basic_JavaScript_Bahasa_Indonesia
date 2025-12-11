// * DATA SET
// ? untuk menyimpan banyak nilai
// ! nilai di dalam data set tidak berurutan
// ! nilai di dalam data set tidak diindeks
// ! nilai di dalam data set tidak ada duplikasi atau nilai yang sama.

const nomor = new Set([1, 2, 1, 3, 4, 4]);
console.log(nomor);

//menambahkan nilai pada data set
// pakai metode 'add()'
nomor.add(9);
nomor.add(91);
console.log(nomor);

//menghapus nilai pada data set
// pakai metode 'delete()'
nomor.delete(1);
console.log(nomor);

// mengecek nilai pada data set apakah ada
// pakai metode 'has()'
// kalau ada 'true', kalau tidak 'false'
console.log(nomor.has(91));
console.log(nomor.has(1));

// Mengambil ukuran Set
// pakai 'size'
console.log(nomor.size);
