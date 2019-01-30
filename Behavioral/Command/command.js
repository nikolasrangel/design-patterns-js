/**
 * Encapsulates the calling of a method as an object.
 * 
 * 1. fully decouples the execution from the implementation;
 * 2. allows for less fragile implementations;
 * 3. support undo operations;
 * 4. generic interface into services to execute commands
 * as needed.
 * 5. support auditing and logging of operations.
 */