import { Grass } from '../../creatures/Grass.creature';
import { Rabbit } from '../../creatures/Rabbit.creature';

describe.only('Grass', () => {
    let grass: Grass;
    let rabbit: Rabbit;

    beforeEach(() => {
        grass = new Grass();
        rabbit = new Rabbit();
    });
    test('initial value should be correct', () => {
        expect(rabbit.isLive).toBeTruthy();
        expect(rabbit.eating).toBe(10);
    });

    test('eating grass should update rabbit eating and grass overgrowth', () => {
        grass.overgrowth = 0.5;

        rabbit.eat(grass);

        expect(rabbit.eating).toBe(11);
        expect(grass.overgrowth).toBe(0.25);
    });
    test('eating empty grass should kill rabbit with eating 0', () => {
        rabbit.eating = 0;
        grass.overgrowth = 0;

        rabbit.live(grass);

        expect(rabbit.eating).toBeLessThan(0);
        expect(rabbit.isLive).toBeFalsy();
        expect(grass.overgrowth).toBe(0);
    });
    test('rabbit with eating 20 should not eat grass', () => {
        rabbit.eating = 20;

        rabbit.eat(grass);

        expect(rabbit.eating).toBe(20);
        expect(grass.overgrowth).toBe(0);
    });
    test('rabbit with eating 20 should eat grass, but get only 0.5 eating', () => {
        grass.overgrowth = 1;
        rabbit.eating = 20;

        rabbit.live(grass);

        expect(rabbit.eating).toBe(20);
        expect(grass.overgrowth).toBe(0.75);
    });
    test('eating empty grass should not kill rabbit with eating 1', () => {
        grass.overgrowth = 0;
        rabbit.eating = 1;

        rabbit.live(grass);

        expect(rabbit.eating).toBe(0.5);
        expect(rabbit.isLive).toBeTruthy();
        expect(grass.overgrowth).toBe(0);
    });
    test('metabolism without eat should kill the rabbit', () => {
        rabbit.eating = 0;

        rabbit.metabolism();

        expect(rabbit.eating).toBeLessThan(0);
        expect(rabbit.isLive).toBeFalsy();
    });
});
