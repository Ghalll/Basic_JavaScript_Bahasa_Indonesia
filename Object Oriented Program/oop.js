/* // TODO : Object-Oriented Programming
? paradigma pemrograman guna memodelkan sistem atau aplikasi menggunakan objek yang terdiri dari properti dan metode.

* objek adalah entitas yang terdiri dari dua hal :
 ! 1. properties : merupakan nilai didalam objek yang menyimpan informasi tentang objek tersebut.
 ! 2. methods : merupakan fungsi yang menggambarkan aksi yang dapat dilakukan oleh objek tersebut.
*/

// * contoh
const car = {
  // ini properties
  brand: "Toyota supra",
  color: "white",
  maxspeed: 270,
  chassisNumber: "MK-4",

  // ini methods
  maju: () => {
    console.log("maju");
  },
  mundur: () => {
    console.log("mundur");
  },
  belok: () => {
    console.log("belok");
  }
};
