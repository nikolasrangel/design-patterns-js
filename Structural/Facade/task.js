var Task = function ({ name, priority, project, user, completed }) {
	this.name = name;
	this.priority = priority;
	this.project = project;
	this.user = user;
	this.completed = completed;
}

var TaskService = function () {
	return {
		complete: function (task) {
			task.completed = true;
			console.log('completing task: ' + task.name);
		},
		setCompleteDate: function (task) {
			task.completedDate = new Date();
			console.log(task.name + ' completed on ' + task.completedDate);
		},
		notifyCompletion: function (task, user) {
			console.log('Notifying ' + user + ' of the completion of ' + task.name);
		},
		save: function (task) {
			console.log('Saving Task: ' + task.name);
		}
	}
}();

// Façade creates a clean and simple interface
var TaskServiceWrapper = function () {

	var completeAndNotify = function (task) {
		TaskService.complete(myTask);
		if (myTask.completed == true) {
			TaskService.setCompleteDate(myTask);
			TaskService.notifyCompletion(myTask, myTask.user);
			TaskService.save(myTask);
		}
	}
	return {
		completeAndNotify
	}
}();

var myTask = new Task({
	name: 'MyTask',
	priority: 1,
	project: 'Courses',
	user: 'Jon',
	completed: false
});

TaskServiceWrapper.completeAndNotify(myTask);

console.log(myTask);
