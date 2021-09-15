import { taskRefuel, taskAttack, taskGuard, taskPatrol } from '../mixins/tasks';

var roleSoldier = {
    // Description - Soldiers are combat-ready creeps that either patrol, guard, or attack, other creeps or structures, depending on the situation in their environment

    /** @param {Creep} creep **/
    run: function(creep) {
        // Abilities
        taskAttack(creep);
        taskRefuel(creep);
        taskGuard(creep);
        taskPatrol(creep);

        // Logic

    },

    // checks if the room needs to spawn a creep
    spawn: function(room) {
        var soldiers = _.filter(Game.creeps, (creep) => creep.memory.role == 'soldier' && creep.room.name == room.name);
        // console.log('Soldiers: ' + soldiers.length, room.name);

        if (soldiers.length < 2) {
            return true;
        }
    },
    // returns an object with the data to spawn a new creep
    spawnData: function(room) {
            let name = 'SOLD' + Game.time;
            let body = [WORK, CARRY, MOVE];
            let memory = {role: 'soldier'};
        
            return {name, body, memory};
    }
};

module.exports = roleSoldier;