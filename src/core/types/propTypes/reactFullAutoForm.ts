import { Falsy } from '../shared/common'

// TODO: set axios types for responses
export type OnSubmitFunction = ({
  values,
  e
}: {
  values: any
  e: React.FormEvent
}) => void
export type OnCancelFunction = (e: React.MouseEvent<HTMLButtonElement>) => void
export type OnResetFunction = ({
  values,
  e
}: {
  values: any
  e: React.MouseEvent<HTMLButtonElement>
}) => void

export type OnSuccessFunction = (response: any) => void
export type OnErrorFunction = (response: any, error: Error) => void

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

export type HandleChangeFormStateFunction = (
  name: string,
  nextFieldState: FieldState
) => void
