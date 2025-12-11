//syntax switchcase
//konsepnya sama dengan if else
//bedanya switchcase: mengevauasi nilai yang sama dengan beberapa pilihan yang mungkin.

let bahasa = "jepang";
let ucapan = null;
switch (bahasa) {
  case "inggris":
    ucapan = "Morning";
    break;
  case "rusia":
    ucapan = "Доброе утро";
    break;
  case "arab":
    ucapan = "صباح الخير";
    break;
  case "jepang":
    ucapan = "おはようございます";
    break;
  default:
    ucapan = "Pagi coy";
}
console.log(ucapan);

let hari = 3;
let namaHari;
switch (hari) {
  case 1:
    namaHari = "Senin";
    break;
  case 2:
    namaHari = "Selasa";
    break;
  case 3:
    namaHari = "Rabu";
    break;
  case 4:
    namaHari = "Kamis";
    break;
  case 5:
    namaHari = "Jumat";
    break;
  case 6:
    namaHari = "Sabtu";
    break;
  case 7:
    namaHari = "Minggu";
    break;
  default:
    namaHari = "Hari tidak valid";
    break;
}

console.log(namaHari); // Output: "Rabu"
