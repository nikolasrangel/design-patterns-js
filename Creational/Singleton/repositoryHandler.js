const repository = require('./repository');

const handler = () => {
  const save = (task) => {
    repository.save(task);
  }
  
  return {
    save
  };
};

module.exports = handler();