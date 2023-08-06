const LinkedList = require('./LinkedList');

let seasons = new LinkedList();

seasons.addToHead('summer')
seasons.addToHead('spring')
seasons.addToTail('fall')
seasons.addToTail('winter')
seasons.removeHead();
seasons.printList();
