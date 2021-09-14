import { taskHarvest } from '../mixins/tasks';

var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(obj.store.getFreeCapacity() > 0) {
            taskHarvest(creep);
            creep.harvest();
        }
        // If creep isn't already next to that source, go there
        else {
            if(obj.transfer(Game.spawns['Spawn1'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                obj.moveTo(Game.spawns['Spawn1']);
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