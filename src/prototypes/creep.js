// import "../mixins/tasks";

Creep.prototype = {
    // name: '',
    // level: 1,
    // role: undefined,
    // currentTask: 'inactive',
    // birthDate: Game.time,
    // age: Game.time - birthDate,

    // Make creep say hello
    sayHello : function sayHello() { this.say("Hello", true) },

    // // Calculate current room size
    // calculateRoomSize: function calculateRoomSize() {
    //     switch (this.room.controller?.level) {
    //         case 1:
    //         case 2:
    //             return Size.SMALL
    //         case 3:
    //         case 4:
    //         case 5:
    //         case 6:
    //             return Size.MEDIUM
    //         case 7:
    //         case 8:
    //             return Size.LARGE
    //         default:
    //             return Size.ZERO
    //     }
    // },

    // Make creep call out when it's inactive

    // Creep.prototype.renew = () => {
    //     // go out and repair yourself
    // }
}


// Create method on creep prototype to instruct creep to harvest nearest resource
// creep.harvest(NEAREST_ENERGY_RESOURCE)

// Can different creep types inherit the creep prototype?
// Harvester.prototype = Object.create(creep.prototype);