import { ChangeEvent, Component, CSSProperties, FC } from 'react'

type CallbackHookFunction = ({
  nextValue,
  prevValue,
  e
}: {
  nextValue: any
  prevValue: any
  e: ChangeEvent<HTMLInputElement>
}) => void

// TODO: check ture | false return
type ValidateFunction = (value: any) => string | boolean | null | undefined
type Validation = ValidateFunction | ValidateFunction[]

type PatternValidation = { regex: RegExp; errorMessage: string }
type Pattern = PatternValidation | PatternValidation[]

export type CommonFieldProps = {
  label: string
  name: string
  submitKey?: string // takes name by default
  ariaLabel?: string // takes label || name by default
  className?: string
  style?: CSSProperties
  beforeChange?: CallbackHookFunction
  afterChange?: CallbackHookFunction
  component?: FC | Component
  validate?: Validation
  pattern?: Pattern
  isRequired: boolean
}

export type TextInputProps = CommonFieldProps & {
  type: 'text'
  minLenght?: number
  maxLenght?: number
}

export type EmailInputProps = CommonFieldProps & {
  type: 'email'
  minLenght?: number
  maxLenght?: number
}

export type NumberInputProps = CommonFieldProps & {
  type: 'number'
  min?: number
  max?: number
  step?: number
}

type ImageFileTypes = 'image/*' | 'image/png' | 'image/jpg'
type DocumentsFileTypes = 'pdf'
type FileTypes = DocumentsFileTypes | ImageFileTypes
export type FileInputProps = CommonFieldProps & {
  type: 'file'
  canSelectMultipleFiles?: boolean
  minFiles?: number
  maxFiles?: number
  allowedFiles: '*' | FileTypes | FileTypes[]
}

export type CheckboxInputProps = CommonFieldProps & {
  type: 'checkbox'
}

export type DateInputProps = CommonFieldProps & {
  type: 'date'
  minDate: Date
  maxDate: Date
}

export type DatetimeInputProps = CommonFieldProps & {
  type: 'datetime'
  minDate: Date
  maxDate: Date
}

export type PasswordInputProps = CommonFieldProps & {
  type: 'password'
  minLenght?: number
  maxLenght?: number
}

export type TelInputProps = CommonFieldProps & {
  type: 'tel'
}

export type UrlInputProps = CommonFieldProps & {
  type: 'url'
}

// TODO: image type?
// TODO: month type?
// TODO: time type?
// TODO: week type?
// TODO: radio

export type Fields = Array<
  | TextInputProps
  //   | EmailInputProps
  //   | NumberInputProps
  //   | FileInputProps
  //   | CheckboxInputProps
  //   | DateInputProps
  //   | DatetimeInputProps
  | PasswordInputProps
  //   | TelInputProps
  //   | UrlInputProps
>
