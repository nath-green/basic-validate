## Calculator functions

Each function can be imported singularly or as a collection. When used as a collection, use the import alias `* as` to group utility functions together.

```js
import * as Calc from './Calc'

let numbers = [15, 34, 11, 20.45]
console.log(Calc.add(numbers)) // 80.45
console.log(Calc.add(9, 2)) // 11
console.log(Calc.subtract(20, 16)) // 4
console.log(Calc.multiply(5, 3)) // 15
console.log(Calc.divide(12, 4)) // 3
console.log(Calc.square(4)) // 16
console.log(Calc.percentOf(30, 60)) // 18
console.log(Calc.asPercentOf(30, 60)) // 50
console.log(Calc.asPercentOf(30, 60, true)) // 50%
```

```
import { add } from './Calc'

console.log(add(9, 2))
```

### Functions

#### Add

The `add()` functions can take two parameters to add the numbers together or a sole parameter as an array.