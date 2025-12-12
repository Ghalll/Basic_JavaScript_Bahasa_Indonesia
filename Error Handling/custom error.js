/* // # Custom Error
?  adalah error yang dibuat atau didefinisikan sendiri oleh pengembang.

    *tujuan/fungsi:
    -  mengembalikan pesan error yang lebih deskriptif dan jelas.
    -  menunjukkan kesalahan yang spesifik dan tidak tersedia dalam kelas Error bawaan dari JavaScript.
    -  memberikan pesan error yang lebih spesifik dan informatif

    ! Custom error dapat dihasilkan dengan membuat kelas turunan dari kelas Error bawaan JavaScript.

*/

/*
    Class CustomError memiliki sebuah constructor yang menerima parameter message
    yang nantinya akan digunakan untuk menampilkan pesan error.
*/
class Customerror extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

const user = '{"name":"budi", "age":"20", "city":"jakarta", "gender":"pria"}';
try {
  const budi = JSON.parse(user);
  if (!budi.name) {
    throw new Customerror("'name' is required.");
  }
  if (!budi.age) {
    throw new Customerror("'age' is required.");
  }
  if (!budi.city) {
    throw new Customerror("'city' is required.");
  }
  if (!budi.gender) {
    throw new Customerror("'gender' is required.");
  }
  console.log(budi.name);
  console.log(budi.age);
  console.log(budi.city);
  console.log(budi.gender);
} catch (err) {
  if (err instanceof SyntaxError) {
    console.log(`JSON Syntax Error: ${err.message}`);
  } else if (err instanceof Customerror) {
    console.log(`Invalid data : ${err.message}`);
  } else if (err instanceof ReferenceError) {
    console.log(err.message);
  } else {
    console.log(err.stack);
  }
}



// * contoh lain
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

function test() {
  throw new CustomError("This is a custom error");
}

try {
  test();
} catch (error) {
  console.log(error.name); // Output: CustomError
  console.log(error.message); // Output: This is a custom error
  console.log(error.stack); // Output: Stack trace of the error
}
