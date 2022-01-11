import React, { ReactElement } from 'react'
import { Fields } from '../../core/types/propTypes/fields'
import {
  ErrorMessages,
  SuccessMessages
} from '../../core/types/propTypes/messages'
import { Axios } from 'axios'
import Inputs from './components/Inputs'
import {
  ButtonOptions,
  FormatterFunction,
  OnCancelFunction,
  OnErrorFunction,
  OnResetFunction,
  OnSubmitFunction,
  OnSuccessFunction,
  SubmitFormat
} from '../../core/types/propTypes/reactFullAutoForm'
import { HttpMethod } from '../../core/types/shared/http'

type ReactFullAutoFormProps = {
  fields: Fields
  method?: HttpMethod
  url?: string
  onSubmit?: OnSubmitFunction
  onCancel?: OnCancelFunction
  onReset?: OnResetFunction
  onSuccess?: OnSuccessFunction
  onError?: OnErrorFunction
  hideResetButton?: boolean
  hideCancelButton?: boolean
  hideSubmitButton?: boolean
  submitButton?: ButtonOptions
  cancelButton?: ButtonOptions
  resetButton?: ButtonOptions
  successMessages?: SuccessMessages
  errorMessages?: ErrorMessages
  formatter?: FormatterFunction
  submitFormat?: SubmitFormat
  axios?: Axios // customAxios
}

export default function ReactFullAutoForm({
  fields,
  method,
  url,
  onSubmit,
  onCancel,
  onReset,
  onSuccess,
  onError,
  hideResetButton,
  hideCancelButton,
  hideSubmitButton,
  submitButton,
  cancelButton,
  resetButton,
  successMessages,
  errorMessages,
  formatter,
  submitFormat,
  axios
}: ReactFullAutoFormProps): ReactElement {
  return (
    <form>
      <Inputs fields={fields} />
    </form>
  )
}
