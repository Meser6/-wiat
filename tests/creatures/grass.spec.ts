import { Grass } from '../../creatures/Grass.creature';

describe('Grass', () => {
    let grass: Grass;

    beforeEach(() => {
        grass = new Grass();
    });

    test('initial overgrowth should be 0', () => {
        expect(grass.overgrowth).toBe(0);
    });

    test('grow should increase overgrowth by 0.25 until 1', () => {
        grass.grow(); // 0.25
        expect(grass.overgrowth).toBe(0.25);
        grass.grow(); // 0.5
        expect(grass.overgrowth).toBe(0.5);
        grass.grow(); // 0.75
        grass.grow(); // 1.0
        expect(grass.overgrowth).toBe(1);
        grass.grow(); //1.0
        expect(grass.overgrowth).toBe(1);
    });

    test('eatMe should decrease overgrowth by 0.25 until 0', () => {
        grass.overgrowth = 1;

        grass.eatMe(); // 0.75
        expect(grass.overgrowth).toBe(0.75);
        grass.eatMe(); // 0.5
        grass.eatMe(); // 0.25
        grass.eatMe(); // 0.0
        expect(grass.overgrowth).toBe(0);
        grass.eatMe(); // 0
        expect(grass.overgrowth).toBe(0);
    });
});
