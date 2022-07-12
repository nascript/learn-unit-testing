// not toBe untuk membandingkan data yang bukan berupa object
test('test toBe', () => {
  const name = 'Nas'
  const hello = `Hello ${name}`

  expect(hello).not.toBe('Hello Nas BEDA')
})

// not toEqual digunakan untuk membandingkan data berupa object
test('test equal', () => {
  const profile = {
    name: 'Tion',
    age: 36,
  }

  expect(profile).not.toEqual({ name: 'Tion BEDA', age: 36 })
})

test('test toBe', () => {
  const name = 'Nas'
  const hello = `Hello ${name}`

  expect(hello).not.toBe('Hello Nas BEDA')
})
