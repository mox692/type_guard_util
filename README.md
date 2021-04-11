## type switch in TS
Some utils, which using `type guard` in typescript, to do `type-switch` in typescript, like `golang`.  


## Using
install package
```
npm install type_guard_util
```

using
```
import { TypeIs } from '../src/TypeIs'

type Water = {
    drink: string
}

type Food = {
    eat: string
}

const example = (waterOrfood: Water | Food) => {
    if(TypeIs<Water, Water | Food>(waterOrfood, "drink")) {
        // waterOrfood is regarded as Water type here
    } else if(TypeIs<Food, Water | Food>(waterOrfood, "eat")) {
        // waterOrfood is regarded as Food type here
    }
}

```