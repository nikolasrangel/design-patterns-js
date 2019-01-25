const repo = function() {
  let db;
  const connection = {};

  const get = id => {
    console.log(`Fetching task: ${id}.`);
    return {
      name: 'new task from db.'
    };
  };

  // revealing module pattern
  return {
    get: get
  };
}

module.exports = repo();