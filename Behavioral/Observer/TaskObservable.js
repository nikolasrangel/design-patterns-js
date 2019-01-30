const Task = require('./Task');
const ObserverList = require('./ObserverList');

/**
 * Decorates the Task class with the Observer list and
 * notify method.
 */
class TaskObservable extends Task {
  constructor(obj) {
    super(obj);
    this.observers = new ObserverList();
  }

  notify(context) {
    const arr = this.observers.get();

    arr.forEach(observer => {
      observer.update(this);
    });
  }

  save() {
    this.notify();
    Task.prototype.save.call(this);
  }

  addObserver(observer) {
    this.observers.addObserver(observer);
  }

  removeObserver(observer) {
    this.observers.remove(observer);
  }

}

module.exports = TaskObservable;