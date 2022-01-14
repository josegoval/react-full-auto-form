import { deepCopyObject } from './copy'

export function fillObjectWithDefaults<T extends object>(
  defaultObj: T,
  obj: T
) {
  return Object.keys(defaultObj).reduce((acc, nextKey) => {
    const nextDefaultObjValue = defaultObj[nextKey]
    const nextObjValue = obj && obj[nextKey]
    if (typeof nextDefaultObjValue === 'object') {
      if (!nextObjValue) {
        acc[nextKey] = deepCopyObject(nextDefaultObjValue)
      }
      acc[nextKey] = fillObjectWithDefaults(nextDefaultObjValue, nextObjValue)
    }
    if (Array.isArray(nextDefaultObjValue)) {
      acc[nextKey] = Array.isArray(nextObjValue)
        ? [...nextObjValue]
        : [...nextDefaultObjValue]
    }
    acc[nextKey] = nextObjValue || nextDefaultObjValue
    return acc
  }, {})
}
