import { Axios } from 'axios'
import { useState } from 'react'
import { Fields } from '../../../core/types/propTypes/fields'
import { InputType } from '../../../core/types/propTypes/input'
import {
  ErrorMessages,
  SuccessMessages
} from '../../../core/types/propTypes/messages'
import {
  FormatterFunction,
  HandleChangeFormStateFunction,
  OnCancelFunction,
  OnErrorFunction,
  OnResetFunction,
  OnSubmitFunction,
  OnSuccessFunction,
  SubmitFormat
} from '../../../core/types/propTypes/reactFullAutoForm'
import { HttpMethod } from '../../../core/types/shared/http'

const getTypeDefaultValue = (type: InputType) => {
  if (type === 'text' || type === 'password') {
    return ''
  }
  return null
}

// TODO: type return
const parseFieldsIntoFormState = (fields: Fields) =>
  fields.reduce(
    (acc, { name, type }) => ({
      ...acc,
      [name]: { value: getTypeDefaultValue(type), error: '', isBlurred: false }
    }),
    {}
  )

type UseReactAutoFormParams = {
  fields: Fields
  method?: HttpMethod
  url?: string
  onSubmit?: OnSubmitFunction
  onCancel?: OnCancelFunction
  onReset?: OnResetFunction
  onSuccess?: OnSuccessFunction
  onError?: OnErrorFunction
  successMessages?: SuccessMessages
  errorMessages?: ErrorMessages
  formatter?: FormatterFunction
  submitFormat?: SubmitFormat
  axios?: Axios // customAxios
}

const useReactFullAutoForm = ({
  fields,
  method,
  url,
  onSubmit,
  onCancel,
  onReset,
  onSuccess,
  onError,
  successMessages,
  formatter,
  submitFormat,
  axios
}: UseReactAutoFormParams) => {
  const [formState, setFormState] = useState(parseFieldsIntoFormState(fields))

  const handleChangeFormState: HandleChangeFormStateFunction = (
    name,
    nextFieldState
  ) =>
    setFormState((prevState) => ({
      ...prevState,
      [name]: nextFieldState
    }))

  const handleSubmit: OnSubmitFunction = ({ values, e }) => {
    // TODO
  }
  const handleCancel: OnCancelFunction = (e) => {
    // TODO
  }
  const handleReset: OnResetFunction = ({ values, e }) => {
    // TODO
  }

  return {
    formState,
    handleChangeFormState,
    handleSubmit,
    handleCancel,
    handleReset
  }
}

export default useReactFullAutoForm
