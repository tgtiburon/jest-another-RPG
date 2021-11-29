function Potion(name) {
    this.types = ['strength', 'agility', 'health'];

    // Either name it what was called or randomly pick a name from the 
    // names array.  If 'name' is truthy, then use it.  Otherwise random.
    this.name = name || this.types[Math.floor(Math.random() * this.types.length)];

    if(this.name ==='health')  {
        this.value = Math.floor(Math.random() *10 + 30);
    } else {
        this.value = Math.floor(Math.random() * 5 + 7);

    }
}



module.exports = Potion;

