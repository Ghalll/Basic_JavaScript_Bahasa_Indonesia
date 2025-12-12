/* // # Try and Catch
? Try and Catch merupakan salah satu fitur pada JavaScript 

    *fungsi:
    - digunakan untuk menangani error (kesalahan) pada program.

    *syntax:
    try {
        // kode
    } catch (error) {
        // error handling
    }

*/


/* 
* contoh tidak eror
!   jika tidak ada eror maka, blok kode 'catch' diabaikan.
*/
try {
  console.log("Awal blok try");
  console.log("Akhir blok try");
} catch (error) {
  console.log("Tidak terjadi eror, maka kode ini diabaikan");
}

/*
* contoh eror
!   jika terjadi eror maka, code pada blok 'try' akan berhnti hingga baris eror
!   sehingga blok code 'catch' dijalankan.
*/
try {
  console.log("Awal blok try");
  errorCode; // baris eror
  console.log("Akhir blok try");
} catch (error) {
  console.log("Terjadi error!");
}

try {
  // kode yang mungkin akan menghasilkan error
  const result = 1 / 0; // pembagian oleh 0
  console.log(result);
} catch (error) {
  // menangkap error dan menampilkan pesan
  console.log("Terjadi error: " + error.message);
}

console.log("\n");


/*
#  blok code 'catch' ada parameter : (eror)
    * propertinya:
    - name : Nama error yang terjadi.
    - message : Pesan tentang detail error.
    - stack : Informasi urutan baris kejadian yang menyebabkan error.

! nama parameter bisa diubah.      
*/
try {
  console.log("Awal blok try");
  errorCode;
  console.log("Akhir blok try");
} catch (fail) {
  console.log(fail.name);
  console.log(fail.message);
  console.log(fail.stack);
}

console.log("\n");

// * try-catch-finally
// ? digunakan untuk mengeksekusi kode apapun setelah blok 'try' atau 'catch' selesai dijalankan, tanpa terkecuali.
// ? Blok finally akan tetap dijalankan tanpa peduli apa pun hasil yang terjadi pada blok try-catch.
try {
  console.log("Awal blok try");
  eror;
} catch (error) {
  console.log(`kode eror : ${error.name}`);
} finally {
  console.log("Akan tetap dieksekusi");
}
