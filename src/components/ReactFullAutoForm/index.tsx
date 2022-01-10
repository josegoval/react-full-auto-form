import React, { ReactElement } from 'react'
import { Fields } from '../../core/types/propTypes/fields'
import {
  ErrorMessages,
  SuccessMessages
} from '../../core/types/propTypes/messages'
import { Axios } from 'axios'

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
  successMessages?: SuccessMessages
  errorMessages?: ErrorMessages
  formatter?: FormatterFunction
  submitFormat?: 'JSON' | 'multipart/form-data'
  axios?: Axios // customAxios
}

export default function ReactFullAutoForm(
  props: ReactFullAutoFormProps
): ReactElement {
  return <div />
}
