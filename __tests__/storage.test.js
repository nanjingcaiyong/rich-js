import { useStorage } from '../lib/storage'
import {jest} from '@jest/globals'

test('不设缓存时间', () => {
  const storage = useStorage('person1', {name: 'zhangsan', age: 23})
  expect(storage.value).toEqual({name: 'zhangsan', age: 23})
})

test('设绝对过期时间', () => {
  const storage = useStorage('person2', {name: 'zhangsan', age: 23}, {expires: Number(new Date()) + 3000})
  setTimeout(() => {
    expect(storage.value).toEqual({name: 'zhangsan', age: 23})
  }, 2000)
  setTimeout(() => {
    expect(storage.value).toBeUndefined()
  }, 4000)
  jest.runAllTimers()
})

test('设相对过期时间', () => {
  const storage = useStorage('person3', {name: 'zhangsan', age: 23}, {interval: 3000})
  setTimeout(() => {
    expect(storage.value).toEqual({name: 'zhangsan', age: 23})
  }, 2980)
  setTimeout(() => {
    expect(storage.value).toBeUndefined()
  }, 4000)
  jest.runAllTimers()
})