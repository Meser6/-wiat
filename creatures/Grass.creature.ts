import { params } from '../params';

export class Grass {
    overgrowth: 0 | 0.25 | 0.5 | 0.75 | 1 = 0;

    private readonly params = params.grass;

    constructor() {}

    grow() {
        if (this.overgrowth < 1) {
            this.overgrowth += this.params.growParam.growPerDay;
        }
    }

    eatMe() {
        if (this.overgrowth > 0) {
            this.overgrowth -= this.params.eatParam.costOfEat;
        }
    }
}
