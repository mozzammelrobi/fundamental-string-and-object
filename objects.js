/* how to declaration objects and postmortem */

/** what i learn about object
 * 1--> access properties and change values
 * 2--> how to find objects key only
 * 3--> how to get object values only
 * 
 * 
*/

// const bottle ={
//     brand : 'pren',
//     color: 'white',
//     price: 20,
//     isClean: true
// }
// const subject = {
//     name: 'biology',
//     teacher: 'chattra',
//     examDate: '20 feb',
//     chapter : ['live science', 'repuduction', 'planet world ', 'bio tech']
// exams :{
//     name : 'Final Exam',
//     marks: 100,
// }
// }
// console.log(typeof bottle)
// console.log(subject['chapter'])



/* how to access objects properties */ // ----------------------------------------------------------------------

// no-1 is dot notation
// no-2 is using third bracket 
// const person = {
//     name: 'sodor ali',
//     age: 25,
//     profession: 'devoloper',
//     salary: 25000,
//     isMarried: true,
//     'fav places': ['bandorbon', 'coxbazar', 'sea beach'],
// }
// console.log(person)
// const incom = person.salary
// console.log(incom)
// console.log(person['fav places'])





/* HOW TO MODIFY VALUES */ // ------------------------------------
// const person = {
//     name: 'sodor ali',
//     age: 25,
//     profession: 'devoloper',
//     salary: 25000,
//     isMarried: true,
//     'fav places': ['bandorbon', 'coxbazar', 'sea beach'],
// // }
// person.salary = 30000,
// person['age']= 27
// console.log(person)

// const keyName = 'profession'
// console.log(keyName)
// const propName = 'profession'
// person['propName'] = 'devops'
// console.log(propName)
// console.log(person)


// how to get object key only and values
// const computer = {
//     brand : 'lenevo',
//     price :  34000,
//     hdd : 512,
//     monitor : 'hp'
// }
// // access object keys and how to put it on a variable and print -----
// console.log(Object.keys(computer))
// const keys = Object.keys(computer)
// console.log(keys)

// acccess object values and put it on variable and print-------
// console.log(Object.values(computer))
// const values = Object.values(computer)
// console.log(values)


// nested in objects 

// const collage = {
//     name: 'vnc',
//     class: ['11', '12'],
//     event: ['science fair', 'bijoi dibos', '21 Feb'],
//     unique: {
//         color: 'blue',
//         result: {
//             gpa: 5 ,
//             merit: 'top'
//         }

//     }
// }
// console.log(typeof collage.unique)
// console.log(collage.unique.color)
// console.log(Object.keys(collage.unique))
// const keys = Object.keys(collage.unique)
// console.log(keys)

// collage.unique.result.merit = 'they are toper'
// console.log(collage.unique.result.merit)
// console.log(collage)


// loop an object & ways to declare ----------------------------

const mobile = {
    brand: 'samsumg',
    price: 1000,
    color: 'black',
    camera: '12mp'
}

// for (const prop in mobile){
//     console.log(prop)
//     console.log(mobile[prop])
// }

const keys = Object.keys(mobile)
console.log(keys)

for(const key of keys){
    console.log(key , ':', mobile[key])
}