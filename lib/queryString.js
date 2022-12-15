import * as Regex from './regex'

function extract (input) {
  const queryStart = input.indexOf('?')
  return queryStart === -1 ? '' : input.slice(queryStart+1) 
}

function removeHash (input) {
  const queryStart = input.indexOf('#')
  return queryStart === -1 ? input : input.slice(0, queryStart)
}

function removeQuery (input) {
  const queryStart = input.indexOf('?')
  return queryStart === -1 ? input : input.slice(0, queryStart)
}

function removeHost (url) {
  return Regex.HOST.test(url) ? url.replace(Regex.HOST, '') : url
}

/**
 * @description 将 url 的query字符串转为对象
 * @param { string } url 地址
 * @returns { object } query对象
 */
export function queryString (url = '') {
  if (typeof url === 'string' && url.length > 0) {
    let search = extract(url)
    return search.split('&').filter(t => t)
      .reduce((query, curKV) => {
        const arr = curKV.split('=').map(decodeURIComponent);
        query[arr[0]] = arr[1];
        return query;
      }, {});
  }
  return {}
}


export function queryParams (url = '', match = '') {
  if (url === '') return {}
  const SEPARATOR = '/'
  url = removeHost(removeQuery(removeHash(url)))
  url = url[0] === SEPARATOR ? url.slice(1) : url
  let matches = match[0] === SEPARATOR 
    ? match.slice(1).split(SEPARATOR)
    : match.split(SEPARATOR)

  if (match[0] !== SEPARATOR) {
    url = url.slice(url.indexOf(matches[0]))
  }
  const pathes = url.split(SEPARATOR)
  return matches.reduce((obj, path, index) => {
    return path === pathes[index] ? obj : Object.assign(obj, {[path]: pathes[index]})
  }, {})
}
