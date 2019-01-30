class Task {
  constructor({name, priority, project, user, completed}) {
    this.name = name;
    this.priority = priority;
    this.project = project;
    this.user = user;
    this.completed = completed; 
  }
  
  get() {
    return this;
  }

  complete() {
    console.log(`Completing task: ${this.name}...`);
    this.completed = true;    
  }

  save() {
    console.log(`Saving task ${this.name}...`);
    
  }

}

module.exports = Task;