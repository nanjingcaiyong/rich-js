import { plus, minus, times, div } from '../lib/math'
test('math', () => {
  expect(plus(0.1, 0.2)).toBe(0.3)
  expect(plus(0.1, 0.2, 0.6)).toBe(0.9)
  expect(minus(0.6, 0.1)).toBe(0.5)
  expect(minus(0.6, 0.1, 0.2)).toBe(0.3)
  expect(times(0.3, 10)).toBe(3)
  expect(times(0.3, 10, 2)).toBe(6)
  expect(div(100, 2)).toBe(50)
  expect(div(100, 10, 2)).toBe(5)
})