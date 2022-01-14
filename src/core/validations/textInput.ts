import { TextFieldValidations } from '../types/propTypes/fields'
import { Falsy } from '../types/shared/common'

export const validateTextInput = (
  { maxLenght, minLenght, pattern, validate }: TextFieldValidations,
  nextValue: string
): string | Falsy | void => {
  if (nextValue.length < Number(minLenght)) {
    // TODO: get global object configurations (minLength)=>string|Falsy
    return ''
  }
}
