function extract (input) {
  const queryStart = input.indexOf('?')
  return queryStart === -1 ? '' : input.slice(queryStart+1) 
}

/**
 * @description 将 url 的query字符串转为对象
 * @param { string } url 地址
 * @returns { object } query对象
 */
export const queryString = (url = '') => {
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
