// #  Built-In Class
/* // ? juga disebut class bawaan, seperti:
 *       1. Date     2. Object
 *       3. Array    4. Math
 *       5. String
 
 */

// ! Date
const date = new Date();
const Jakarta = date.toLocaleString("id-ID", {
  timeZone: "Asia/jakarta",
});
console.log(Jakarta);

const Tokyo = date.toLocaleString("ja-JP", {
  timeZone: "Asia/Tokyo",
});
console.log(Tokyo);


// ! Array
class UniqueArray extends Array {
  constructor(...args) {
    // make sure args is unique before passing it to super
    const abc = (item,index) => {
      return args.indexOf(item) === index
    }
    const uniqueValue = args.filter(abc);
      

    super(...uniqueValue);
  }

  push(item) {
    // make sure only unique item is added
    if (!this.includes(item)) {
      super.push(item);
    }
  }
}

const arai = new UniqueArray(1,2,3);
console.log(arai);
arai.push(1.1);
console.log(arai);
console.log(arai[2]);