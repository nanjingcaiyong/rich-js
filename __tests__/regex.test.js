import { Regex } from '../index'

describe('正则', () => {
  test('手机号', () => {
    expect('18651600453').toMatch(Regex.PHONE)
    expect('+8618651600453').toMatch(Regex.PHONE)
    expect('008618651600453').toMatch(Regex.PHONE)
  })
  
  test('日期', () => {
    expect('2022-06-05').toMatch(Regex.DATE)
  })
})
