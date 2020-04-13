export interface ICoordinates {
    x: number,
    y: number,
}

export class CoordinateCalculator {
    constructor (
        protected height: number, 
        protected width: number, 
        protected strokeWidth: number,
        protected dataset: number[],
        protected max?: number,
        protected min?: number
    ) {
        this.height = this.height - (this.strokeWidth * 2);
        this.max = this.max || Math.max(...this.dataset);
        this.min = this.min || 0;
    }

    protected getY(value: number): number {
        const y = value * this.height / this.max;

        return this.height - y + this.strokeWidth;
    }

    protected getX(offset: number): number {
        const x = this.width / (this.dataset.length - 1);

        return offset * x;
    }

    public getCoordinates(value: number, offset: number): ICoordinates {
        return {
            x: this.getX(offset),
            y: this.getY(value),
        };
    }
}