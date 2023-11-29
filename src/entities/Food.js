import Entity from './Entity.js';
import PositionComponent from '../components/PositionComponent.js';
import RenderComponent from '../components/RenderComponent.js';

/**
 * Represents a food entity in the game.
 * @class
 * @extends Entity
 */
export default class Food extends Entity {
    /**
     * Creates a new instance of the Food class.
     * @constructor
     * @param {number} x - The x-coordinate of the food.
     * @param {number} y - The y-coordinate of the food.
     */
    constructor(x, y) {
        super();
        this.addComponent(new PositionComponent(x, y));
        this.addComponent(new RenderComponent('red', 10));
    }
}
