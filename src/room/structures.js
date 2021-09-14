var targets = creep.room.find(FIND_STRUCTURES, {
    filter: (structure) => {
        return (structure.structureType == STRUCTURE_EXTENSION ||
                structure.structureType == STRUCTURE_SPAWN ||
                structure.structureType == STRUCTURE_TOWER) && 
                structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
    }
});

// Grab all structures in the room, and filter it down
const structures = Game.room.find(FIND_STRUCTURES);
const towers = structures.filter(structure => structure.structureType == STRUCTURE_TOWER)
const getStructureByType = function (type) {structures.filter(structure => structure.structureType == type)}

// Maybe let user type in the type of structure they're looking for, and return a list of those structures in the room
function findStructuresByType(type) {
    for (let structure in structures) {
        structures.filter(structure => structure.structureType == type);
    }
    
    Game.room.find(FIND_STRUCTURES, {filter: (structure) => {return (structure.structureType == type)}})
}