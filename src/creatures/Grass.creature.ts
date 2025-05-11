import { params } from '../params';

const GrassColorMap: Record<number, string> = {
    0: '#ffffff',
    0.25: '#dcedc8',
    0.5: '#C9D3CDFF',
    0.75: '#4caf50',
    1: '#2e7d32'
};
export class Grass {
    overgrowth: 0 | 0.25 | 0.5 | 0.75 | 1 = 0;
    color = GrassColorMap[0];

    private readonly params = params.grass;

    constructor() {}

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
