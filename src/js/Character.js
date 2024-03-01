const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
        throw new Error('Invalid name length');
    }
    if (!types.includes(type)) {
      throw new Error('Invalid character type');
    }
    
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    
}
}
