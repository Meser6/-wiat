import { Square } from './square.arena';

export class Arena {
    width: number;
    height: number;
    squares: Square[][];

    constructor(width: number, height: number) {
        this.squares = new Array(width);
        this.width = width;
        this.height = height;
    }

    init() {
        for (let y = 0; y < this.height; y++) {
            this.squares[y] = [];

            //REMOVE ME
            for (let x = 0; x < this.width; x++) {
                this.squares[y][x] = new Square();
                if (Math.random() < 0.25) {
                    this.squares[y][x].grass.grow();
                } else if (Math.random() < 0.5) {
                    this.squares[y][x].grass.grow();
                    this.squares[y][x].grass.grow();
                } else if (Math.random() < 0.75) {
                    this.squares[y][x].grass.grow();
                    this.squares[y][x].grass.grow();
                    this.squares[y][x].grass.grow();
                } else {
                    this.squares[y][x].grass.grow();
                    this.squares[y][x].grass.grow();
                    this.squares[y][x].grass.grow();
                    this.squares[y][x].grass.grow();
                }
            }
        }
    }

    renderToHTML(container: HTMLElement): void {
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const div = document.createElement('div');
                div.classList.add('square');
                div.style.backgroundColor = this.squares[y][x].grass.color;
                container.appendChild(div);
            }
        }
    }
}
