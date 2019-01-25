const Task = function(param1, param2) {
  this.param1 = param1;
  this.param2 = param2;
}

// the 'toString' method exists just in one place and objects refers to that
Task.prototype.toString = function() {
  return `${this.param1}, ${this.param2}.`
}

Task.prototype.hello = function() {
  return `Hello.`
}

module.exports = Task;