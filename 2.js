// uppercase /lowercase /trim 

const school = 'Pilot Cadate School';
console.log(school)
console.log(school.toUpperCase())
console.log(school.toLowerCase())

// comparision of toUpperCase and toLowerCase

const subject = '  English';
const book = 'english ';
if(subject.toLowerCase().trim() == book.toLowerCase().trim()){
    console.log('both are same ')
}
else{
    console.log('both are not same ')
}