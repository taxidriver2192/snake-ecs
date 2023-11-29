import Snake from './entities/Snake.js';
import Food from './entities/Food.js';

// Importér systemer
import MovementSystem from './systems/MovementSystem.js';
import RenderingSystem from './systems/RenderingSystem.js';
import CollisionSystem from './systems/CollisionSystem.js';
import InputSystem from './systems/InputSystem.js';

// Initialiser og konfigurer spillet
function initGame() {
    console.log('Initializing game...');
    // Opret en array til at holde alle entiteter
    const entities = [];

    // Opret Snake entiteten
    const snake = new Snake(100, 100); // Startposition for Snake
    entities.push(snake);

    // Opret Food entiteten
    const food = new Food(200, 200); // Startposition for Food
    entities.push(food);

    // Opret systemer
    const context = document.getElementById('gameCanvas').getContext('2d');
    const movementSystem = new MovementSystem();
    const renderingSystem = new RenderingSystem(context);
    const collisionSystem = new CollisionSystem();
    const inputSystem = new InputSystem();

    // Spillets hovedløkke
    function gameLoop() {
        // Opdater systemer
        inputSystem.update(entities);
        movementSystem.update(entities);
        collisionSystem.update(entities);

        // Tegn entiteter
        renderingSystem.update(entities);

        requestAnimationFrame(gameLoop);
    }

    // Start spillets løkke
    gameLoop();
}

// Kald initGame for at starte spillet
initGame();
