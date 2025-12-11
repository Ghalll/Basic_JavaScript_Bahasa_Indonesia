//# tipe data object
//? pakai kurung kurawal '{}', dan key lanjut dengan nilai nya
//! key harus string dan symbol

let id = Symbol("nick");
const orang = {
  nama: "jokowi",
  jabatan: "presiden",
  umur: 56,
  agama: "islam",
  negara: "indonesia",
  hidup: true,
  "tempat tinggal": "jakarta",
  [id]: "jkw"
};
//console.log(`presiden indonesia adalah ${orang.nama} umurnya ${orang.umur}`);
//console.log(`dia tinggal di ${orang["tempat tinggal"]}`);
console.log("data sebelum di modifikasi");
console.log(orang);

//memodifikasi data
orang.umur = 60;
orang["tempat tinggal"] = "solo";
orang.anak = "mas gibran";
console.log("data setelah di modifikasi");
console.log(orang);

//medelete data
//pakaia fungsi 'delete'
delete orang.jabatan;
console.log("data jabatan di delete");
console.log(orang);
