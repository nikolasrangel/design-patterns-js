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

const legacyTask = new Task('Legacy task');
legacyTask.complete();
legacyTask.save();

const urgentTask = new Task('Urgent task');

// Decorate with 'priority' and 'notify' attributes
urgentTask.priority = 2;
urgentTask.notify = function() {
  console.log('Notifying important people...');  
}

/**
 * Decorates 'urgentTask' with new save method, 
 * which now includes a call to 'notify'.
 * Thus, don't break the Task 'save' method.
 * */ 
urgentTask.save = function() {
  this.notify();
  // Calls 'save' method from Task object using it on 'this' (urgentTask)
  Task.prototype.save.call(this);
}

urgentTask.save();
