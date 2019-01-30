const Task = require('./Task');
const TaskObservable = require('./TaskObservable');

const TASK_PROPERTIES = {
  name: 'Random task',
  priority: 20,
  project: 'Random project',
  user: 'Random user',
  completed: false
};

// Observers
const notificationService = function () {
  var message = 'Notifying ';
  this.update = function (task) {
    console.log(message + task.user + ' for task ' + task.name);
  }
};
const loggingService = function () {
  var message = 'Logging '
  this.update = function (task) {
    console.log(message + task.user + ' for task ' + task.name);
  }
}
const auditingService = function () {
  var message = 'Auditing '
  this.update = function (task) {
    console.log(message + task.user + ' for task ' + task.name);
  }
}


const task = new Task(TASK_PROPERTIES);
const taskObservable = new TaskObservable(TASK_PROPERTIES);
var notification = new notificationService();
var logging = new loggingService();
var auditing = new auditingService();


//console.log(task);
//console.log(taskObservable);

// Adding up the observers
taskObservable.addObserver(notification);
taskObservable.addObserver(logging);
taskObservable.addObserver(auditing);

taskObservable.removeObserver(notification);

taskObservable.save();