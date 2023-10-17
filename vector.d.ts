declare class VectorMethods {
    static add(v1: Vector, v2: Vector | number): Vector;
    static substract(v1: Vector, v2: Vector | number): Vector;
    static multiply(v1: Vector, v2: Vector | number): Vector;
    static divide(v1: Vector, v2: Vector | number): Vector;
    static angleRadBetween(v1: Vector, v2: Vector): number;
    static angleDegBetween(v1: Vector, v2: Vector): number;
    static dot(v1: Vector, v2: Vector): number;
    static cross(v1: Vector, v2: Vector): {
        x: number;
        y: number;
        z: number;
    };
    static min(v1: Vector, v2: Vector | number): Vector;
    static max(v1: Vector, v2: Vector | number): Vector;
    static minAndMax(v1: Vector, v2: Vector | number): [Vector, Vector];
    static eq(v1: Vector, v2: Vector | number): boolean;
    static lt(v1: Vector, v2: Vector): boolean;
    static gt(v1: Vector, v2: Vector): boolean;
    static lte(v1: Vector, v2: Vector): boolean;
    static gte(v1: Vector, v2: Vector): boolean;
}
export default class Vector extends VectorMethods {
    private _x;
    private _y;
    constructor(_x: number, _y: number);
    get x(): number;
    get y(): number;
    set x(value: number);
    set y(value: number);
    get abs(): Vector;
    get length(): number;
    get magnitude(): number;
    get normalized(): Vector;
    get rounded(): Vector;
    get floored(): Vector;
    get ceiled(): Vector;
    get flipped(): Vector;
    add(v2: Vector | number): Vector;
    substract(v2: Vector | number): Vector;
    multiply(v2: Vector | number): Vector;
    divide(v2: Vector | number): Vector;
    dot(v2: Vector): number;
    cross(v2: Vector): {
        x: number;
        y: number;
        z: number;
    };
    eq(v2: Vector | number): boolean;
    lt(v2: Vector): boolean;
    gt(v2: Vector): boolean;
    lte(v2: Vector): boolean;
    gte(v2: Vector): boolean;
}
export {};
