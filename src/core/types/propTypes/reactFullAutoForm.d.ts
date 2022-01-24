import { ChangeEvent } from 'react'
import { AxiosError, AxiosResponse } from 'axios'
import { Falsy } from '../shared/common'
import { Field } from './fields'

// TODO: set axios types for responses
export type OnSubmitFunction = (values: FormState, e: React.FormEvent) => void
export type OnCancelFunction = (e: React.MouseEvent<HTMLButtonElement>) => void
export type OnResetFunction = (
  values: FormState,
  e: React.MouseEvent<HTMLButtonElement>
) => void

export type OnSuccessFunction = (
  response: any,
  axiosResponse: AxiosResponse
) => void
export type OnErrorFunction = (response: any, axiosError: AxiosError) => void

export type ButtonConfiguration = {
  text: string
  color: string
  className: string
  style: React.CSSProperties
}
export type ButtonOptions = React.FC | React.Component | ButtonConfiguration

// TODO: set param and return types
// new format to send to submit
export type FormatterFunction = (values: any) => any

export type SubmitFormat = 'JSON' | 'multipart/form-data'

export type FieldStateValue = string | number

export type FieldState = {
  value: FieldStateValue
  error: string | Falsy
  isBlurred: boolean | Falsy
}

export type FormState = {
  [name: string]: FieldState
}

export type HandleChangeFieldStateValueFunction = (
  prevState: FormState
) => FieldStateValue

export type HandleChangeFormStateFunction = (
  field: Field,
  errorMessage: string,
  handleChangeFieldStateValue: HandleChangeFieldStateValueFunction
) => void

export type FieldHandlers = {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleBlur: () => void
}

export type Handlers = {
  [name: string]: FieldHandlers
}
