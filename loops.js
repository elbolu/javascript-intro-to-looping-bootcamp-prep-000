function makeArray() {
  const array = []
  const t = Math.floor(Math.random() * 10)

  for (let i = 0; i < 25; i++) {
    array.push("I am a strange loop.")
  }

  return [array, 25]
}
