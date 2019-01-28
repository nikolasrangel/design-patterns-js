/**
 * used to restrict an object to one instance of that object across the application.
 * 
 * 1. remembers the last time you used it;
 * 2. hands the same instance back;
 * 3. node.js uses CommonJS. From the Node.js docs:
 * "Modules are cached after the first time they are loaded."
 * "(...) every call to require('foo') will get exactly the same object returned."
 * "To have a module execute code multiple times, export a function, and call that function."
 * 
 * So, to have a singleton object, is necessary to export it with
 * a function call or with 'new function'. And require with
 * 'require('./foo'), for example.
 */