/// 09/02/2026//
// const boy = [
//   { name: "Rafi", age: 78 },
//   { name: "Nila", age: 92 },
//   { name: "Hasan", age: 45 },
//   { name: "Mitu", age: 60 },
//   { name: "Tuhin", age: 30 }
// ];

// for (let i = 0; i < boy.length; i++) {
//   console.log(boy[i].name + " ago : " + boy[i].age);
// }

let n = prompt("Please enter Number");
let jor = 0;

for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
            jor = jor + i;
    }
}

console.log("1 theke " + n + " porjonto ar jor songkhar jogfol =", jor);
