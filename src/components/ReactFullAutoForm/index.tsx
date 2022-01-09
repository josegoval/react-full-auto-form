import React, { ReactElement } from 'react'
import { Fields } from '../../core/types/propTypes/fields'
import {
  ErrorMessages,
  SuccessMessages
} from '../../core/types/propTypes/messages'

// TODO: set axios types for responses
type OnSubmitFunction = ({
  values,
  e
}: {
  values: any
  e: React.FormEvent
}) => void

type OnSuccessFunction = (response: any) => void
type OnErrorFunction = (response: any, error: Error) => void

type OnCancelFunction = (e: React.MouseEvent<HTMLButtonElement>) => void

type ReactFullAutoFormProps = {
  fields: Fields
  method?: 'POST' | 'PUT' | 'PATCH'
  url?: string
  onSubmit?: OnSubmitFunction
  onSuccess?: OnSuccessFunction
  onError?: OnErrorFunction
  successMessages?: SuccessMessages
  errorMessages?: ErrorMessages
  submitFormat?: 'JSON' | 'multipart/form-data'
  onCancel?: OnCancelFunction
}

export default function ReactFullAutoForm(
  props: ReactFullAutoFormProps
): ReactElement {
  return <div />
}
