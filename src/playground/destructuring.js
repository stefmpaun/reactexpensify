// const person = {
//   name: 'Andrew',
//   age: 27,
//   location: {
//     city: 'Philadelphia',
//     temp: 88
//   }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

//const book = {
//  title: 'Ego is the Enemy',
//  author: 'Ryan Holiday',
//  publisher: {
//    // name: 'Penguin'
//  }
//};

//const { name: publisherName = 'Self-Published' } = book.publisher;

//console.log(publisherName); // Penguin, Self-Published

const item = ['Coffee h', '$2.00', '$2.50', '$2.75']
const [myCoffee, smallCoffee, mediumCoffee, largeCoffee] = item

console.log([`A coffee for me ${myCoffee} costs ${mediumCoffee}!`])