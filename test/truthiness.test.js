test('truthiness', () => {
  let value = null
  expect(value).toBeNull() //untuk mengecek apakah bernilai null
  expect(value).toBeDefined() //untuk mengecek apakah variebl di difined
  expect(value).toBeFalsy() //untuk mengecek apakah variabel bernilai false

  value = undefined
  expect(value).toBeUndefined() //untuk mengecek apakah bernilai unidifined
  expect(value).toBeFalsy()

  value = 'Nas'
  expect(value).toBeTruthy() // untuk mengecek apakah nilai true
})

// jika var null, itu dianggap false, terdefinisi
// jika var undifined, itu dianggap undifined, dan false
// jika var punya value selain null atau undifined maka dianggap true
