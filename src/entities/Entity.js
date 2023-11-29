/**
 * Represents an entity in the game.
 */
export default class Entity {
    constructor() {
        this.components = {};
    }

    /**
     * Adds a component to the entity.
     * @param {Object} component - The component to be added.
     */
    addComponent(component) {
        this.components[component.constructor.name] = component;
    }

    /**
     * Retrieves a component from the entity.
     * @param {Function} componentClass - The class of the component to retrieve.
     * @returns {Object} The component instance.
     */
    getComponent(componentClass) {
        return this.components[componentClass.name];
    }

    /**
     * Checks if the entity has a specific component.
     * @param {Function} componentClass - The class of the component to check.
     * @returns {boolean} True if the entity has the component, false otherwise.
     */
    hasComponent(componentClass) {
        return this.components[componentClass.name] !== undefined;
    }
}
