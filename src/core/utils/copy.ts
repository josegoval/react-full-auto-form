export function deepCopyObject<T extends object>(obj: T): any {
  return Object.keys(obj).reduce((acc, next) => {
    const nextValue = obj[next]
    return {
      ...acc,
      [next]:
        typeof nextValue === 'object'
          ? deepCopyObject(nextValue)
          : Array.isArray(nextValue)
          ? [...nextValue]
          : nextValue
    }
  }, {})
}
