import { taskHarvest, taskBuild } from '../mixins/tasks';

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {
		
	    if(creep.memory.currentTask =='building' && creep.store[RESOURCE_ENERGY] == 0) {
            // creep.memory.currentTask =='build'
			taskHarvest(creep);

			creep.harvest();
            creep.say('🔄 harvesting');
	    }
		
	    if(!creep.memory.currentTask =='building' && creep.store.getFreeCapacity() == 0) {
	        // creep.memory.currentTask = 'build';
			taskBuild(creep);

			creep.build();
	        creep.say('🚧 building');
	    }

	    if(creep.memory.building) {
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
	    }
	    else {
	        var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }
	}
};

module.exports = roleBuilder;