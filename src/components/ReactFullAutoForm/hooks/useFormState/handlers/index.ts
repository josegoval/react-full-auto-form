import { ChangeEvent, Dispatch } from 'react'
import { ReactFullAutoFormInstance } from '../../../../../core/instances/ReactFullAutoFormInstance/ReactFullAutoFormInstance'
import { Field, Fields } from '../../../../../core/types/propTypes/fields'
import {
  FormState,
  HandleChangeFormStateFunction,
  Handlers
} from '../../../../../core/types/propTypes/reactFullAutoForm'
import { OnChangeCallbacks } from '../../../../../core/validations/types'
import { getTextInputCallbacks } from './inputCallbacks'

// change to get callbaks (validate and handleChangeFormState)
function getOnChangeCallbacks(
  instance: ReactFullAutoFormInstance,
  field: Field
): OnChangeCallbacks {
  switch (field.type) {
    case 'text':
      return getTextInputCallbacks(instance, field)

    default:
      return {
        validate: () => '',
        handleChangeFieldStateValue: () => () => ''
      }
  }
}

function getHandleChange(
  instance: ReactFullAutoFormInstance,
  field: Field,
  handleChangeFormState: HandleChangeFormStateFunction
) {
  const { validate, handleChangeFieldStateValue } = getOnChangeCallbacks(
    instance,
    field
  )

  return function (e: ChangeEvent<HTMLInputElement>) {
    // TODO: beforeValidate
    const errorMessage = validate(e)
    // TODO: beforeChange
    handleChangeFormState(
      field,
      errorMessage,
      handleChangeFieldStateValue(e, errorMessage, field)
    )
    // TODO: afterChange
  }
}

function getHandleBlur(
  name: string,
  setFormState: Dispatch<React.SetStateAction<FormState>>
) {
  return function () {
    setFormState((prevState: FormState) =>
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
  instance: ReactFullAutoFormInstance,
  fields: Fields,
  setFormState: Dispatch<React.SetStateAction<FormState>>
): Handlers {
  console.log('----> re-build')
  const handleChangeFormState: HandleChangeFormStateFunction = (
    { name },
    errorMessage,
    handleChangeFieldStateValue
  ) =>
    setFormState((prevState: FormState) => ({
      ...prevState,
      [name]: {
        value: handleChangeFieldStateValue(prevState),
        error: errorMessage,
        isBlurred: false
      }
    }))

  return fields.reduce(
    (acc, field) => ({
      ...acc,
      [field.name]: {
        handleChange: getHandleChange(instance, field, handleChangeFormState),
        handleBlur: getHandleBlur(field.name, setFormState)
      }
    }),
    {}
  )
}
