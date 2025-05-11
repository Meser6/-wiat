//Arena
const arena = {
    width: 10,
    height: 10
};
//Creatures
const rabbit = {
    eatingParam: {
        addEatingAfterEat: 1,
        addEatingAfterEatCloseToMax: 0.5,
        maxEating: 20,
        possibleCloseToEating: 19.5
    },
    metabolismParam: {
        costOfTheLivingForDay: 0.5
    }
};
const grass = {
    growParam: {
        growPerDay: 0.25
    },
    eatParam: {
        costOfEat: 0.25
    }
};

export const params = {
    arena,
    rabbit,
    grass
};
