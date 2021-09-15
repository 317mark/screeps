import { taskHarvest } from '../mixins/tasks';

var roleHarvester = {
    // Description - harvesters collect resources from energy sources, and dump said resources into spawns, extensions, storage facilities, or towers

    /** @param {Creep} creep **/
    run: function(creep) {
        // Abilities
        taskHarvest(creep);

        // Logic
        // If creep has free capacity in personal storage, go harvest
        if(creep.store.getFreeCapacity() > 0) {
            creep.harvest();
            creep.memory.currentTask = "harvesting";
        }
        // If creep isn't already next to the nearest source, go there first
        else {
            if(creep.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Spawn1']);
            }
        }
    },

    // checks if the room needs to spawn a creep
    spawn: function(room) {
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester' && creep.room.name == room.name);
        // console.log('Harvesters: ' + harvesters.length, room.name);

        if (harvesters.length < 2) {
            return true;
        }
    },
    // returns an object with the data to spawn a new creep
    spawnData: function(room) {
            let name = 'Harvester' + Game.time;
            let body = [WORK, CARRY, MOVE];
            let memory = {role: 'harvester'};
        
            return {name, body, memory};
    }
};

module.exports = roleHarvester;