/* // # Properti pada object blueprint
? >> adalah variabel atau nilai yang terkait dengan suatu objek.
    * fungsi properti menyimpan dan mendefinisikan nilai-nilai yang berbeda. 
*/

// * contoh properti pada object blueprint dengan class
class Car {
    constructor(brand, color, maxSpeed, chassisNumber) {
      // ini properti 
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.chassisNumber = chassisNumber;
    }
}

// * untuk membuat instance dari object nilai properti diambil dari argumen constructor
const car1 = new Car ('BMW', 'red', 200, 'B-1');
const car2 = new Car ('Tesla', 'silver', 220, 'T-1');
console.log(car1);
console.log(car2);

// * medefinisikan nilai properti langsung didalam class
class Oto {
    constructor(brand, color, maxSpeed) {
      this.brand = brand;
      this.color = color;
      this.maxSpeed = maxSpeed;
      this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`; 
    }
}
// * properti chasisNumber didefinsikan lansung pada class, dengan angka random.
/* 
    ? Math.floor :  membulatkan bilangan ke bawah ke bilangan bulat terdekat. 
    ? Math.random : menghasilkan sebuah angka random antara 0 dan 1 (tapi tidak termasuk 1).
         contoh syntax di atas `Math.random() * 1000 + 1` berarti menghasilkan angka random dari 0-1000.
         lalu hasil angka random selalu di tambah +1
*/

const car4 = new Oto ('Supra', 'white', 270);
console.log(car4);

/* // # Properti Getter dan Setter
! >  untuk mengakses dan memodifikasi nilai properti
  * Getter : method yang digunakan untuk mengembalikan nilai properti
  * Setter : method yang digunakan untuk mengubah nilai properti
? > Getter dan Setter ini dinamakan accessor property.
*/

class User {
  constructor(firstName, lastName) {
   this.firstName = firstName;
   this.lastName = lastName;
  }
 
  get namafull() { // membuat metode akses pada semua properti dari class User
    return `${this.firstName} ${this.lastName}`;
  }
 
  set namafull(namafull) { // membuat metode untuk mengubah semua nilai dari class User 
    const [firstName, lastName] = namafull.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
// buat instance object class User
const user1 = new User("budi","ahmad");
const user2 = new User("cici","sarah");
console.log(user1);
console.log(user2);

// * mengakses nilai properti fullName dengan cara user1.namafull dan user2.firstNsame
console.log(user1.namafull);  // output : budi ahmad
console.log(user2.firstName); // output : cici

// * argumen mengubah nilai properti dengan method set pada class
user1.namafull = "ayu utin"; // mengubah nilai properti
user2.firstName = "joko";
console.log(user1.firstName); // output : ayu
console.log(user1.namafull); // output : ayu utin
console.log(user2.namafull); // output : joko sarah


/* // # properti accessor dapat digunakan untuk mencegah pengubahan nilai properti yang sudah ditetapkan pada constructor.
! syaratnya : tambahkan underscore didepan nama properti
! properti yang diberi tanda underscore bukan untuk diakses, alias bersifat privat.
*/  
class Buku {
  constructor (judul,penulis,tebal,sn,) {
    this.judul = judul;
    this.penulis = penulis;
    this.tebal = tebal;
    this.sn = sn;
    this._id = `${sn}-${Math.floor(Math.random() * 100)}`; // properti '_id' ini nilainya sudah ditetapkan.
  }

  get id (){
    return this._id;
  }
  
  set id(id){
    console.log("kamu tidak dapat mengubah id buku!");
  }
}
const bk1 = new Buku ('Sejarah Filsafat Barat','Bertrand Russell',1110,'SFB');
console.log(bk1);
console.log(bk1.id);
bk1.id = 'bk-112'; // mencoba mengubah nilai properti id buku
console.log(bk1.id);