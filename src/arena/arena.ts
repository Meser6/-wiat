import { Square } from './square.arena';

export class Arena {
    arenaElement: HTMLElement | null = null;
    width: number;
    height: number;
    squares: Square[][];

    constructor(width: number, height: number) {
        this.squares = new Array(width);
        this.width = width;
        this.height = height;

        this.arenaElement = document.getElementById('arena');
        if (!this.arenaElement) {
            throw new Error('Arena element not found');
        }
        this.init();
    }

    init() {
        for (let y = 0; y < this.height; y++) {
            this.squares[y] = [];
            for (let x = 0; x < this.width; x++) {
                this.squares[y][x] = new Square();
                this.squares[y][x].grass.init();
            }
        }
        this.renderToHTML();
    }
    //TODO
    // async grow() {
    //     await new Promise(resolve => {
    //         setTimeout(() => {
    //             resolve(true);
    //         }, 1000);
    //     });
    //     for (let y = 0; y < this.height; y++) {
    //         for (let x = 0; x < this.width; x++) {
    //             Math.random() > 0.5 ? this.squares[y][x].grass.grow() : this.squares[y][x].grass.eatMe();
    //         }
    //     }
    //     this.renderToHTML();
    // }

    private createSquareDiv(x: number, y: number) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.backgroundColor = this.squares[y][x].grass.color;
        return div;
    }

    renderToHTML() {
        const container = this.arenaElement!;
        const cellWidth = window.innerWidth / this.width;
        const cellHeight = window.innerHeight / this.height;

        container.style.display = 'grid';
        container.style.gridTemplateColumns = `repeat(${this.width}, ${cellWidth}px)`;
        container.style.gridTemplateRows = `repeat(${this.height}, ${cellHeight}px)`;
        container.style.gap = '0';
        container.style.width = '100vw';
        container.style.height = '100vh';
        container.style.margin = '0';
        container.style.padding = '0';

        container.innerHTML = '';

        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const square = this.createSquareDiv(x, y);
                container.appendChild(square);
            }
        }
    }
}
