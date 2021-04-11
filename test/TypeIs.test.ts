import { TypeIs } from '../src/TypeIs'

type Water = {
    drink: string
}
type Food = {
    eat: string
}

const waterOrfood1: Water | Food = {
    drink: "drink water"
}
const waterOrfood2: Water | Food = {
    eat: "eat food"
}

test('testcase1', () => {
    expect(TypeIs<Water, Water | Food>(waterOrfood1, "drink")).toBe(true)
})
test('testcase2', () => {
    expect(TypeIs<Water, Water | Food>(waterOrfood2, "eat")).toBe(true)
})