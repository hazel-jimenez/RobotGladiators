//player name, health, & attack var

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

//enemy name, health, & attack var

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//fight function

var fight = function() {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    //if player choses yo fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT"){
        //remove enemy's health by subtracting the amount set in the playerAttack variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + "now has " + enemyHealth + "health remaining"
        );
    }

        //check enemy's health
        if (enemyHealth <=0){
            window.alert(enemyName + " has died!");
            } else {
            window.alert (enemyName + " still has " + enemyHealth);

            }

        };




//execute fight

fight();