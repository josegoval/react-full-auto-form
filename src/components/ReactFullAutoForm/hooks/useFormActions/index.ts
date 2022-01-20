import { Axios } from 'axios'
import React, { Dispatch } from 'react'
import { ReactFullAutoFormInstance } from '../../../../core/instances/ReactFullAutoFormInstance/ReactFullAutoFormInstance'
import {
  ErrorMessages,
  SuccessMessages
} from '../../../../core/types/propTypes/messages'
import {
  FormatterFunction,
  FormState,
  OnCancelFunction,
  OnErrorFunction,
  OnResetFunction,
  OnSubmitFunction,
  OnSuccessFunction,
  SubmitFormat
} from '../../../../core/types/propTypes/reactFullAutoForm'
import { HttpMethod } from '../../../../core/types/shared/http'

type UseFormActionsParams = {
  formState: FormState
  resetFormState: () => void
  instance: ReactFullAutoFormInstance
  method?: HttpMethod
  url?: string
  onSubmit?: OnSubmitFunction
  onCancel?: OnCancelFunction
  onReset?: OnResetFunction
  onSuccess?: OnSuccessFunction
  onError?: OnErrorFunction
  successMessages?: SuccessMessages
  errorMessages?: ErrorMessages
  formatter?: FormatterFunction
  submitFormat?: SubmitFormat
  axios?: Axios // customAxios
}

const useFormActions = (params: UseFormActionsParams) => {
  const handleSubmit = (e: React.FormEvent) => {
    //   submitKey format
    // formatter
    // handleSubmit
    // axios submit
    // TODO
  }

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    params.resetFormState()
    typeof params.onReset === 'function' &&
      params.onReset({ values: params.formState, e })
  }

  return { handleSubmit, handleCancel: params.onCancel, handleReset }
}

export default useFormActions
