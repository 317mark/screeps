import { taskHaul } from '../mixins/tasks';

var roleHauler = {
    // Description - Haulers move energy from one place to another

    /** @param {Creep} creep **/
    run: function(creep) {
        // Abilities
        taskHaul(creep);

        // Logic

        // Haul loose energy to nearby energy store
        // Haul energy from one energy store to another within the same (or different) room
        // Haul energy from energy store to tower that needs energy
    },

    // checks if the room needs to spawn a creep
    spawn: function(room) {
        var haulers = _.filter(Game.creeps, (creep) => creep.memory.role == 'hauler' && creep.room.name == room.name);
        // console.log('Haulers: ' + haulers.length, room.name);

        if (haulers.length < 1) {
            return true;
        }
    },
    // returns an object with the data to spawn a new creep
    spawnData: function(room) {
        let name = 'HAUL' + Game.time;
        let body = [WORK, CARRY, MOVE];
        let memory = {role: 'hauler'};
    
        return {name, body,patrol};
    }
}
    
module.exports = roleHauler;