import { ChangeEvent, Dispatch } from 'react'
import { ReactFullAutoFormInstance } from '../../../../core/instances/ReactFullAutoFormInstance/ReactFullAutoFormInstance'
import { Field, Fields } from '../../../../core/types/propTypes/fields'
import { InputType } from '../../../../core/types/propTypes/input'
import {
  FormState,
  HandleChangeFormStateFunction
} from '../../../../core/types/propTypes/reactFullAutoForm'
import { validateTextInput } from '../../../../core/validations/textInput'
import { ValidateCallback } from '../../../../core/validations/types'

// change to get callbaks (validate and handleChangeFormState)
function getValidateCallback(
  instance: ReactFullAutoFormInstance,
  field: Field
): ValidateCallback {
  switch (field.type) {
    case 'text':
      return (e: ChangeEvent<HTMLInputElement>) =>
        validateTextInput(instance, field, e)

    default:
      return () => ''
  }
}

function getHandleChange(
  instance: ReactFullAutoFormInstance,
  field: Field,
  handleChangeFormState: HandleChangeFormStateFunction
) {
  const validate = getValidateCallback(instance, field)

  return function (e: ChangeEvent<HTMLInputElement>) {
    // TODO: beforeValidate
    const errorMessage = validate(e)
    // TODO: beforeChange
    handleChangeFormState(
      field,
      errorMessage,
      //   callback (strategy selector)
      errorMessage ? prevState[props.name].value : e.target.value
    )
    // TODO: afterChange
  }
}

function getHandleBlur(
  name: string,
  setFormState: Dispatch<React.SetStateAction<FormState>>
) {
  return function () {
    setFormState((prevState) =>
      prevState[name].isBlurred
        ? prevState
        : {
            ...prevState,
            [name]: { ...prevState[name], isBlurred: true }
          }
    )
  }
}

export function parseFieldsIntoHandlers(
  fields: Fields,
  setFormState: Dispatch<React.SetStateAction<FormState>>
) {
  const handleChangeFormState: HandleChangeFormStateFunction = (
    { name },
    errorMessage,
    nextFieldStateValue
  ) =>
    setFormState((prevState) => ({
      ...prevState,
      [name]: {
        value: nextFieldStateValue,
        error: errorMessage,
        isBlurred: false
      }
    }))

  return fields.reduce(
    (acc, field) => ({
      ...acc,
      [field.name]: {
        handleChange: getHandleChange(field, handleChangeFormState),
        handleBlur: getHandleBlur(field.name, setFormState)
      }
    }),
    {}
  )
}
