import React, { ReactElement } from 'react'
import { Fields } from '../../core/types/propTypes/fields'
import {
  ErrorMessages,
  SuccessMessages
} from '../../core/types/propTypes/messages'
import { Axios } from 'axios'
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

export default function ReactFullAutoForm(
  props: ReactFullAutoFormProps
): ReactElement {
  const { fields } = props

  const {
    formState,
    handleChangeFormState
    // handleReset,
    // handleCancel,
    // handleSubmit
  } = useReactFullAutoForm(props)

  return (
    <form>
      <FormFields
        fields={fields}
        formState={formState}
        onChangeFormState={handleChangeFormState}
      />
    </form>
  )
}
