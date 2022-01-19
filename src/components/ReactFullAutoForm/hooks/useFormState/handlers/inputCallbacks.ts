import { ChangeEvent } from 'react'
import { ReactFullAutoFormInstance } from '../../../../../core/instances/ReactFullAutoFormInstance/ReactFullAutoFormInstance'
import {
  Field,
  TextFieldProps
} from '../../../../../core/types/propTypes/fields'
import { FormState } from '../../../../../core/types/propTypes/reactFullAutoForm'
import { validateTextInput } from '../../../../../core/validations/textInput'
import { OnChangeCallbacks } from '../../../../../core/validations/types'

export function getTextInputCallbacks(
  instance: ReactFullAutoFormInstance,
  field: TextFieldProps
): OnChangeCallbacks {
  return {
    validate: (e: ChangeEvent<HTMLInputElement>) =>
      validateTextInput(instance, field, e),
    handleChangeFieldStateValue:
      (
        e: ChangeEvent<HTMLInputElement>,
        errorMessage: string,
        field: TextFieldProps
      ) =>
      (prevState: FormState) =>
        errorMessage ? prevState[field.name].value : e.target.value
  }
}
