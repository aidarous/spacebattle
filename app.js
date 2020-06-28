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


/* alien ship class*/
// since there will be 6 alien ships a class is used to initialize
class AlienShip {
   constructor(){
       this.hull = Math.floor(Math.random()*4)+3; // randomizes hull to be between 3 and 6
       this.firepower = Math.floor(Math.random()*3)+2; // randomizes firepower between 2 and 4
       this.accuracy = Math.floor(Math.random()*3)+6/10; // randomizes accuracy betweem .6 and .8
   }
   alienFire() {
       let alienDamageDealt = this.firepower
       return alienDamageDealt; 
   }
}


const alienOne = new AlienShip()
// console.log(alienOne) troubleshooting to make sure object was created
let remainingHull = alienOne["hull"] // created a variable for alien hull to use freely in code
let ussHull = ussSchwarzenegger["hull"] // created to use the USS hull conveniently
//Pseudo code
// - begin the fight with the decision to fight or retreat
// - create a loop where user chooses to fight or retreat
//      - attacking continues the loop and the user and alien each attack one another
//      - retreating exits the loop and the game ends

//alert("Welcome to Spacebattle! Are you ready to save the universe?")

let decide = prompt("Press 1 to start game or 2 to quit")

        if (decide == 1){
            while(remainingHull > 0){
                let battleDecision = prompt("What will you do? Press 1 to attack or 2 to run away")
                if(battleDecision == 1 && remainingHull >= 0){

                    ussSchwarzenegger.fire()
                    alienOne.alienFire()
                    remainingHull -= ussSchwarzenegger["firepower"];
                    ussHull -= alienOne["firepower"]
                    console.log(`You chose attack! alien ship has ${remainingHull} health and you have ${ussHull}`)
                } else if(battleDecision == 2){
                    alert("You ran away from battle")
                    break
                } else{
                    alert("You have defeated Alien ship 1")
                }
            }

        }
        else if (decide == 2){
        alert("You have quit the game")
        
        }
if (remainingHull <= 0){
    alert("YOU WIN!")
}
