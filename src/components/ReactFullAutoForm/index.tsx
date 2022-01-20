import React, { ReactElement } from 'react'
import { Fields } from '../../core/types/propTypes/fields'
import {
  ErrorMessages,
  SuccessMessages
} from '../../core/types/propTypes/messages'
import { AxiosInstance } from 'axios'
import FormFields from './components/FormFields'
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
import useReactFullAutoForm from './hooks/useReactFullAutoForm'
import { ReactFullAutoFormInstance } from '../../core/instances/ReactFullAutoFormInstance/ReactFullAutoFormInstance'
import { globalReactFullAutoFormInstance } from '../../core/instances/ReactFullAutoFormInstance'

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
  axios?: AxiosInstance // customAxiosInstance
  instance?: ReactFullAutoFormInstance
}

export default function ReactFullAutoForm({
  fields,
  instance = globalReactFullAutoFormInstance
}: ReactFullAutoFormProps): ReactElement {
  const {
    formState,
    handlers
    // handleReset,
    // handleCancel,
    // handleSubmit
  } = useReactFullAutoForm({ fields, instance })

  return (
    <form>
      <FormFields
        fields={fields}
        instance={instance}
        formState={formState}
        handlers={handlers}
      />
    </form>
  )
}
