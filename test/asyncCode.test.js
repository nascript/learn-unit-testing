import { sayHelloAsync } from '../src/asyncCode'

test('test async code', async () => {
  const result = await sayHelloAsync('NAS')
  expect(result).toBe('Hello NAS')
})
test('test async code 1', async () => {
  const result = await sayHelloAsync('NAS')
  expect(result).toBe('Hello NAS')
})
test('test async code 2', async () => {
  const result = await sayHelloAsync('NAS')
  expect(result).toBe('Hello NAS')
})
test('test async code 3', async () => {
  const result = await sayHelloAsync('NAS')
  expect(result).toBe('Hello NAS')
})
