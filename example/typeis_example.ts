import { TypeIs } from '../src/TypeIs'

type Water = {
    drink: string
}

const createWater = ():Water => {
    return { drink: "drink water"}
}
type Food = {
    eat: string
}
const createFood = ():Food => {
    return { eat: "eat food" }
}

const example = (waterOrfood: Water | Food) => {
    if(TypeIs<Water, Water | Food>(waterOrfood, "drink")) {
        console.log("waterOrfood is Food Type.", waterOrfood.drink)
    } else if(TypeIs<Food, Water | Food>(waterOrfood, "eat")) {
        console.log("waterOrfood is Food Type.", waterOrfood.eat)
    }
}

console.log(example(createWater())) // -> waterOrfood is Water Type.drink water
console.log(example(createFood())) // -> waterOrfood is Food Type.eat food