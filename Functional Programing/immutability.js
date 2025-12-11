/* // # Immutability
? Immutable berarti sebuah objek tidak boleh diubah setelah objek tersebut dibuat.
! jika tetap ingin diubah maka, buat object baru dengan menerapkan paradigma FP.
*/

// * mengubah nilai properti user dengan penerapan paradigma FP.
const user = {
  firstname: "Harry",
  lastName: "Protter", // ups, typo!
};

const createUserWithNewLastName = (newLastName, user) => {
  return { ...user, lastName: newLastName };
};
const newUser = createUserWithNewLastName("Potter", user);

console.log(newUser);
console.log(typeof createUserWithNewLastName);

/*
    lastname adalah nilai properti yang diubah. dengan mengembalikan dari object user.
*/