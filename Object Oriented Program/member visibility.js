// # Member Visibility
// ? >> hak akses pada sebuah properti dan method di dalam class.
/*
* secara default properti dan method bersifat public(dapat diakses diluar class).
* dengan member visibility hak akses diatur agar benar-benar privat. terbatas pada dalam class.

    !! Menetapkan HAK AKSES jadi private dengan cara menambahkan tanda pagar '#' didepan 
    !! penamaan properti dan method.
    !! terkhusus properti yang private,harus mendeklarasikan propertinya di enclosing class 
*/

class Ri1 {
  #nuklir = "private"; // enclosing class

  constructor(fullname, gender, agama, umur, jabatan, id) {
    this.fullname = fullname;
    this.gender = gender;
    this.agama = agama;
    this.umur = umur;
    this.jabatan = jabatan;
    this.id = id;
    this.#nuklir = this.#codenuklir();
  }

  get nuklir() {
    return this.#nuklir;
  }
  set nuklir(nuklir) {
    console.log("SANGAT RAHASISA. MILIK DEPARTEMEN PERTAHAMAN.");
  }

  #codenuklir() {
    return `${this.id}-${Math.floor(Math.random() * 1000)}`;
  }
}
const jokowi = new Ri1("Joko Widodo", "Pria", "Islam", 61, "Presiden", "JKW");
console.log(jokowi);
jokowi.#codenuklir(); // syntax eror
console.log(jokowi.#nuklir); // syntax eror
