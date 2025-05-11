import { Arena } from './arena/arena';
import { params } from './params';

const runner = () => {
    const arenaElement = document.getElementById('arena');

    const area = new Arena(params.arena.width, params.arena.height);
    area.init();
    area.renderToHTML(arenaElement!);
};

runner();
