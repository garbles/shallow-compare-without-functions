import {ok} from 'assert'

import {shallowEqualWithoutFunctions} from 'src/shallowEqualWithoutFunctions'

const equal = (objA, objB) => ok(shallowEqualWithoutFunctions(objA, objB))
const notEqual = (objA, objB) => ok(!shallowEqualWithoutFunctions(objA, objB))

describe('shallowEqualWithoutFunctions', () => {
  it('compares objects and ignores function props', () => {
    equal({a: 1}, {a: 1})
    notEqual({a: 1}, {a: 2})
    notEqual({a: 1}, {b: 1})

    const obj = {b: 1}

    equal({a: obj}, {a: obj})
    notEqual({a: {b: 1}}, {a: {b: 1}})

    notEqual({a: 1, b: 2}, {a: 1, b: () => {}})
    equal({a: 1, b: () => {}}, {a: 1, b: () => {}})

    notEqual({a: 1, b: 2}, {a: 1})
    notEqual({a: 1}, {a: 1, b: 2})
  })
})
