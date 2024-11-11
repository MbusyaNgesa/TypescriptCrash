// let age: number = 20;
// if (age < 50) age += 10;
// console.log(age);

//Declaration of variables in Ts
// let sales: number = 123_123_434;
// let course: string = "Typescript";
// let is_published = true;
// let today;

//Arrays
// let number = [1, 2, 3];
// let number: number[] = [] //If empty should have a type annotation

//Tuples
// let user: [number, string] = [1, "Ngesa"];
// user[1].length;
// console.log(user); //To check output click f5 then f10 to line you want executed

//Enums

// constants using vanilla js
// const small = 1;
// const medium = 2;
// const large = 3;

//constants using typescript
// enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }
// let mySize = Size.Large;
// console.log(mySize);

//optimizing enum to generate lesser js code
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize = Size.Large;
console.log(mySize);
