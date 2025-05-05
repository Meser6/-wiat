export class Grass {
    overgrowth: 0 | 0.25 | 0.5 | 0.75 | 1 = 0;

    protected readonly growParam = {
        growPerDay: 0.25
    };
    protected readonly eatParam = {
        costOfEat: 0.25
    };

    constructor() {}

    grow() {
        if (this.overgrowth < 1) {
            this.overgrowth += this.growParam.growPerDay;
        }
    }

    eatMe() {
        if (this.overgrowth > 0) {
            this.overgrowth -= this.eatParam.costOfEat;
        }
    }
}
