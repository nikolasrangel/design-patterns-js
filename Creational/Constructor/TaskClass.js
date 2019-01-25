class Task {
  constructor(param1, param2) {
    this.param1 = param1;
    this.param2 = param2;
  }

  toString() {
    return `${this.param1}, ${this.param2}.`
  }
}

module.exports = Task;