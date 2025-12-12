/* // # Throwing Errors
? Operator ini akan “melemparkan” eror pada program, sehingga eksekusi kode akan masuk pada blok catch. 

    *fungsi:
    - digunakan untuk menghasilkan error secara manual dalam kode.  

    *JSON.parse(); => adalah sebuah fungsi built-in
    - melakukan parsing atau konversi dari variabel json (String) menjadi sebuah object.
    - digunakan untuk pertukaran data antar platform dan bahasa pemrograman.
*/


// (1)
//  kode normal. tidak ada eror
const web = '{"domain":"Akaba?", "server":true}';
try {
    const online = JSON.parse(web);
    console.log(`Domain : ${online.domain}`);
    console.log(`Is server online : ${online.server}`);
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

// (2)
//  kode yang sebenarnya eror. tapi tnpa implementasi throwing error
const web2 = '{ "domain":"Akaba?" }';
try {
    const offline = JSON.parse(web2);
    console.log(offline.domain); // Akaba?
    console.log(offline.server); // undifined
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}

// (3)
// jika kode eror. mengatasi dengan metode throw
// mengimplementasikan throw untuk menimbulkan eror kita sendiri:
const web3 = '{"domain":"Akaba?"}'; 
try {
    const offline = JSON.parse(web3);
    if(!offline.server) {
        throw new Error ("Server is offline");
    }
    console.log(offline.domain);
    console.log(offline.server);
} catch (error) {
    console.log(`server status: ${error.message}`);
}

// contoh lain. penerapan metode throwing error
const jsonString = '{"name":"John","age":30,"city":"New York"}';
try {
  const parsedJson = JSON.parse(jsonString);
  if (!parsedJson.email) {
    throw new Error('Email is missing in JSON data');
  }
  console.log(parsedJson);
} catch (error) {
  console.error(error.message);
}


/*  // * menampilkan pesan error yang sesuai dengan error yang terjadi
        - gunakanya statement if else dalam blok kode catch
*/
const json = '{ "name": "Yoda", "age": 20, "email":"yoda@gmail.com" }';
try {
  const user = JSON.parse(json);
  if (!user.email) {
    throw new SyntaxError("'email' is required.");
  }
  errorCode;
  console.log(user.name); // Yoda
  console.log(user.age); // 20
  console.log(user.email); 

} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`kode error : ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.name);
    } else {
        console.log(error.stack);
    }
}
/* 
   // * operator instanceof: 
    memberikan hasil eror yang lebih detail dan sesuai dengan eror yang terjadi.
    sehingga didapatkan cara membuat percabangan untuk mengatasi errornya.
*/