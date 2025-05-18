import { Arena } from './arena/arena';
import { params } from './params';

const runner = async () => {
    const area = new Arena(params.arena.width, params.arena.height);

    //TODO
    // while (true) {
    //     await area.grow();
    // }
};

runner();
