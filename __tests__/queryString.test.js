import { queryString, queryParams } from '../index.js'

describe('获取url参数', () => {
  test('query 携带参数', () => {
    window.location.href = "https://www.baidu.com?name=sa&pwd=123";
    expect(window.location.search).toBe('?name=sa&pwd=123')
    expect(queryString(window.location.search))
      .toEqual({name: 'sa', pwd: '123'})
  })
  
  test('spa 携带参数', () => {
    window.location.href = "https://www.baidu.com/#/search/sortList?name=sa&pwd=123";
    expect(queryString(window.location.hash))
      .toEqual({name: 'sa', pwd: '123'})
  })
})

describe('获取url路径', () => {
  test('url 的路径', () => {
    expect(queryParams(''))
  })
})

