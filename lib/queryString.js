function extract (input) {
  const queryStart = input.indexOf('?')
  return queryStart === -1 ? '' : input.slice(queryStart+1) 
}

function removeHash (input) {
  const hashStart = input.indexOf('#')
  return hashStart === -1 ? input : input.slice(0, hashStart)
}

export const queryString = (url = '') => {
  if (typeof url === 'string' && url.length > 0) {
    url = removeHash(url)
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
