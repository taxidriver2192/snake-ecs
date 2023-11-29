export default class InputSystem {
    constructor() {
        this.direction = { dx: 1, dy: 0 }; // Standard retning
        window.addEventListener('keydown', this.handleKey.bind(this));
    }

    handleKey(event) {
        switch (event.key) {
            case 'ArrowUp':
                this.direction = { dx: 0, dy: -1 };
                break;
            case 'ArrowDown':
                this.direction = { dx: 0, dy: 1 };
                break;
            case 'ArrowLeft':
                this.direction = { dx: -1, dy: 0 };
                break;
            case 'ArrowRight':
                this.direction = { dx: 1, dy: 0 };
                break;
        }
    }

    update(entities) {
        entities.forEach(entity => {
            if (entity.hasComponent('VelocityComponent')) {
                const velocity = entity.getComponent('VelocityComponent');
                velocity.dx = this.direction.dx;
                velocity.dy = this.direction.dy;
            }
        });
    }
}
