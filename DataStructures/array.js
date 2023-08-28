class ArrayStructure {
    constructor() {
      this.array = [];
    }
  
    insert(value) {
      this.array.push(value);
    }
  
    search(value) {
      return this.array.includes(value);
    }
  
    delete(value) {
      const index = this.array.indexOf(value);
      if (index !== -1) {
        this.array.splice(index, 1);
        return true;
      }
      return false;
    }
  }
  
  module.exports = ArrayStructure;
  