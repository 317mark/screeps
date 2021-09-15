import { taskRefuel, taskUpgrade } from '../mixins/tasks';

var roleUpgrader = {
    // Description - Upgraders are solely dedicated to upgrading the room controller

    /** @param {Creep} creep **/
    run: function(creep) {
        // Abilities
        taskRefuel(creep);
        taskUpgrade(creep);

        // Logic
        // If Creep has no energy, go refuel, otherwise, upgrade the Controller.
        if(creep.store[RESOURCE_ENERGY] == 0) {
            creep.Refuel();
        } else {
            creep.upgrade();
        }
    },

    // checks if the room needs to spawn a creep
    spawn: function(room) {
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader' && creep.room.name == room.name);
        // console.log('Upgraders: ' + upgraders.length, room.name);

        if (upgraders.length < 2) {
            return true;
        }
    },
    // returns an object with the data to spawn a new creep
    spawnData: function(room) {
            let name = 'UPG' + Game.time;
            let body = [WORK, CARRY, MOVE];
            let memory = {role: 'upgrader'};
        
            return {name, body, memory};
    }
};

module.exports = roleUpgrader;