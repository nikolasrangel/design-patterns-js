const repository = () => {
  let called = 0;

  console.log('Newing up task repo...');

  const save = (task) => {
    called++;
    console.log(`Saving: ${task}. Called ${called} times.`);
  };

  return {
    save
  };
  
};

module.exports = repository();