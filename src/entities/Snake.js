import Entity from './Entity.js';
import PositionComponent from '../components/PositionComponent.js';
import VelocityComponent from '../components/VelocityComponent.js';
import RenderComponent from '../components/RenderComponent.js';
import CollisionComponent from '../components/CollisionComponent.js';

export default class Snake extends Entity {
    constructor(x, y) {
        super();
        this.addComponent(new PositionComponent(x, y));
        this.addComponent(new VelocityComponent(1, 0));
        this.addComponent(new RenderComponent('green', 10));
        this.addComponent(new CollisionComponent(10, 10));
    }
}
