//# Destructuring Array syntax
//? fungsi nya sama dengan 'Destructuring Object'.
//! bedanya, 'Destructuring Array ' pakai kurung siku '[]'

const makan = ["bakso", "mie ayam", "pangsit", "sate"];
const [makan1, makan2, makan3, makan4] = makan;
console.log(makan1);
console.log(makan2);
console.log(makan3);
console.log(makan4);

//memilih index tertentu
//pakai koma ',' untuk mewakili index
const minum = ["kopi", "macha", "teh", "susu"];
const [, , minum3] = minum;
console.log(`\n${minum3}\n`);

//metode Destructuring Assignment
const hp = ["iPhone", "samsung", "xiaomi", "infinix", "goole"];
let hpden = "xiaomi 6a";
let hpnyo = "iPhone xs";
[hpden, hpnyo] = hp;
console.log(hpden);
console.log(hpnyo + "\n");

//Default Values
//sama kek object, nilai var yg gk ada di array tpi dibuat didestructuring
//nilainya undifined, buat nilai varnya pd destructuring
const jajan = ["roti", "goreng", "mixue", "kfc"];
const [, , gerai1, gerai2, gerai3 = "mekdi"] = jajan;
console.log(gerai1);
console.log(gerai2);
console.log(gerai3);
