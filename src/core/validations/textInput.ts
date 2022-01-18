import { ChangeEvent } from 'react'
import { ReactFullAutoFormInstance } from '../instances/ReactFullAutoFormInstance/ReactFullAutoFormInstance'
import { TextFieldProps } from '../types/propTypes/fields'
import { validateCommonFieldValidations } from './shared'

export const validateTextInput = (
  instance: ReactFullAutoFormInstance,
  { label, maxLength, minLength, pattern, validate }: TextFieldProps,
  { target: { value: nextValue } }: ChangeEvent<HTMLInputElement>
): string => {
  if (minLength && nextValue.length < +minLength) {
    const errorMessageAction =
      instance.componentConfigurations.defaultTextField.errorMessages.minLength
    return typeof errorMessageAction === 'function'
      ? errorMessageAction(minLength, label) || ''
      : errorMessageAction
  }
  if (maxLength && nextValue.length > +maxLength) {
    const errorMessageAction =
      instance.componentConfigurations.defaultTextField.errorMessages.maxLength
    return typeof errorMessageAction === 'function'
      ? errorMessageAction(maxLength, label) || ''
      : errorMessageAction
  }
  return validateCommonFieldValidations({ pattern, validate }, nextValue)
}
