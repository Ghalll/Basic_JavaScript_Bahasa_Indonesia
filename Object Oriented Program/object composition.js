// # Object Composition
// ? > adalah konsep untuk membuat sebuah objek baru dengan menggabungkan beberapa objek yang sudah ada.
// ? yang digabungkan adalah method nya.
/* 
!   Object.assign() 
?   > metode yang digunakan untuk pengabbungan objek.
*/

// * contoh sederhanya pada variabel
const swimmer = {
  swim() {
    // method nya
    console.log("swimming...");
  },
};
const walker = {
  walk() {
    // method nya
    console.log("walking...");
  },
};
const flyer = {
  fly() {
    // method nya
    console.log("flying...");
  },
};

const superman = Object.assign({}, swimmer, walker, flyer); // pengabungan menjdi 1 objek variabel

superman.swim(); // Output: "swimming..."
superman.walk(); // Output: "walking..."
superman.fly(); // Output: "flying..."
console.log(superman);



// * pengaplikasian pada object class.
class Developer {
  constructor(name) {
    this.name = name;
  }

  commitChanges() {
    console.log(`${this.name} is committing changes...`);
  }
}

// ! memecah method satu persatu
function BuildUI(developer) {
  return {
    buildui: () => {
      console.log(`${developer.name} id building UI...`);
    },
  };
}
function BuildAPI(developer) {
  return {
    buildAPI: () => {
      console.log(`${developer.name} is building API...`);
    },
};
}
function DeployApp(developer) {
    return {
        deployApp: () => {
            console.log(`${developer.name} is deploying app...`);
        },
    };
}
/*const dev1 = new Developer("ayu");
BuildUI(dev1).buildui();
BuildAPI(dev1).buildAPI();
DeployApp(dev1).deployApp();
*/


// ! membuat fungsi objek creator
function FrontEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, BuildUI(developer));
}
function BackEndDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, BuildAPI(developer));
}
function DevOps(name) {
    const developer = new Developer(name);
    return Object.assign(developer, DeployApp(developer));
}
function FullDeveloper(name) {
    const developer = new Developer(name);
    return Object.assign(developer, BuildUI(developer), BuildAPI(developer), DeployApp(developer));
}

const dev1 = FrontEndDeveloper("luhut binsar");
dev1.commitChanges();
dev1.buildui();
console.log(`is ${dev1.name} frontend developer ?`, dev1 instanceof Developer) ;

const dev2 = BackEndDeveloper("puan pntk");
dev2.commitChanges();
dev2.buildAPI();
console.log(`is ${dev2.name} backend developer ?`, dev2 instanceof Developer);

const dev3 = DevOps("ganjar");
dev3.commitChanges();
dev3.deployApp();
console.log(`is ${dev3.name}  devops developer ?`, dev3 instanceof Developer);

const dev4 = FullDeveloper("ayu");
dev4.commitChanges();
dev4.buildui();
dev4.buildAPI();
dev4.deployApp();
console.log(`is ${dev4.name} full developer ?`, dev4 instanceof Developer);
