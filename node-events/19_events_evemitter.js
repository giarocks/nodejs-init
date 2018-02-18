var events = require('events'); // events .. plural
var eventEmitter = new events.EventEmitter(); //Notice the CAPS - EventEmitter class

//create event handler
var screamEventHandler = function(){
    console.log ('I handle the scream event');
}

// assign event handler to the event
eventEmitter.on('scream', screamEventHandler);

// emit Or Fire the event
eventEmitter.emit('scream');
