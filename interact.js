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
    if (pet.health >= 100){
        pet.health = 100;
    } 
    if (pet.hunger <= 0){
        pet.hunger = 0;
    } 
    if (pet.cleanliness <= 0) {
        pet.cleanliness = 0;
    }
    if (pet.thirst >= 30){
      image.src = "crying-cat.jpg"
    }
    if (pet.hunger > 20){
        image.src = "angry-cat.jpg";
    } 
    if (pet.health >= 100){
        pet.health = 100;
    }
    if (pet.happiness <= 30) {
        image.src = "sad-cat.jpg";
    }
    if (pet.cleanliness >= 50) {
        image.src = "loved-cat.jpg";
    }
    if (pet.happiness >= 50) {
        image.src = "loved-cat.jpg";
    }

    if (pet.health <= 20) {
        image.src = "sad-cat.jpg"
    } 
    else {
        image.src = "happy-cat.jpg";
    }
}

function petData() {
    health.textContent = `health: ${pet.health}`;
    thirst.textContent = `thirst: ${pet.thirst}`;
    hunger.textContent = `hunger: ${pet.hunger}`;
    happiness.textContent = `happiness: ${pet.happiness}`;
    cleanliness.textContent = `cleanliness: ${pet.cleanliness}`;
}
button.addEventListener("click", () => {
    peth1.textContent = input.value
    hide.style.display = "none"
})

feed.addEventListener("click", () => {
    pet.feedPet();
    checkCondition();
    flag = true;
    petData();
});

givedrink.addEventListener("click", () => {
    pet.giveDrink();
    checkCondition();
    petData();
});

clean.addEventListener("click", () => {
    pet.clean();
    checkCondition();
    petData();
});