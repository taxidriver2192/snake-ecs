/**
 * Represents a system responsible for updating the position of entities based on their velocity.
 */
export default class MovementSystem {
    /**
     * Updates the position of entities based on their velocity.
     * @param {Array} entities - The array of entities to update.
     */
    update(entities) {
        entities.forEach(entity => {
            if (entity.hasComponent('PositionComponent') && entity.hasComponent('VelocityComponent')) {
                const position = entity.getComponent('PositionComponent');
                const velocity = entity.getComponent('VelocityComponent');
                position.x += velocity.dx;
                position.y += velocity.dy;
            }
        });
    }
}
