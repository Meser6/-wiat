import { Grass } from './Grass.creature';

export class Rabbit {
    isLive = true;
    eating = 10;

    private readonly eatingParam = {
        addEatingAfterEat: 1,
        addEatingAfterEatCloseToMax: 0.5,
        maxEating: 20,
        possibleCloseToEating: 19.5
    };
    private readonly metabolismParam = {
        costOfTheLivingForDay: 0.5
    };

    constructor() {}

    live(grass: Grass) {
        this.metabolism();
        this.eat(grass);
    }

    eat(grass: Grass) {
        if (this.eating <= this.eatingParam.maxEating) {
            if (grass.overgrowth > 0) {
                this.eating === this.eatingParam.possibleCloseToEating
                    ? (this.eating += this.eatingParam.addEatingAfterEatCloseToMax)
                    : (this.eating += this.eatingParam.addEatingAfterEat);
                grass.eatMe();
            }
        }
    }

    metabolism() {
        this.eating -= this.metabolismParam.costOfTheLivingForDay;
        if (this.eating < 0) {
            this.isLive = false;
        }
    }
}
