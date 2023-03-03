import Vector from './vector.ts'

test('creates a Vector Object with given parameters', () => {
  const v = new Vector(1, 2)

  expect(v.x).toBe(1)
  expect(v.y).toBe(2)
})
test('sets x and y per setter correctly', () => {
  const v = new Vector(1, 2)
  v.x = 12
  v.y = -5

  expect(v.x).toBe(12)
  expect(v.y).toBe(-5)
})

test('adds two vectors correctly', () => {
  const v1 = new Vector(1, 2)
  const v2 = new Vector(1, 2)
  const v3 = v1.add(v2)

  expect(v3.x).toBe(2)
  expect(v3.y).toBe(4)
})

test('adds a vector correctly to a number', () => {
  const v1 = new Vector(1, 2)
  const v2 = v1.add(2)

  expect(v2.x).toBe(3)
  expect(v2.y).toBe(4)
})

test('substracts two vectors correctly', () => {
  const v1 = new Vector(4, 6)
  const v2 = new Vector(1, 2)
  const v3 = v1.substract(v2)

  expect(v3.x).toBe(3)
  expect(v3.y).toBe(4)
})

test('substracts a number from a vector correctly', () => {
  const v1 = new Vector(4, 6)
  const v2 = v1.substract(2)

  expect(v2.x).toBe(2)
  expect(v2.y).toBe(4)
})

test('multiplies two vectors correctly', () => {
  const v1 = new Vector(4, 6)
  const v2 = new Vector(1, 2)
  const v3 = v1.multiply(v2)

  expect(v3.x).toBe(4)
  expect(v3.y).toBe(12)
})

test('multiplies a number with a vector correctly', () => {
  const v1 = new Vector(4, 2)
  const v2 = v1.multiply(2)

  expect(v2.x).toBe(8)
  expect(v2.y).toBe(4)
})

test('divides two vectors correctly', () => {
  const v1 = new Vector(4, 6)
  const v2 = new Vector(2, 2)
  const v3 = v1.divide(v2)

  expect(v3.x).toBe(2)
  expect(v3.y).toBe(3)
})

test('divides a vector by a number correctly', () => {
  const v1 = new Vector(4, 2)
  const v2 = v1.divide(2)

  expect(v2.x).toBe(2)
  expect(v2.y).toBe(1)
})

test('calculates the dot product correctly', () => {
  const v1 = new Vector(3, -2)
  const v2 = new Vector(1, 7)
  const dot = v1.dot(v2)

  expect(dot).toBe(-11)
})

test('calculates the cross product correctly', () => {
  const v1 = new Vector(5, 7)
  const v2 = new Vector(11, 2)
  const cross = v1.cross(v2)

  expect(cross.z).toBe(-67)
})

test('calculates the angle between two vectors correctly in rad', () => {
  const v1 = new Vector(3, -2)
  const v2 = new Vector(1, 7)
  const deg = Vector.angleRadBetween(v1, v2)

  expect(deg.toFixed(3)).toBe('2.017')
})

test('calculates the angle between two vectors correctly in deg', () => {
  const v1 = new Vector(3, -2)
  const v2 = new Vector(1, 7)
  const deg = Vector.angleDegBetween(v1, v2)

  expect(deg.toFixed(3)).toBe('115.560')
})

test('handles equality correctly for two vectors', () => {
  const v1 = new Vector(3, -2)
  const v2 = new Vector(1, 7)
  const v3 = new Vector(1, 7)

  expect(v1.eq(v2)).toBe(false)
  expect(v1.eq(v3)).toBe(false)
  expect(v2.eq(v3)).toBe(true)
})

test('handles equality correctly for a vector and a number', () => {
  const v1 = new Vector(4, 4)
  const v2 = 4
  const v3 = 5

  expect(v1.eq(v2)).toBe(true)
  expect(v1.eq(v3)).toBe(false)
})

test('flips correctly', () => {
  const v1 = new Vector(3, -2)
  const v2 = v1.flipped

  expect(v2.x).toBe(-2)
  expect(v2.y).toBe(3)
})

test('rounds correctly', () => {
  const v1 = new Vector(3.3, -2.6)
  const v2 = v1.rounded

  expect(v2.x).toBe(3)
  expect(v2.y).toBe(-3)
})

test('floors correctly', () => {
  const v1 = new Vector(3.3, -2.6)
  const v2 = v1.floored

  expect(v2.x).toBe(3)
  expect(v2.y).toBe(-3)
})

test('ceils correctly', () => {
  const v1 = new Vector(3.3, -2.6)
  const v2 = v1.ceiled

  expect(v2.x).toBe(4)
  expect(v2.y).toBe(-2)
})

test('calculates the correct magnitude (length)', () => {
  const v1 = new Vector(4, 7)
  const m = v1.magnitude

  expect(m.toFixed(3)).toBe('8.062')
})

test('calculates the correct absolute vector', () => {
  const v1 = new Vector(4, -7)
  const v2 = new Vector(-4, -7)
  const a1 = v1.abs
  const a2 = v2.abs

  expect(a1.x).toBe(4)
  expect(a1.y).toBe(7)
  expect(a2.x).toBe(4)
  expect(a2.y).toBe(7)
})

test('calculates the correct absolute min and max between two vectors', () => {
  const v1 = new Vector(4, -7)
  const v2 = new Vector(-4, 8)
  const[min, max] = Vector.minAndMax(v1, v2)

  expect(min.x).toBe(-4)
  expect(min.y).toBe(-7)
  expect(max.x).toBe(4)
  expect(max.y).toBe(8)
})

test('calculates the correct absolute min and max between a vector and a number', () => {
  const v1 = new Vector(4, -7)
  const v2 = 2
  const[min, max] = Vector.minAndMax(v1, v2)

  expect(min.x).toBe(2)
  expect(min.y).toBe(-7)
  expect(max.x).toBe(4)
  expect(max.y).toBe(2)
})

test('calculates the correct normalized vector', () => {
  const v1 = new Vector(4, -7)
  const n = v1.normalized

  expect(n.x.toFixed(3)).toBe('0.496')
  expect(n.y.toFixed(3)).toBe('-0.868')
})