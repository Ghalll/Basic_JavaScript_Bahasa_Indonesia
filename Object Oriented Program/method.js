/* // Todo : metode pada object blueprint , syntax class
? => adalah sebuah fungsi didalam class.
    * digunkan untuk memanipulasi data dalam object class & memebrikan aksi tertentu.
*/

// ! sama seperti function, method juga bisa menerima argumen.
class Hp {
  constructor(brand, chip) {
    this.brand = brand;
    this.chip = chip;
  }
  // ini method
  video() {
    console.log(`saya lagi rekam video pakai ${this.brand}`);
  }
  foto() {
    console.log(`ambil foto pakai hp ${this.brand}`);
  }
  play(game) {
    // method ini ada parameternya
    console.log(
      `main ${game} di hp ${this.brand} lancar rata kanan karena ${this.chip}`
    );
  }
}
const hp1 = new Hp("iPhone xr", "A12 Bionic");
hp1.foto();
hp1.play("mobile legends"); // mengakses methode, juga membuat argumen parameter 'game'

/* contoh di atas methode bernama 'play' memiliki parameter 'game'
? >> lalu pada baris 26, method 'play' menerima argumen pada parameternya 'mobile legends'
output : main mobile legends di hp iPhone xr lancar rata kanan kareana A12 Bionic
*/

// ! method privat
// ditandai dengan underscore didepan nama method.
class Country {
  constructor(nama, bendera, ibukota) {
    this.nama = nama;
    this.bendera = bendera;
    this.ibukota = ibukota;
    this._populasi = this._jumlahpopulasi;
  }
  set populasi(populasi) {
    console.log(
      "Data populasi tidak bisa diubah. Data berdasarkan riset lapangan"
    );
  }
  _jumlahpopulasi() {
    // method privat
    return console.log(
      `jumlah populasi masyarakat ${this.nama} adalah: ${Math.floor(
        Math.random() * 300
      )} juta jiwa`
    );
  }
  getpopulasi() {
    // method public yang mengakses method private '_jumlahpopulasi'
    return this._jumlahpopulasi();
  }
}
const ind = new Country("Indonesia", "Merah-Putih", "Jakarta");
console.log(ind);
ind.getpopulasi(); // mengakses method privat '_jumlahpopulasi' melalui method public 'getpopulasi'
ind.populasi = 200; // mencoba mengubah nilai pda properti yang sudah ditetapkan pada class.
/*
? sebenranya method private hanya bisa di akses di dalam class
? jika ingin mengakses di luar class maka buat method public yang mengakses method private secara terkhusus
*/
