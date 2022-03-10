// var playerName = 'Clank McKrank';
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log("Name:", playerName, "Attack:", playerAttack, "Health:", playerHealth, "Money:", playerMoney);

const enemyNames = ["Roborto" ,"Amy Android" ,"Robo Trumble"];
console.log(enemyNames);
var enemyHealth = 50;
var enemyAttack = 12;

// fight function
var fight = function(enemyName) {
    // repeat and execute as long as the enemy-robot is alive 
  while(playerHealth > 0 && enemyHealth > 0) {
 
  // ask player if they'd like to fight or run
  var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Press Enter to FIGHT or type "SKIP".');

    // if player choses to skip confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("Money:", playerMoney)
            break;
        }
    }
  
    // remove enemy's health by subtracting the amount set in the playerAttack variable
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      // award player money for winning
      window.alert("You've won 20 Money");
      playerMoney = playerMoney + 20;
      console.log("Money:", playerMoney);
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );

    // check player's health
    if (playerHealth <= 0) {
      window.alert("Your robot is destroyed! Game Over.");
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

var endGame = function() {
  if (playerHealth > 0) {
    window.alert("Great job! Your final score was " + playerMoney + ".")
  } else {
    window.alert("You lost your robot in battle. Better luck next time.")
  }

  var playAgainConf = window.confirm("would you like to play again?")

  if (playAgainConf) {
    startGame();
  } else {
    window.alert("Thanks for playing! Hope we see you soon.")
  }
};

var shop = function() {
  var shopOptPrompt = window.prompt("would you like to refill your health, upgrade your attack, or leave the shop?")
  switch (shopOptPrompt) {
    case "refill":
    case "REFILL":  
      if (playerMoney >= 7) {
        window.alert("Refilling player's health by 20 for 7 money.");
        playerHealth = playerHealth + 20;
        playerMoney = playerMoney - 7;
      } else {
        window.alert("You lack sufficient funds.")
      }
      break;
       
    case "upgrade":
    case "UPGRADE":
      if (playerMoney >= 7) {
        window.alert("upgrading player's attack by 6 for 7 money");
        playerAttack = playerAttack + 6;
        playerMoney = playerMoney - 7;
      } else {
        window.alert("You lack sufficient funds.")
      }  
      break;
       
    case "leave":
    case "LEAVE":  
      window.alert("Leaving the store")
      break;
    default:
      window.alert("You did not pick a valid option. Try again")
      shop();
      break;    
  }
};

// function to start game
var startGame = function() {
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for(var i = 0; i < enemyNames.length; i++) {
      if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round # " + ( i + 1) );
        var pickedEnemyName = enemyNames[i];
        enemyHealth= 50;
        fight(pickedEnemyName);
        if (playerHealth > 0 && i < enemyNames.length -1) {
          var shopConf = window.confirm("the fight is over, would you like to visit the shop before the next round?");
          if (shopConf) {
          shop();
          }
        }
      }
  }
  endGame();
};

startGame();


