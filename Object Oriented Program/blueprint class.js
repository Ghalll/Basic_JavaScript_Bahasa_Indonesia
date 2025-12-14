/* // # Syntax Class
* >> pada dasarnya juga membuat Object blueprint, namun dengan cara yang berbeda.
? pembuatan object blueprint dengan menggunakan Syntax Class
    ! bedanya ini menggunakan keyword 'class' untuk membuat nama objectnya.
    ! pada konsepnya sama saja dengan 'construction function', sama2 membuat object blueprint 
*/

// * konstruksi sintaksisnya seperti ini :
class NamaClass {
    constructor(argumen) { // Properti didefinisikan dalam constructor
      // kode untuk inisialisasi properti
    }
    metode() { // sedangkan metode didefinisikan di luar constructor.
      // kode untuk metode
    }
  }
  
// * contoh lengkapnya 
class Buku {
    constructor(judul, penulis, penerbit, harga, tebal) {
        // ini properti dalam constructor
        this.judul = judul;
        this.penulis = penulis;
        this.penerbit = penerbit;
        this.harga = harga;
        this.tebal = tebal;
    }
    // ini metode
    baca() {
        console.log(`saya lagi baca buku ${this.judul}`);
    }
    beli() {
        console.log(`saya beli buku ${this.judul} harganya ${this.harga} ribu`);
    }
    foto() {
        console.log(`foto buat story buku ${this.judul} penulis ${this.penulis} penerbit dari ${this.penerbit}`);
    }
} 
// membuat instance baru (objek baru)
const book1 = new Buku('Melogika Rasa','Gede Prabowo','Bentang Pustaka',84000,268);
const book2 = new Buku('Les Miserables','Victor Marie','Bentang Pustaka',154000,604);
const book3 = new Buku('Filsafat Rousseau','Frederick Copleston','Basabasi',80000,252);
// mengakses properti pada class
console.log(book1);
// mengakses metode pada class
book2.baca(); 
book1.foto();