/**
 * Class which holds the static methods of the Vector class
 */
class VectorMethods {
  /**
   * Adds two given vectors or a given vector and a given number and returns the result as a new vector
   */
  static add(v1: Vector, v2: Vector | number): Vector {
    return typeof v2 === 'object'
      ? new Vector(v1.x + v2.x, v1.y + v2.y)
      : new Vector(v1.x + v2, v1.y + v2)
  }

  /**
   * Substracts two given vectors or a given vector and a given number and returns the result as a new vector
   */
  static substract(v1: Vector, v2: Vector | number): Vector {
    return typeof v2 === 'object'
      ? new Vector(v1.x - v2.x, v1.y - v2.y)
      : new Vector(v1.x - v2, v1.y - v2)
  }

  /**
   * Multiplies two given vectors or a given vector and a given number and returns the result as a new vector
   */
  static multiply(v1: Vector, v2: Vector | number): Vector {
    return typeof v2 === 'object'
      ? new Vector(v1.x * v2.x, v1.y * v2.y)
      : new Vector(v1.x * v2, v1.y * v2)
  }

  /**
   * Divides the first given vector by the second vector (or number) and returns the result as a new vector
   */
  static divide(v1: Vector, v2: Vector | number): Vector {
    return typeof v2 === 'object'
      ? new Vector(v1.x / v2.x, v1.y / v2.y)
      : new Vector(v1.x / v2, v1.y / v2)
  }

  /**
   * Calculates and returns the angle bewteen two given vectors in radians
   */
  static angleRadBetween(v1: Vector, v2: Vector): number {
    const dot = v1.dot(v2)
    const mV1 = v1.magnitude
    const mV2 = v2.magnitude
    const a = dot / (mV1 * mV2)

    return Math.acos(a)
  }

  /**
   * Calculates and returns the angle bewteen two given vectors in degree
   */
  static angleDegBetween(v1: Vector, v2: Vector): number {
    return (Vector.angleRadBetween(v1, v2) * 180) / Math.PI
  }

  /**
   * Calculates the dot product of two given vectors
   */
  static dot(v1: Vector, v2: Vector) {
    return v1.x * v2.x + v1.y * v2.y
  }

  /**
   * Calculates the cross product of two given vectors
   */
  static cross(v1: Vector, v2: Vector) {
    return {
      x: 0,
      y: 0,
      z: v1.x * v2.y - v1.y * v2.x,
    }
  }

  /**
   * Calculates the absolute lowest vector out of two given vectors and returns the result as a new vector
   */
  static min(v1: Vector, v2: Vector | number): Vector {
    return typeof v2 === 'object'
      ? new Vector(Math.min(v1.x, v2.x), Math.min(v1.y, v2.y))
      : new Vector(Math.min(v1.x, v2), Math.min(v1.y, v2))
  }

  /**
   * Calculates the absolute highest vector out of two given vectors and returns the result as a new vector
   */
  static max(v1: Vector, v2: Vector | number): Vector {
    return typeof v2 === 'object'
      ? new Vector(Math.max(v1.x, v2.x), Math.max(v1.y, v2.y))
      : new Vector(Math.max(v1.x, v2), Math.max(v1.y, v2))
  }

  /**
   * Calculates the absolute lowest and absolute highest vectors out of two given vectors and returns the result as a tuple of two arrays
   */
  static minAndMax(v1: Vector, v2: Vector | number): [Vector, Vector] {
    return [Vector.min(v1, v2), Vector.max(v1, v2)]
  }

  /**
   * Checks if a given vector is equal to another vector or if x and y of the first vector are requal to a given number
   */
  static eq(v1: Vector, v2: Vector | number) {
    return typeof v2 === 'object'
      ? v1.x === v2.x && v1.y === v2.y
      : v1.x === v2 && v1.y === v2
  }

  /**
   * Tests if x and y of the first vector are smaller than x and y of the second given vector
   */
  static lt(v1: Vector, v2: Vector) {
    return v1.x < v2.x && v1.y < v2.y
  }

  /**
   * Tests if x and y of the first vector are greater than x and y of the second given vector
   */
  static gt(v1: Vector, v2: Vector) {
    return v1.x > v2.x && v1.y > v2.y
  }

  /**
   * Tests if x and y of the first vector are smaller or equal than x and y of the second given vector
   */
  static lte(v1: Vector, v2: Vector) {
    return v1.x <= v2.x && v1.y <= v2.y
  }

  /**
   * Tests if x and y of the first vector are greater or equal than x and y of the second given vector
   */
  static gte(v1: Vector, v2: Vector) {
    return v1.x >= v2.x && v1.y >= v2.y
  }
}

/**
 * Vector class with a collection of helpful methods
 */
export default class Vector extends VectorMethods {
  /**
   * A new vector needs to be instantiated with an x and a y parameter
   */
  constructor(private _x: number, private _y: number) {
    super()
  }

  /**
   * get the x value of the vector
   */
  get x() {
    return this._x
  }

  /**
   * get the y value of the vector
   */
  get y() {
    return this._y
  }

  /**
   * set the x value of the vector
   */
  set x(value: number) {
    this._x = value
  }

  /**
   * set the y value of the vector
   */
  set y(value: number) {
    this._y = value
  }

  /**
   * Returns the absolute of the vector as a new vector
   */
  get abs(): Vector {
    return new Vector(Math.abs(this.x), Math.abs(this.y))
  }

  /**
   * Calculates and returns the length of the vector
   */
  get length(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2)
  }

  /**
   * alias for length
   */
  get magnitude(): number {
    return this.length
  }

  /**
   * Normalizes the vector and returns the result as a new vector
   */
  get normalized(): Vector {
    const length = this.length
    return new Vector(this.x / length, this.y / length)
  }

  /**
   * Get a vector with rounded x/y values
   */
  get rounded(): Vector {
    return new Vector(Math.round(this.x), Math.round(this.y))
  }

  /**
   * Get a vector with floored x/y values
   */
  get floored(): Vector {
    return new Vector(Math.floor(this.x), Math.floor(this.y))
  }

  /**
   * Get a vector with ceiled x/y values
   */
  get ceiled(): Vector {
    return new Vector(Math.ceil(this.x), Math.ceil(this.y))
  }

  /**
   * Get a vector with flipped x/y values
   */
  get flipped(): Vector {
    return new Vector(this._y, this._x)
  }

  /**
   * Adds a given vector or number to this one and returns the result as a new vector
   */
  public add(v2: Vector | number) {
    return Vector.add(this, v2)
  }

  /**
   * Substracts a given vector or number from this one and returns the result as a new vector
   */
  public substract(v2: Vector | number) {
    return Vector.substract(this, v2)
  }

  /**
   * Multiplies a given vector or number with this one and returns the result as a new vector
   */
  public multiply(v2: Vector | number) {
    return Vector.multiply(this, v2)
  }

  /**
   * Divides this vector by a given vector or number and returns the result as a new vector
   */
  public divide(v2: Vector | number) {
    return Vector.divide(this, v2)
  }

  /**
   * Calculates the dot product of this Vector with another, given vector
   */
  public dot(v2: Vector) {
    return Vector.dot(this, v2)
  }

  /**
   * Calculates the cross product of this Vector with another, given vector
   */
  public cross(v2: Vector) {
    return Vector.cross(this, v2)
  }

  /**
   * Checks if the given vector is equal to this one (or if a given number is equal to this vectors x and y value) and returns true or false
   */
  public eq(v2: Vector | number) {
    return Vector.eq(this, v2)
  }

  /**
   * Checks if the both, x and y, of the given vector are smaller than x and y of this one
   */
  public lt(v2: Vector) {
    return Vector.lt(this, v2)
  }

  /**
   * Checks if the both, x and y, of the given vector are greater than x and y of this one
   */
  public gt(v2: Vector) {
    return Vector.gt(this, v2)
  }

  /**
   * Checks if the both, x and y, of the given vector are smaller or equal than x and y of this one
   */
  public lte(v2: Vector) {
    return Vector.lte(this, v2)
  }

  /**
   * Checks if the both, x and y, of the given vector are greater or equal than x and y of this one
   */
  public gte(v2: Vector) {
    return Vector.gte(this, v2)
  }
}
