import { taskRefuel, taskBuild, taskRepair } from '../mixins/tasks';

var roleBuilder = {
	// Description - Builders take available resources, and either repair existing structures or build new structures

    /** @param {Creep} creep **/
    run: function(creep) {
		// Abilities
		taskRefuel(creep);
		taskBuild(creep);
		taskRepair(creep);

		// Logic
		// Define construction and repair sites in the room
		const constructionSites = creep.room.find(FIND_CONSTRUCTION_SITES);
		const repairSites = creep.room.find(FIND_MY_STRUCTURES);
		const repairTargets = repairSites.filter(site => site.hits < site.hitsMax);
		
		if (creep.store[RESOURCE_ENERGY] > 0) {
			if (repairTargets) {
				creep.repair();
			} else if (constructionSites) {
				creep.build();
			} else {
				creep.refuel();
			}
		} else {
			creep.harvest();
		}



		// -------- Ideas --------
		// Base builder's current task on needs of the base. Fix things first – if any structures have health below 75%, fix them. Otherwise, work on incomplete construction sites.





		// V2.0
		// // Set Creep to build mode by default
		// creep.build();
		// // If Creep is in build mode, build as long as energy storage is greater than 0. If energy storage reaches 0, go harvest.
		// if (creep.memory.currentTask == 'building') {
		// 	if (creep.store[RESOURCE_ENERGY] > 0) {
		// 		creep.build();
		// 	} else {
		// 		creep.harvest();
		// 	}
		// } else if (creep.memory.currentTask == 'building' && creep.store.getFreeCapacity() == 0) {
		// 	creep.harvest();
		// }


		// V1.0
		// // If Creep is building, but has no energy on hand, go harvest
	    // if(creep.memory.currentTask =='building' && creep.store[RESOURCE_ENERGY] == 0) {
		// 	creep.memory.currentTask = "harvesting";
		// 	creep.harvest();
	    // }
		
		// // If Creep is full of energy, and not building, go build
	    // if(!creep.memory.currentTask =='building' && creep.store.getFreeCapacity() == 0) {
	    //     creep.memory.currentTask = 'building';
		// 	creep.build();

	    // }
		// // If Creep is set to currently build, find nearest construction site and go build it while Creep has energy on hand
	    // if(creep.memory.currentTask == 'building') {
	    //     creep.build();
	    // }	
	},


	// checks if the room needs to spawn a creep
    spawn: function(room) {
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder' && creep.room.name == room.name);
        // console.log('Builders: ' + builders.length, room.name);

        if (builders.length < 2) {
            return true;
        }
    },
    // returns an object with the data to spawn a new creep
    spawnData: function(room) {
            let name = 'BLD' + Game.time;
            let body = [WORK, CARRY, MOVE];
            let memory = {role: 'builder'};
        
            return {name, body, memory};
    }
};

module.exports = roleBuilder;