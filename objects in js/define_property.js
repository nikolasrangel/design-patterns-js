'strict mode';

var task = {
  title: 'My title',
  description: 'My description'
};

Object.defineProperty(task, 'toString', {
  value: function() {
    return `${this.title} and ${this.description}.`
  },
  writable: false, // prevent changes in this particular propert!
  enumerable: false,
  configurable: false // prevent or not changes in this properties in the future
});

// it will be ignored and neither throw an error
task.toString = 20;

// however, the other properties are writable
task.title = 'bazinga';

console.log(Object.keys(task)); // ['title', 'description']
console.log(task.toString()); // My title and My description
