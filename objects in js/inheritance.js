'strict mode';

var task = {
  title: 'My title',
  description: 'My description'
};

Object.defineProperty(task, 'toString', {
  value: function() {
    return `${this.title} and ${this.description}.`
  },
  writable: false,
  enumerable: false,
  configurable: false
});

// Creates a new object from 'task'
var urgentTask = Object.create(task);

// this will just copy the 'task' reference
// var urgentTask = task;

Object.defineProperty(urgentTask, 'toString', {
  value: function() {
    return `${this.title}.`
  },
  writable: false,
  enumerable: false,
  configurable: false
});

console.log(task.toString());

console.log(urgentTask.toString());
