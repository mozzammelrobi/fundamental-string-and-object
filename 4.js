// reverse 

// const sentense = 'im learning web dev.';
// let reverse = ''
// for (const letter of sentense)
// // console.log(letter)
// reverse =  letter+reverse  ;
// console.log(reverse)

// const sentense = 'im learning web dev.';
//  let reverse = ''
// for(let i = 0; i<sentense.length ; i++){
//     console.log(i)
//     // console.log(sentense[i])
//     const letter = sentense[i]
//     reverse = letter + reverse
// }
// console.log(reverse)

const sentense = 'im learning web dev.';
const reverse = sentense.split('').reverse().join('')
console.log(reverse)