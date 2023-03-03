# Vector

## Installation

Simply run `npm install @cruhr/vector` in your npm project.

However I personally would advise to just download the vector.js or vector.ts and include it in your project.
This way you can extend and change the libraries to your needs and you will never run into problems with breaking changes or disappearing dependencies.

## Usage

```JS
import Vector from '@cruhr/vector'

// create some vector instances
const v1 = new Vector(1, 1)
const v2 = new Vector(2, 3)

// v1 and v2 will stay unchanged. All methods will always return a new vector instance instead.
const v3 = v1.add(v2)
```

## Methods

The vector class comes with a few methods for common vector operations such as addin, multiplying, calculating the dot or cross product, etc...  
All methods keep the initial parameters as they are and return new vector instances or values.

## Static Methods

### Vector.add()

Add two vectors together by adding their individual x & y values.

```JS
const v1 = new Vector(1, 1)
const v2 = new Vector(2, 3)

// expected result is a new vector with x = 4 and y = 5
const v3 = Vector.add(v1, v2)
```

You can also use a single number as the second parameter which gets added to both, the x and the y value of the vector (first parameter).

```JS
const v1 = new Vector(1, 2)

// expected result is a new vector with x = 3 and y = 6
const v2 = Vector.add(v1, 4)
```

### Vector.substract()

Substracts the second vector from the first one by substracting their individual x & y values.

```JS
const v1 = new Vector(1, 1)
const v2 = new Vector(2, 3)

// expected result is a new vector with x = 1 and y = 2
const v3 = Vector.substract(v1, v2)
```

You can also use a single number as the second parameter which gets substracted from both, the x and the y value of the vector (first parameter).

```JS
const v1 = new Vector(1, 2)

// expected result is a new vector with x = 0 and y = 1
const v2 = Vector.substract(v1, 1)
```

### Vector.multiply()

Multiplies two vectors by multiplying their individual x & y values.

```JS
const v1 = new Vector(2, 2)
const v2 = new Vector(3, 4)

// expected result is a new vector with x = 6 and y = 8
const v3 = Vector.multiply(v1, v2)
```

You can also use a single number as the second parameter which gets multiplied to both, the x and the y value of the vector (first parameter). This is also often referred to as "scaling" a vector.

```JS
const v1 = new Vector(1, 2)

// expected result is a new vector with x = 3 and y = 6
const v2 = Vector.multiply(v1, 3)
```

### Vector.divide()

Divides one vector by another vector by divinding their respective x and y values.

```JS
const v1 = new Vector(6, 9)
const v2 = new Vector(2, 3)

// expected result is a new vector with x = 3 and y = 3
const v3 = Vector.divide(v1, v2)
```

You can also use a single number as the second parameterin which case both values of the vector get divided by this number.

```JS
const v1 = new Vector(6, 9)

// expected result is a new vector with x = 2 and y = 3
const v2 = Vector.divide(v1, 3)
```

### Vector.angleRadBetween()

Calculates and returns the angle in radians between two vectors.

```JS
const v1 = new Vector(3, -2)
const v2 = new Vector(1, 7)

// expected result is ~2.017
const rad = Vector.angleRadBetween(v1, v2)
```

### Vector.angleDegBetween()

Calculates and returns the angle in degree between two vectors.

```JS
const v1 = new Vector(3, -2)
const v2 = new Vector(1, 7)

// expected result is ~115.56
const deg = Vector.angleDegBetween(v1, v2)
```

### Vector.dot()

Calculates and returns the dot product of two given vectors.

```JS
const v1 = new Vector(3, -2)
const v2 = new Vector(1, 7)

// expected result is -11
const dot = Vector.dot(v1, v2)
```

### Vector.cross()

Calculates and returns the cross product of two given vectors. Since the corss product is perpendigular to the plane of two axis this method should always return a 3 dimensional vector. When calculating the cross product of two 2 dimensional vectors the x and y value of their cross product must ALWAYS be 0. Nevertheless we return an object with x, y and z coordinates even though only z will ever be something else than 0.

```JS
const v1 = new Vector(5, 7)
const v2 = new Vector(11, 2)

// expected result is an object with { x: 0, y: 0, z: -67 }
const cross = Vector.cross(v1, v2)
```

### Vector.min()

This method returns the absolute minimum point of two given vectors.

```JS
const v1 = new Vector(5, 7)
const v2 = new Vector(11, 2)

// expected result is a new vector instance with x = 5 and y = 2
const min = Vector.min(v1, v2)
```

### Vector.max()

This method returns the absolute maximum point of two given vectors.

```JS
const v1 = new Vector(5, 7)
const v2 = new Vector(11, 2)

// expected result is a new vector instance with x = 11 and y = 7
const min = Vector.max(v1, v2)
```

### Vector.minAndMax()

This method returns the absolute minimum and maximum points of two given vectors as a tuple with the first element being the minimum and the second value the maximum.

```JS
const v1 = new Vector(5, 7)
const v2 = new Vector(11, 2)

// expected result is a tuple with two vector instances like [{x: 5, y: 2}, {x: 11, y: 7}]
const minMax = Vector.minAndMax(v1, v2)
```

### Vector.eq()

Checks two given vectors for equality and returns `true` or `false`

```JS
const v1 = new Vector(3, -2)
const v2 = new Vector(1, 7)
const v3 = new Vector(1, 7)

// should return false
const res1 = Vector.eq(v1, v2)

// should return false
const res2 = Vector.eq(v1, v3)

// should return true
const res3 = Vector.eq(v2, v3)
```

As the second parameter you can also provide a number which then gets checked agains the x and y value of the given vector (first parameter).

```JS
const v1 = new Vector(1, 2)
const v2 = new Vector(1, 1)

// should return false
const res1 = Vector.eq(v1, 1)

// should return true
const res2 = Vector.eq(v2, 1)
```

## Instance properties

Every vector instance comes with a few calculated properties for your convenience.

### .abs

The absolute vector. Each value has been converted to positive numbers only.

```JS
const v1 = new Vector (-3, -1)

// the result is a vector with x = 3 and y = 1
const v1abs = v1.abs
```

### .length

Returns the length of the vector.

```JS
const v1 = new Vector (4, 7)

// the result is ~8.062
const v1len = v1.length
```

### .magnitude

The magnitude of the vector (this is an alias for .length).

```JS
const v1 = new Vector (4, 7)

// the result is ~8.062
const v1mag = v1.magnitude
```

### .normalized

Returns the normalized vector.

```JS
const v1 = new Vector (4, -7)

// the result is a new vector with x ~0.496 and y ~-0.868
const v1norm = v1.normalized
```

### .rounded

Returns a fector with only rounded values.

```JS
const v1 = new Vector (4.1, 5.8)

// the result is a new vector with x = 4 and y = 6
const v2 = v1.rounded
```

### .floored

Returns a fector with only floored values.

```JS
const v1 = new Vector (4.1, 5.8)

// the result is a new vector with x = 4 and y = 5
const v2 = v1.floored
```

### .ceiled

Returns a fector with only ceiled values.

```JS
const v1 = new Vector (4.1, 5.8)

// the result is a new vector with x = 5 and y = 6
const v2 = v1.ceiled
```

### .flipped

Returns a fector with flipped values.

```JS
const v1 = new Vector (4, 1)

// the result is a new vector with x = 1 and y = 4
const v2 = v1.flipped
```

## Instance Methods

Some static methods can also be performed on a vector instance with only one parameter.

### .add()

```JS
const v1 = new Vector(1, 1)
const v2 = new Vector(2, 3)

// expected result is a new Vector with x = 3 and y = 4
const v3 = v1.add(v2)
```

### .substract()

```JS
const v1 = new Vector(1, 1)
const v2 = new Vector(2, 3)

// expected result is a new Vector with x = -1 and y = -2
const v3 = v1.substract(v2)
```

### .multiply()

```JS
const v1 = new Vector(1, 2)
const v2 = new Vector(2, 3)

// expected result is a new Vector with x = 2 and y = 6
const v3 = v1.multiply(v2)
```

### .divide()

```JS
const v1 = new Vector(4, 6)
const v2 = new Vector(2, 3)

// expected result is a new Vector with x = 2 and y = 2
const v3 = v1.divide(v2)
```

### .dot()

```JS
const v1 = new Vector(3, -2)
const v2 = new Vector(1, 7)

// expected result is -11
const dot = v1.dot(v2)
```

### .cross()

```JS
const v1 = new Vector(5, 7)
const v2 = new Vector(11, 2)

// expected result is an object with { x: 0, y: 0, z: -67 }
const cross = v1.cross(v2)
```

### .eq()

```JS
const v1 = new Vector(3, -2)
const v2 = new Vector(1, 7)
const v3 = new Vector(1, 7)

// should return false
const res1 = v1.eq(v2)

// should return true
const res2 = v2.eq(v3)
```
