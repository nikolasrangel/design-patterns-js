/**
 * allows a collection of objects to watch an object and
 * be notified of changes.
 * 
 * 1. allows for loosely coupled system;
 * 2. one object is the focal point;
 * 3. group of objects watch for changes.
 * 
 * Example:
 * - group of observers: Logging, Notification, Auditing;
 * they are going to observe Task and watch for changes.
 * 
 * - Task will be decorated with a notify() method to 
 * send a message to each of these three services.
 */