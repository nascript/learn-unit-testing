import { sayHelloAsync } from '../src/asyncCode'

test('test async code', async () => {
  const result = await sayHelloAsync('NAS')
  expect(result).toBe('Hello NAS')
})
