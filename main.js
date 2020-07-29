const Ray = function() {
  return {
      length: 0,

      push: function(value) {
        this[this.length] = value;
        this.length++;
    },
        pop: function() {
            const lastIndex = this.length -1;
            const toBeRemoved = this[lastIndex];
            delete this[lastIndex]
            this.length--;
            
            return toBeRemoved;
        },

        includes: function(value) {
            for(let i = 0; i < this.length; i++) {
                if (this[i] === value) {
                    return true;
                }
            }
            return false;
        },

        indexOf: function(value) {
            for (let i = 0; i < this.length; i++) {
                if (this[i] === value)
                    return i;
            }
            return -1;
        },

        shift: function() {
            const firstIndex = this[0];
            
        }
        
  }
  return ray
}


module.exports = Ray
