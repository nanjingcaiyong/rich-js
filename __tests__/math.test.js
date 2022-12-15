import { plus, minus, times, div } from '../lib/math'
describe('数学计算', () => {
  test('加法', () => {
    expect(plus(0.1, 0.2)).toBe(0.3)
    expect(plus(0.7, 0.1)).toBe(0.8)
    expect(plus(0.2, 0.4)).toBe(0.6)
  })
  test('减法', () => {
    expect(minus(1.5, 1.2)).toBe(0.3)
    expect(minus(0.3, 0.2)).toBe(0.1)
  })
  test('乘法', () => {
    expect(times(19.9, 100)).toBe(1990)
    expect(times(0.8, 3)).toBe(2.4)
    expect(times(35.41, 100)).toBe(3541)
    expect(times(210000, 8.2)).toBe(1722000)
  })
  test('除法', () => {
    expect(div(0.3, 0.1)).toBe(3)
    expect(div(0.69, 10)).toBe(0.069)
  })
})
