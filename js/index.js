// Iteration 1: Names and Input
let hacker1 = "Pedro";
let hacker2 = "Hollie";
console.log(hacker1)
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if ( hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters!`)
}else if (hacker1.length < hacker2.length){
   console.log (`The navigator has the longest name, it has ${hacker2.length} characters!`)
}else {
console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

let uppertCaseName = "";

for (let i = 0; i < hacker1.length; i++){
    uppertCaseName = uppertCaseName + " " + hacker1[i].toUpperCase()
}
console.log(uppertCaseName)

// 3.2

let reverseName = "";
for (let i = hacker1.length -1; i >= 0; i--){
    reverseName += hacker1[i]

}
console.log(reverseName);

//3.3
if(hacker1.localeCompare(hacker2)=== -1){
    console.log("The driver's name goes first.")
}else if(hacker2.localeCompare(hacker1)=== 1){
    console.log("Yo, the navigator goes first definitely.")
}else {console.log("What?! You both have the same name?")}

console.log(hacker2.localeCompare(hacker1)=== -1)


// //Bonus 1

// let paragrph = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature"
// let numberOfWords = paragrph.length
// let timesOfEt =  paragrph.split("et").length - 1;
// console.log(timesOfEt)

//bonus 2
// function palindrome(str) {

//     var len = str.length;
//     var mid = Math.floor(len/2);

//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false;
//         }
//     }

//     return true;
// }
// let len = paragrph.length
// var mid = Math.floor(len/2);
// for ( var i = 0; i < mid; i++ ) {
//             if (str[i] !== str[len - 1 - i]) {
                
//             }
//         }
//         return true;
