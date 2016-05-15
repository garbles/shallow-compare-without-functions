const hasOwnProperty = Object.prototype.hasOwnProperty

export function shallowEqualWithoutFunctions (prevObj, nextObj) {
  if (prevObj === nextObj) {
    return true
  }

  const prevKeys = Object.keys(prevObj)
  const nextKeys = Object.keys(nextObj)
  const len = prevKeys.length

  if (len !== nextKeys.length) {
    return false
  }

  let i = -1

  while (++i < len) {
    const key = prevKeys[i]

    if (!hasOwnProperty.call(nextObj, key)) {
      return
    }

    const prev = prevObj[key]
    const next = nextObj[key]

    if (typeof prev === `function` && typeof next === `function`) {
      continue
    }

    if (prev !== next) {
      return false
    }
  }

  return true
}
