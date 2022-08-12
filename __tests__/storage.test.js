import { Storage } from '../lib/storage'
import {jest} from '@jest/globals'

const localStorageMock = (function() {
  let store = {};
  return {
    getItem: function(key) {
      return store[key];
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
    clear: function() {
      store = {};
    },
    removeItem: function(key) {
      delete store[key];
    }
  };
})();

Object.defineProperty(global, 'localStorage', { value: localStorageMock });

test('不设缓存时间', () => {
  expect(Storage.setItem('name', {name: 'sa'})).toBeUndefined()
  expect(Storage.getItem('name')).toEqual({name: 'sa'})
})

test('设缓存时间', () => {
  expect(Storage.setItem('name', {name: 'sa'}, Date.now() + 2 * 1000)).toBeUndefined()
  setTimeout(() => {
    expect(Storage.getItem('name')).toBeNull()
  }, 3000)
  jest.runAllTimers()
})