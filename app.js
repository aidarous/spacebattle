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
}



/* alien ship class*/
// since there will be 6 alien ships a class is used to initialize
class AlienShip {
   constructor(){
       this.hull = (Math.floor(Math.random()*4)+3); // randomizes hull to be between 3 and 6
       this.firepower = (Math.floor(Math.random()*3)+2); // randomizes firepower between 2 and 4
       this.accuracy = (Math.floor(Math.random()*3)+6/10); // randomizes accuracy betweem .6 and .8
   }
}


let alienShip = new AlienShip()
let chanceOfHitting;
let remainingHull = alienShip["hull"] // created a variable for alien hull to use freely in code
let ussHull = ussSchwarzenegger["hull"] // created to use the USS hull conveniently
let aliensToGo = 6
//Pseudo code
// - begin the fight with the decision to fight or retreat
// - create a loop where user chooses to fight or retreat
//      - attacking continues the loop and the user and alien each attack one another
//      - retreating exits the loop and the game ends
// - create conditions for when USS attack hits and alien hits
// - create conditions for when USS attack hits and alien misses
// - create conditions for when USS attack misses and alien hits
// - create conditions for when USS attack misses and alien misses

alert("Welcome to Spacebattle! Are you ready to save the universe?")


let decide = prompt("Press 1 to start game or 2 to quit");

        if (decide == "1"){
        while(aliensToGo > 0){
        console.log(aliensToGo)
            
                chanceOfHitting = Math.random()
                console.log(chanceOfHitting)
                let battleDecision = prompt("What will you do? Press 1 to attack or 2 to run away");
                if(battleDecision == "1" ){
                    // when USS attack hits and alien hits
                    if( ussSchwarzenegger["accuracy"] <= chanceOfHitting) {
                        
                        remainingHull -= ussSchwarzenegger["firepower"];
                        alert(`Your attack was successful! alien ship has ${remainingHull} health`);
                        if(remainingHull <= 0){
                            alert("Congratulations! You destroyed the alien ship")
                            alienShip = new AlienShip();
                            aliensToGo --
                            if(aliensToGo > 0){
                            let continueFighting = prompt("You have defeated Alien ship!\nAnother ship is coming!\nPress 1 to continue or 2 retreat")
                                if(continueFighting == "1"){
                                    continue
                                } else if(continueFighting == "2"){
                                    alert("You ran away from battle\nGAME OVER")
                                    break
                                }
                            
                            console.log(aliensToGo)
                            }else{
                                alert("You defeated the last alien ship")
                            }
                        
                        }
                        // when USS attack hits and alien misses
                    } else{
                        alert("You missed!")
                    }
                    
                    if (alienShip["accuracy"] <= chanceOfHitting && remainingHull > 0){

                        alert("alien is going to attack")
                        ussHull -= alienShip["firepower"];
                        alert(`Nice work! Your attack was successful while the alien ship missed! alien ship has ${remainingHull} health`)
                    }
                    
                } else if(battleDecision == "2"){
                    alert("You ran away from battle")
                    break
                } 

            
            
        }
    } else if(decide == 2){
        alert("You have quit the game")
        
        }
if (aliensToGo == 0){
    alert("YOU WIN!") 
}
