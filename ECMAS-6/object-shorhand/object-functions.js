const bicycle = {
	gear: 2,
    setNewGear(newGear) {
        this.gear = newGear
    }
    
};

bicycle.setNewGear(3);
console.log(bicycle.gear)