import { ChangeEvent, ComponentClass, CSSProperties, FC } from 'react'

type CallbackHookFunction = ({
  nextValue,
  prevValue,
  e
}: {
  nextValue: any
  prevValue: any
  e: ChangeEvent<HTMLInputElement>
}) => void

type ValidateFunction = (value: any) => string
export type Validation = ValidateFunction | ValidateFunction[]

type PatternValidation = { regex: RegExp; errorMessage: string }
export type Pattern = PatternValidation | PatternValidation[]

export type CommonFieldValidations = {
  validate?: Validation
  pattern?: Pattern
}

export type CommonFieldProps = CommonFieldValidations & {
  label: string
  name: string
  submitKey?: string // takes name by default
  ariaLabel?: string // takes label || name by default
  className?: string
  style?: CSSProperties
  beforeChange?: CallbackHookFunction
  afterChange?: CallbackHookFunction
  component?: FC<any> // TODO: allow classes
  isRequired: boolean
}

export type TextFieldValidations = CommonFieldValidations & {
  minLength?: number
  maxLength?: number
}

export type TextFieldProps = CommonFieldProps &
  TextFieldValidations & {
    type: 'text'
  }

export type EmailFieldProps = CommonFieldProps & {
  type: 'email'
  minLength?: number
  maxLength?: number
}

export type NumberFieldProps = CommonFieldProps & {
  type: 'number'
  min?: number
  max?: number
  step?: number
}

type ImageFileTypes = 'image/*' | 'image/png' | 'image/jpg'
type DocumentsFileTypes = 'pdf'
type FileTypes = DocumentsFileTypes | ImageFileTypes
export type FileFieldProps = CommonFieldProps & {
  type: 'file'
  canSelectMultipleFiles?: boolean
  minFiles?: number
  maxFiles?: number
  allowedFiles: '*' | FileTypes | FileTypes[]
}

export type CheckboxFieldProps = CommonFieldProps & {
  type: 'checkbox'
}

export type DateFieldProps = CommonFieldProps & {
  type: 'date'
  minDate: Date
  maxDate: Date
}

export type DatetimeFieldProps = CommonFieldProps & {
  type: 'datetime'
  minDate: Date
  maxDate: Date
}

export type PasswordFieldProps = CommonFieldProps & {
  type: 'password'
  minLength?: number
  maxLength?: number
}

export type TelFieldProps = CommonFieldProps & {
  type: 'tel'
}

export type UrlFieldProps = CommonFieldProps & {
  type: 'url'
}

// TODO: image type?
// TODO: month type?
// TODO: time type?
// TODO: week type?
// TODO: radio

export type Field =
  | TextFieldProps
  //   | EmailFieldProps
  //   | NumberFieldProps
  //   | FileFieldProps
  //   | CheckboxFieldProps
  //   | DateFieldProps
  //   | DatetimeFieldProps
  | PasswordFieldProps
//   | TelFieldProps
//   | UrlFieldProps

export type Fields = Array<Field>
