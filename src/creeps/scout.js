import { taskHarvest, taskRefuel, taskPatrol } from '../mixins/tasks';

var roleScout = {
    // Description - Scouts carry out exploration missions, searching for nearby, habitable spaces for expansion

    /** @param {Creep} creep **/
    run: function(creep) {
        // Abilities
        taskHarvest(creep);
        taskRefuel(creep);
        taskPatrol(creep);

        // Logic

    },

    // checks if the room needs to spawn a creep
    spawn: function(room) {
        var scouts = _.filter(Game.creeps, (creep) => creep.memory.role == 'scout' && creep.room.name == room.name);
        // console.log('Scouts: ' + scouts.length, room.name);

        if (scouts.length < 1) {
            return true;
        }
    },
    // returns an object with the data to spawn a new creep
    spawnData: function(room) {
        let name = 'SCOUT' + Game.time;
        let body = [WORK, CARRY, MOVE];
        let memory = {role: 'scout'};
    
        return {name, body,patrol};
    }
}
    
module.exports = roleScout;