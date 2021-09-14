import "../mixins/tasks"

Creep.prototype = {
    level: 1,
    role: undefined,
    currentTask: 'inactive',
    birthDate: Game.time,
    age: Game.time - birthDate,

    // Make creep say hello
    sayHello : function sayHello() { this.say("Hello", true) },

    // Call for help from nearby creeps if getting attacked
    // Make creep call out when it's inactive

    // Creep.prototype.renew = () => {
    //     // go out and repair yourself
    // }
}


// Create function on creep prototype to instruct creep to harvest nearest resource
// creep.harvest(NEAREST_ENERGY_RESOURCE)

// Can different creep types inherit the creep prototype?
// Harvester.prototype = Object.create(creep.prototype);