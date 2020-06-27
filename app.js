/* Pseudo Code
* Create alien ship and set properties
* - hull is between 3 and 6 
* - use math.random() to define accuracy between .6 and .8
* - let firepower = 5 
* Create USS Schwarzenegger object and set properties
* - hull = 20
* - firepower = 5
* - accuracy = random number
* make function for attack and retreat
* get the ships to battle each other
*/

/* USS Schwarzenegger and its stats */
let ussSchwarzenegger = { 
    hull: 20,
    firepower: 5,
    accuracy: .7,
    fire: function () {
       let damageDealt = Math.floor(Math.random()*3)
       console.log(`You dealt ${damageDealt} damage`)
    }
}

console.log(ussSchwarzenegger)
// ussSchwarzenegger.fire()
/* alien ship class*/
// since there will be 6 alien ships a class is used to initialize
class AlienShip {
   constructor(){
       this.hull = Math.floor(Math.random()*4)+3;
       this.firepower = Math.floor(Math.random()*3)+2;
       this.accuracy = Math.floor(Math.random()*3)+6/10;
   }
}

const alienOne = new AlienShip()
console.log(alienOne)

let decision =() => {
    let decide = prompt("Press 1 to Attack or 2 to Retreat")
    if (decide = 1){
    alert("You chose attack!")
    }
    else if (decide = 2){
        alert("You chose retreat")
    }

}

//decision()