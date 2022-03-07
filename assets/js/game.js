var playerName = window.prompt("what is your robot's name");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// you can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth, playerMoney);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // alert players that they r starting a round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("would you like to FIGHT or SKIP this battle?");

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
  
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
  
    // remove player's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
  
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    // if player choses to skip
  } else if (promptFight === "skip" || promptFight === "SKIP") {
    var confirmSkip = window.confirm("are you sure you'd like to quit?");

    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight.");
        playerMoney = playerMoney - 2;
    } 
    else {
       fight();
    }
  } else {
    window.alert("You need to choose a valid option. Try again!");
  }
}
fight();