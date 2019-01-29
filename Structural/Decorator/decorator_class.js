// This is not present in the course

class Task {
  constructor(name) {
    this.name = name;
  }

  hello() {
    console.log(`Hello from: ${this.name}.`);    
  }
}

class UrgentTask extends Task {
  constructor(name) {
    super(name);
  }

  hello() {
    console.log(`Decorating 'hello' method.`);
    Task.prototype.hello.call(this);    
  }
}

const task = new Task('Regular task');
const urgentTask = new UrgentTask('Urgent task');

task.hello();
urgentTask.hello();