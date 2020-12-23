function deepCopy(obj) {
  let copy = {}

  for (let key in obj) {
    if (typeof obj[key] == 'object') {
      copy[key] = JSON.parse(JSON.stringify(obj[key]))
    } else {
      copy[key] = obj[key]
    }
  }
}
