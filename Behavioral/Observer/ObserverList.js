class ObserverList {
  constructor() {
    this.observerList = [];
  }

  get() {
    return this.observerList;
  }

  addObserver(observer) {
    this.observerList.push(observer);
  }

  getObserver(index) {
    if (index > -1 && index < this.observerList.length) {
      return this.observerList[index];
    }
  }

  removeAt(index) {
    this.observerList.splice(index, 1);
  };

  remove(observer) {
    const index = this.observerList.findIndex(curr => curr === observer);

    if (index >= 0) {
      this.removeAt(index);
    }
  }
}

module.exports = ObserverList;