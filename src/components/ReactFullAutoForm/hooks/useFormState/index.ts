import { Dispatch, useState } from 'react'
import { Fields } from '../../../../core/types/propTypes/fields'
import { InputType } from '../../../../core/types/propTypes/input'
import {
  FormState,
  HandleChangeFormStateFunction
} from '../../../../core/types/propTypes/reactFullAutoForm'

const getTypeDefaultValue = (type: InputType) => {
  if (type === 'text' || type === 'password') {
    return ''
  }
  return null
}

const parseFieldsIntoFormState = (fields: Fields): FormState =>
  fields.reduce(
    (acc, { name, type }) => ({
      ...acc,
      [name]: { value: getTypeDefaultValue(type), error: '', isBlurred: false }
    }),
    {}
  )

type UseFormStateParams = {
  fields: Fields
}

const useFormState = ({ fields }: UseFormStateParams) => {
  const [formState, setFormState] = useState<FormState>(
    parseFieldsIntoFormState(fields)
  )

  // TODO: complete handlers
  const handlers = parseFieldsIntoHandlers(fields, formState)
  // returns ({[key]: {handleChangeState,handleChangeBlur}})
  return { formState, setFormState }
}

export default useFormState
