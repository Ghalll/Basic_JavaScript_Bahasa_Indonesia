// # : Overriding
// ? > fitur yang dapat mendeklarasikan properti dan method yang spesifik pada subclass.
/* // jadi overriding ada 2, yaitu:
*       1. Property Overriding atau Constuctor Overriding.
*       2. Method Overriding.
! untuk melakukan overriding terhadap properti di superclass, pakai keyword 'super();'.
*/

// * property overriding
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}
class Cat extends Animal { // subclass
  constructor(name, age, gender, color) {
    super(name, age); // Overriding properti superclass
    this.gender = gender;
    this.color = color;
  }
}
const eza = new Cat("Mueza", 4, "male", "orange");
console.log(eza);
console.log(eza.color);


// * Method Overriding
class Chat {
  constructor(sender) {
    this.sender = sender;
  }

  sendchat(talk, receiver) {
    console.log(`${this.sender} sent ${talk} to ${receiver}`);
  }
  sendmedia(media, receiver) {
    console.log(`proces ${this.sender} sent a ${media} to ${receiver}`);
  }
}
class Wachat extends Chat {
  constructor(sender, isBisnis) {
    super(sender);
    this.isBisnis = isBisnis;
  }
  // overriding method
  sendchat(talk, receiver) {
    console.log(`${this.sender} sent ${talk} to ${receiver} via WhatsApp`);
  }
  // overriding method bisa juga dengan keyword 'super' jika diperlukan
  sendmedia(media, receiver) {
    super.sendmedia(media, receiver);
    console.log("message sent via WhatsApp");
  }
}
const ghaly = new Wachat(+6287887756619, true);
const ayu = new Chat(+6282283758233);
ghaly.sendchat("'ayu sahurr!!'", "'ayu'");
ayu.sendmedia("'foto pap'", "'ghaly'");

/* // ! tambahan:
todo    dalam method overriding, nama methodnya harus dibuat sama di subclass.
?       jika tidak sama itu bukan overriding, tetapi penambahan metode baru di subclass.
*/
