## Basic validation library

### Installation and usage

```npm install basic-validate```

Import full library with direct access to all functions with imported name:
`import * as Validate from 'basic-validate'` used as `Validation.isZero(10)`

Imported single functions individually
`import { isZero } from 'basic-validate'` used as `isZero(10)`

### Functions

#### isEmpty
Test whether a parameter is empty or not.
```
isEmpty('Hello') // false
```

#### isZero
Test whether a parameter is equal (===) to 0.
```
isZero(10) // false
```

#### charsBetween
Test whether a parameter is between (and including) min and max characters.
```
charsBetween('Hello', 1, 10) // true
```

#### isEmail
Used to test whether a parameter meets email regular expression.
```
isEmail('hello@nathgreen.co.uk') // true
```

#### isTelephone
Used to test whether a parameter meets telephone regular expression.
```
isTelephone('079123456789') // true
```

#### isEqual
Used to test whether two parameters are equal (===)
```
isEqual('password', 'passw0rd') // false
```