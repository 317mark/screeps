// Harvest
const taskHarvest = function(obj) {
    // Set creep memory task to Harvest
    obj.memory.currentTask = "harvesting";

    obj.harvest = function () {
        // Find nearest source to harvest from, head there if not already there, and begin harvesting
        var sources = obj.room.find(FIND_SOURCES);
        if(obj.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
            obj.moveTo(sources[0]);
        }
    }
}

// Haul
const taskHaul = function(obj) {
    // Set creep memory task to Haul
    obj.memory.currentTask = "hauling";

    obj.haul = function () {
        // If there's loose energy on the ground, go pick it up, and drop it in any spawn, extension, or storage with available space.

    }
}

// Build
const taskBuild = function(obj) {
    // Set creep memory task to Build
    obj.memory.currentTask = "building";

    obj.build = function () {
        var targets = obj.room.find(FIND_CONSTRUCTION_SITES);
        if(targets.length) {
            if(obj.build(targets[0]) == ERR_NOT_IN_RANGE) {
                obj.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
    }
}

// Repair
const taskRepair = function(obj) {
    // Set creep memory task to Repair
    obj.memory.currentTask = "repairing";

    obj.repair = function () {

        // Find structures that have a health less than their max
        var targets = obj.room.find(FIND_MY_STRUCTURES);
        var repairableTargets = targets.filter(site => site.health < site.health.max);
        if( repairableTargets.length ) {
            if(obj.build(repairableTargets[0]) == ERR_NOT_IN_RANGE) {
                obj.moveTo(repairableTargets[0], {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
    }
}

// Upgrade
const taskUpgrade = function(obj) {
    // Set creep memory task to Upgrade
    obj.memory.currentTask = "upgrading";

    obj.upgrade = function () {
        if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
            creep.moveTo(creep.room.controller);
        }
    }
}

const taskAttack = function(obj) {
    // Set creep memory task to Attack
    obj.memory.currentTask = "attacking";

    obj.attack = function () {


    }
}

const taskGuard = function(obj) {
    // Set creep memory task to Guard
    obj.memory.currentTask = "guarding";

    obj.guard = function () {


    }
}

const taskPatrol = function(obj) {
    // Set creep memory task to Patrol
    obj.memory.currentTask = "patroling";

    obj.patrol = function () {


    }
}

const taskScout = function(obj) {
    // Set creep memory task to Scout
    obj.memory.currentTask = "scouting";

    obj.scout = function () {


    }
}

export { taskHarvest,
         taskHaul,
         taskBuild,
         taskRepair,
         taskUpgrade,
         taskAttack,
         taskGuard,
         taskPatrol,
         taskScout,
};