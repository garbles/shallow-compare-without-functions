import {shallowEqualWithoutFunctions} from './shallowEqualWithoutFunctions'

export function shallowCompareWithoutFunctions (instance, props, state) {
  return (
    !shallowEqualWithoutFunctions(instance.props, props) ||
    !shallowEqualWithoutFunctions(instance.state, state)
  )
}

export default shallowCompareWithoutFunctions
