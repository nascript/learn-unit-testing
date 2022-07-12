import { callMe, MyException } from '../src/exceptionMathcer'

test('exception', () => {
  expect(() => callMe('NAS')).toThrow()
})

test('exception dengan exception apapun', () => {
  expect(() => callMe('NAS')).toThrow(MyException)
})

test('exception dengan message', () => {
  expect(() => callMe('NAS')).toThrow('Ups my exception happens no')
})
