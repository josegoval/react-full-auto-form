import { Axios } from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { Fields } from '../../../core/types/propTypes/fields'
import { InputType } from '../../../core/types/propTypes/input'
import {
  ErrorMessages,
  SuccessMessages
} from '../../../core/types/propTypes/messages'
import {
  FormatterFunction,
  FormState,
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

const parseFieldsIntoFormState = (fields: Fields): FormState =>
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
  fields
}: // method,
// url,
// onSubmit,
// onCancel,
// onReset,
// onSuccess,
// onError,
// successMessages,
// formatter,
// submitFormat,
// axios
UseReactAutoFormParams) => {
  const [formState, setFormState] = useState<FormState>(
    parseFieldsIntoFormState(fields)
  )

  useEffect(() => {
    console.log('change')
  }, [setFormState])
  useEffect(() => {
    console.log('change-form')
  }, [formState])

  const handleChangeFormState: HandleChangeFormStateFunction = useCallback(
    (name, nextFieldState) =>
      setFormState((prevState) => ({
        ...prevState,
        [name]:
          typeof nextFieldState === 'function'
            ? nextFieldState(prevState)
            : nextFieldState
      })),
    [setFormState]
  )

  // const handleChangeFieldStateBlur = (name: string, isBlurred: boolean) =>
  //   setFormState((prevState) => ({
  //     ...prevState,
  //     [name]: { ...prevState[name], isBlurred }
  //   }))

  // const handleSubmit: OnSubmitFunction = ({ values, e }) => {
  //   // TODO
  // }
  // const handleCancel: OnCancelFunction = (e) => {
  //   // TODO
  // }
  // const handleReset: OnResetFunction = ({ values, e }) => {
  //   // TODO
  // }

  return {
    formState,
    handleChangeFormState
    // handleSubmit,
    // handleCancel,
    // handleReset
  }
}

export default useReactFullAutoForm
