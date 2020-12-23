function takeFromInterval(array, firstInterval, secondInterval) {
  let newArr
  if (firstInterval <= secondInterval) {
    newArr = array.slice(
      array.indexOf(firstInterval),
      array.indexOf(secondInterval) + 1
    )
  } else if (firstInterval > secondInterval) {
    newArr = array.slice(
      array.indexOf(secondInterval),
      array.indexOf(firstInterval) + 1
    )
  }
  console.log(newArr)
}
