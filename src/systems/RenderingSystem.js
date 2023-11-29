export default class RenderingSystem {
    constructor(context) {
        this.context = context;
    }

    update(entities) {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        console.log(this.context.canvas.width, this.context.canvas.height)
        entities.forEach(entity => {
            if (entity.hasComponent('RenderComponent') && entity.hasComponent('PositionComponent')) {
                const render = entity.getComponent('RenderComponent');
                const position = entity.getComponent('PositionComponent');
                this.context.fillStyle = render.color;
                this.context.fillRect(position.x, position.y, render.size, render.size);
            }
        });
    }
}
