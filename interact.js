const health = document.getElementById("health");
const hunger = document.getElementById("hunger");
const thirst = document.getElementById("thirst");
const cleanliness = document.getElementById("cleanliness");
const happiness = document.getElementById("happiness");


let pet = {
    health: 100,
    hunger: 75,
    thirst: 60,
    cleanliness: 50,
    happiness: 50,
    feedPet(){
        //neg
        this.hunger -= 10;
        this.cleanliness -=20;
        // pos
        this.happiness += 10;
        this.thirst += 10;
        this.health += 10
    },
    giveDrink(){
        this.hunger -= 10;
        this.cleanliness -= 10;
        this.thirst -= 20;

        this.happiness += 20;
        this.health += 10;
    },
    clean(){
        this.cleanliness += 20;
        this.happiness += 10;
        this.health += 10;
    },
    play(){
        this.hunger -= 10;
        this.cleanliness -= 10;
        this.thirst -= 10;
        this.happiness -= 15;
        this.health += 15;
    }
}

function checkCondition() {
    if(pet.health >= 100){
        pet.health = 100;
    }
    if (pet.hunger < 0){
        pet.hunger = 0;
    }
    if(pet.thirst >= 100){
        pet.thirst = 100;
    }
}