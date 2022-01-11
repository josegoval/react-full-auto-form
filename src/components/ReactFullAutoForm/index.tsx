import React, { ReactElement } from 'react'
import { Fields } from '../../core/types/propTypes/fields'
import {
  ErrorMessages,
  SuccessMessages
} from '../../core/types/propTypes/messages'
import { Axios } from 'axios'
import Inputs from './components/Inputs'

// TODO: set axios types for responses
type OnSubmitFunction = ({
  values,
  e
}: {
  values: any
  e: React.FormEvent
}) => void
type OnCancelFunction = (e: React.MouseEvent<HTMLButtonElement>) => void
type OnResetFunction = ({
  values,
  e
}: {
  values: any
  e: React.MouseEvent<HTMLButtonElement>
}) => void

type OnSuccessFunction = (response: any) => void
type OnErrorFunction = (response: any, error: Error) => void

type ButtonConfiguration = {
  text: string
  color: string
  className: string
  style: React.CSSProperties
}
type ButtonOptions = React.FC | React.Component | ButtonConfiguration

// TODO: set param and return types
// new format to send to submit
type FormatterFunction = (values: any) => any

type ReactFullAutoFormProps = {
  fields: Fields
  method?: 'POST' | 'PUT' | 'PATCH'
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
  submitFormat?: 'JSON' | 'multipart/form-data'
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
