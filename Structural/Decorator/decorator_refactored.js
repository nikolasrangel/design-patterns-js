const Task = function(name) {
  this.name = name;
  this.completed = false;
};

Task.prototype.complete = function() {
  console.log(`Completing task: ${this.name}.`);
  this.completed = true;  
};

Task.prototype.save = function() {
  console.log(`Saving task: ${this.name}.`);  
};

const UrgentTask = function(name, priority) {
  Task.call(this, name);
  this.priority = priority;
};

// Getting inheritance
UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function() {
  console.log('Notifying important people...');  
};

UrgentTask.prototype.save = function() {
  this.notify();
  Task.prototype.save.call(this);
}

const urgentTask = new UrgentTask('Urgent task', 1);

urgentTask.complete();
urgentTask.save();
