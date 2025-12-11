/* // # Rekursif
? merupakan teknik pada sebuah function yang memanggil dirinya sendiri.
    - bisa menggantikan operasi iterasi dengan rekursi.
    - dapat membuat dan mengolah data structures seperti Tree dan Array.
*/

// * fungsi countdown dengan syntax biasa.
const countDown = (start) => {
  do {
    console.log(start);
    start -= 1;
  } while (start > 0);
};

countDown(10);



// * rerkusif dari code diatas.
const countDown2 = (start) => {
  console.log(start);
  if (start > 0) countDown(start - 1);
};

countDown(10);
