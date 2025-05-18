import { params } from '../params';

const GrassColorMap: Record<number, string> = {
    0: '#ffffff',
    0.25: '#B3D78AFF',
    0.5: '#69DA52FF',
    0.75: '#43A046FF',
    1: '#006205FF'
};
export class Grass {
    overgrowth: 0 | 0.25 | 0.5 | 0.75 | 1 = 0;
    color = GrassColorMap[0];

    private readonly params = params.grass;

    constructor() {}
    init() {
        const random = Math.random();
        if (random < 0.2) {
            this.overgrowth = 0;
        } else if (random < 0.4) {
            this.overgrowth = 0.25;
        } else if (random < 0.6) {
            this.overgrowth = 0.5;
        } else if (random < 0.8) {
            this.overgrowth = 0.75;
        } else {
            this.overgrowth = 1;
        }

        this.setColor();
    }

    grow() {
        if (this.overgrowth < 1) {
            this.overgrowth += this.params.growParam.growPerDay;
        }
        this.setColor();
    }

    eatMe() {
        if (this.overgrowth > 0) {
            this.overgrowth -= this.params.eatParam.costOfEat;
        }
        this.setColor();
    }

    private setColor() {
        this.color = GrassColorMap[this.overgrowth];
    }

    public get getColor(): string {
        return this.color;
    }
}
