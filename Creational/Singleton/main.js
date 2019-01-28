const repository = require('./repository');
const repositoryHandler = require('./repositoryHandler');

repository.save('Saving from main');
repository.save('Saving from main');
repository.save('Saving from main');

repositoryHandler.save('Saving from handler');
repositoryHandler.save('Saving from handler');
repositoryHandler.save('Saving from handler');
