const repoList = [
  { name: 'task', source: './repos/taskRepository' },
  { name: 'user', source: './repos/userRepository' },
  { name: 'project', source: './repos/projectRepository' }
];

const repositoryFactory = function() {
  var repos = this;

  repoList.forEach(function(repo) {
    repos[repo.name] = require(repo.source);
  });
};

const repositoryFactory2 = function() {

  const repos = repoList.reduce((obj, repo) => {    
    obj[repo.name] = require(repo.source);
    return obj;
  }, {});
  
  return repos;
}

module.exports = new repositoryFactory2();
//module.exports = repositoryFactory2;