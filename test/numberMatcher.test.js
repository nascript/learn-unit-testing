test('number mathcer toBeGreaterThan', () => {
  let value = 3 + 3

  expect(value).toBeGreaterThan(2)
})

test('number matcher toBeGreaterThanOrEqual', () => {
  let value = 2 + 2

  expect(value).toBeGreaterThanOrEqual(4)
})

test('number matcher toBeLessThan', () => {
  let value = 4 + 1

  expect(value).toBeLessThan(6)
})

test('number matcher toBeLessThanOrEqual', () => {
  let value = 2 + 5

  expect(value).toBeLessThanOrEqual(7)
})
