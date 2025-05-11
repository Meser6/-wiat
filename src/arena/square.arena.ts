import { Grass } from '../creatures/Grass.creature';

export class Square {
    grass: Grass;

    constructor() {
        this.grass = new Grass();
    }

    getColor() {
        return this.grass.color;
    }
}
