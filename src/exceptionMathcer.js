export class MyException extends Error {}

export const callMe = (name) => {
  if (name === 'NAS') {
    throw new MyException('Ups my exception happens')
  } else {
    return 'Ok'
  }
}
