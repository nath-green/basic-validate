import * as Validate from './Validate'

console.log(Validate.isEmpty(''))
console.log(Validate.charsBetween('123', 1, 3))
console.log(Validate.isEmail('hello@nathgreen.co.uk'))
console.log(Validate.isEqual('password', 'password123'))
console.log(Validate.isTelephone('07712'))
