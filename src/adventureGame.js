/*
Adventure Game
Text based adventure where the player will be able
to make choices that affect the outcome of the game.
The player will be able to choose their own path and
the story will change based on their decisions.
*/
const readline = require("readline-sync");

// Display the game title
console.log("Welcome to the Adventure Game!");

// Add a welcome message
console.log("Prepare yourself for an epic journey!");

let playerName = "";
// Get player name using readline-sync
playerName = readline.question("What is your name, brave adventurer? ");

let playerHealth = 100;
let playerGold = 20;
let currentLocation = "village";
let gameRunnig = true;
let inventory = [];

// Create variables for player stats
let playerStats = {
  name: playerName,
  health: playerHealth,
  gold: playerGold,
  location: currentLocation,
  inventory: inventory,
};

// Display welcome message and starting stats
console.log(`Welcome, ${playerName}! Your adventure begins now.`);
console.log("Starting Stats:");
console.log(`Health: ${playerHealth}`);
console.log(`Gold: ${playerGold}`);
console.log(`Location: ${currentLocation}`);