// # inheritance atau Pewarisan
/* // ? > suatu class dpat mewarisi sifat-sifat dari 'superclass', class yang mewarisi itu disebut 'subclass'

    !! gunakan keyword 'extends' untuk melakukan pewarisan
?   > ex : class Policecar extends Car
*       > 'Car' adalah superclass
*       > 'Policecar' adalah subclass
? konsep inheritance cocok digunakan ketika membuat object class yang memiliki sedikit perbedaan saja.
? biasanya perbedaan itu adalah hal yang lebih spesifik pada masing" object subclass.
*/

// superclass
// method dan properti dalamnya yg akan diwarisi yaitu: sender(peroperi) & sendmessage(method)
class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}

// subclass
class Waservice extends MailService {
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}
class Emailservice extends MailService {
  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
}
const wa = new Waservice(087887756619);
wa.sendMessage("Hai a kaba ?", 082283758233);
wa.sendBroadcastMessage("kita kuliah jam 7 pagi", [082283758233, 085760526669]);
//wa.sendDelayedMessage(); // syntax eror

const email = new Emailservice("yogi@gmail.com");
email.sendMessage("pengumpulan tugas1", "hasri@gmail.com");
email.sendDelayedMessage("jadwal hari libur", "agung@gmail.com", 3000);
//email.sendBroadcastMessage(); // syntax eror

// ! Operator instanceof
/* // ? digunakan untuk memeriksa, object instance turunan dari class yang mana.
!   gunakan keyword 'instanceof' untuk melakukan pemeriksaana object
*   operator ini akan mengembalikan nilai boolean saja
*/

console.log(wa instanceof Waservice); // true
console.log(wa instanceof MailService); // true
console.log(wa instanceof Emailservice); // false

console.log(email instanceof Waservice); // false
console.log(email instanceof MailService); // true
console.log(email instanceof Emailservice); // true

/* // ! tambahan
* pada baris ke 34.
! >> setTimeout() 
? fungsi pada JavaScript yang digunakan untuk :
? menjalankan suatu fungsi atau kode tertentu, setelah jangka waktu tertentu (delay) yang ditentukan.   
*/
