// toBe untuk membandingkan data yang bukan berupa object
test('test toBe', () => {
  const name = 'Nas'
  const hello = `Hello ${name}`

  expect(hello).toBe('Hello Nas')
})

// toEqual digunakan untuk membandingkan data berupa object
test('test equal', () => {
  const profile = {
    name: 'Tion',
    age: 36,
  }

  expect(profile).toEqual({ name: 'Tion', age: 36 })
})


// negative testing
test('test toBe', () => {
  const name = 'Nas'
  const hello = `Hello ${name}`

  expect(hello).toBe('Hello Nas')
})
