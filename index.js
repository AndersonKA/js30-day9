const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("hello");

// Interpolated
console.log('hello I am a %s string!', 'fun');

// Styled
console.log('%c I am text!', 'font-size: 20px; background: blue;');

// warning!
console.warn('ohhh nooo!');

// Error :|
console.error('oops!');

// Info
console.info('May 26th is World Lindy Hop Day!');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'You did not select the right element!');

// clearing
// console.clear();

// Viewing DOM Elements
console.log(p);
// console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`)
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age}years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Kae');
console.count('Kae');
console.count('Kae');
console.count('Kae');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

// tables
 console.table(dogs);
