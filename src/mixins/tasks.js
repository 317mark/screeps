// -------- Harvest -------- //
// Mine energy for consumption
const taskHarvest = function(obj) {
    obj.harvest = function () {
        // Set creep task in memory
        obj.memory.currentTask = "harvesting";

        // Harvest Logic
        // Find nearest source to harvest from, head there if not already there, and begin harvesting
        var sources = obj.room.find(FIND_SOURCES);
        if(obj.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            obj.moveTo(sources[0]);
        }
        obj.say('harvesting');
    }
}

// -------- Refuel -------- //
// Reload personal energy store from nearest energy storage facility
const taskRefuel = function(obj) {
    obj.refuel = function () {
        // Set creep task in memory
        obj.memory.currentTask = "refueling";

        // Refuel Logic
            // Collect Resources from nearest storage facility
            // var targets = obj.room.find(FIND_STRUCTURES)

        obj.say('refueling');
    }
}

// -------- Haul -------- //
// Consider mergine with transfer
const taskHaul = function(obj) {
    obj.haul = function () {
        // Set creep task in memory
        obj.memory.currentTask = "hauling";
        
        // Haul Logic
            // Define object to be transferred
            // Define desired relocation spot
            // Move object from current location to desired location

        obj.say('hauling');
    }
}

// -------- Build -------- //
// Build new structures
const taskBuild = function(obj) {
    obj.build = function () {
        // Set creep task in memory
        obj.memory.currentTask = "building";

        // Build Logic
        var targets = obj.room.find(FIND_CONSTRUCTION_SITES);
        if(targets.length) {
            if(obj.build(targets[0]) == ERR_NOT_IN_RANGE) {
                obj.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
            }
        } else {
	        var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }

        obj.say('building');
    }
}

// -------- Repair -------- //
// Repair existing structures
const taskRepair = function(obj) {
    obj.repair = function () {
        // Set creep task in memory
        obj.memory.currentTask = "repairing";

        // Repair Logic
        // Find structures that have a health less than their max
        var targets = obj.room.find(FIND_MY_STRUCTURES);
        if( repairableTargets.length ) {
            if(obj.build(repairableTargets[0]) == ERR_NOT_IN_RANGE) {
                obj.moveTo(repairableTargets[0], {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }

        obj.say('repairing');
    }
}

// -------- Upgrade -------- //
// Upgrade room controller
const taskUpgrade = function(obj) {
    obj.upgrade = function () {
        // Set creep task in memory
        obj.memory.currentTask = "upgrading";

        // Upgrade Logic
        // Upgrade room controller if in range. If not, get in range
        if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller);
        }

        obj.say('upgrading');
    }
}

// -------- Attack -------- //
// Attack specified creep or structure
const taskAttack = function(obj) {
    obj.attack = function () {
        // Set creep task in memory
        obj.memory.currentTask = "attacking";

        // Attack Logic
            // Define structure or creep to attack
            // Attack

        obj.say('attacking');
    }
}

// -------- Guard -------- //
// Guard specified creep or structure
const taskGuard = function(obj) {
    obj.guard = function () {
        // Set creep task in memory
        obj.memory.currentTask = "guarding";

        // Guad Logic
            // Define structure, creep, or area to guard
            // Stand near defined target, alert others when threat is present, and begin attacking threat when it comes within x spaces of the target

            obj.say('guarding');
    }
}

// -------- Patrol -------- //
// Patrol current room, and alert others when threat is present
const taskPatrol = function(obj) {
    obj.patrol = function () {
        // Set creep task in memory
        obj.memory.currentTask = "patroling";

        // Patrol Logic


        obj.say('patroling');
    }
}

// -------- Scout -------- //
// Search for habitable rooms
const taskScout = function(obj) {
    obj.scout = function () {
        // Set creep task in memory
        obj.memory.currentTask = "scouting";

        // Scout Logic


        obj.say('scouting');
    }
}

// -------- Establish Camp -------- //
// Claim defined space, build and name a spawn, .
const taskEstablishCamp = function(obj) {
    obj.establishCamp = function () {
        // Set creep task in memory
        obj.memory.currentTask = "establishing camp";

        // Establish Camp Logic
            // Claim defined space by planting flag
            // Build controller?
            // Build and name spawn
            // Instantiate new Room/Base object


        obj.say('establishing camp');
    }
}

export { taskHarvest,
         taskRefuel,
         taskHaul,
         taskBuild,
         taskRepair,
         taskUpgrade,
         taskAttack,
         taskGuard,
         taskPatrol,
         taskScout,
         taskEstablishCamp,
};