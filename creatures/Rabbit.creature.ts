import { params } from '../params';
import { Grass } from './Grass.creature';

export class Rabbit {
    isLive = true;
    eating = 10;

    private readonly config = params.rabbit;

    constructor() {}

    live(grass: Grass) {
        this.metabolism();
        this.eat(grass);
    }

    eat(grass: Grass) {
        if (this.eating <= this.config.eatingParam.maxEating) {
            if (grass.overgrowth > 0) {
                this.eating === this.config.eatingParam.possibleCloseToEating
                    ? (this.eating += this.config.eatingParam.addEatingAfterEatCloseToMax)
                    : (this.eating += this.config.eatingParam.addEatingAfterEat);
                grass.eatMe();
            }
        }
    }

    metabolism() {
        this.eating -= this.config.metabolismParam.costOfTheLivingForDay;
        if (this.eating < 0) {
            this.isLive = false;
        }
    }
}
