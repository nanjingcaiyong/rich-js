import { queryString } from '../index.js'

describe('url 参数', () => {
  test('query 携带参数', () => {
    expect(queryString('https://www.baidu.com/?name=sa&pwd=123'))
      .toEqual({name: 'sa', pwd: '123'})
  })
  
  test('spa 携带参数', () => {
    expect(queryString('https://www.baidu.com/#/search/sortList?name=sa&pwd=123'))
      .toEqual({name: 'sa', pwd: '123'})
  })
})

