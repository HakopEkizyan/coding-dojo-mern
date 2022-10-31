//first problem
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars //first index of cars
const [ ,otherRandomCar ] = cars //second index of cars
//Predict the output
console.log(randomCar) //this one will print 'Tesla'
console.log(otherRandomCar) //this one will print 'Mercedes'

//second problem
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee; //set otherName to 'Elon'
//Predict the output
console.log(name); //this wont print anything, in fact I wager it gives an error
console.log(otherName); //this would print 'Elon'

//third problem
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345'; //simple as, this is left alone
const { password: hashedPassword } = person; //no key 'password' in person
//Predict the output
console.log(password); //print '12345'
console.log(hashedPassword); //theres no 'password' key in dictionary person, may print undefined

//fourth problem
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; //'first' becomes second index, 'first' = 2
const [,,,second] = numbers; //'second' becomes 5
const [,,,,,,,,third] = numbers; //'third' becomes 2
//Predict the output
console.log(first == second); //false
console.log(first == third); //true because first = 2 and third = 2

//fifth problem 
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; //'value'
const { secondKey } = lastTest; //'[1, 5, 1, 8, 3, 3]
const [ ,willThisWork] = secondKey; //it will work haha, since second key is the array, this does work, second index is 5 meaning willThisWork will be 5
//Predict the output
console.log(key); //print 'value'
console.log(secondKey); //print '[1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); //print 1
console.log(willThisWork); //print 5
