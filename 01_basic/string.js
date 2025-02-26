let name = "prem"
let repo = 50

console.log(`my name is ${name} and my repocount is ${repo}`);

const gameName = new String(`prem-raj-jangam`)
// const gameName = "premraj";
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf(`m`));

const newString = gameName.substring(0, 4);
console.log(newString);
const anotherString = gameName.slice(-6, 4);
console.log(anotherString);

const newStringOne = "  prem  "
console.log(newStringOne);
console.log(newStringOne.trim());

const mail = "premraj%019gmal.com"
console.log(mail.replace(`%`,`@`));
console.log(mail.includes("premraj"));

console.log(gameName.split(`-`));








