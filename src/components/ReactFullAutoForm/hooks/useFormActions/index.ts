import axiosStatic, { AxiosInstance } from 'axios'
import React from 'react'
import { ReactFullAutoFormInstance } from '../../../../core/instances/ReactFullAutoFormInstance/ReactFullAutoFormInstance'
import { Fields } from '../../../../core/types/propTypes/fields'
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
import { set } from 'lodash'

function getSubmitRequestBody(
  fields: Fields,
  formState: FormState,
  submitFormat: SubmitFormat
) {
  if (submitFormat === 'multipart/form-data') {
    // TODO
    return {}
  }
  // JSON submit format
  const subtmitRequestBody = {}
  fields.forEach(({ name, submitKey }) => {
    // TODO: strategy pattern for each input type
    set(subtmitRequestBody, submitKey || name, formState[name])
  })
  return subtmitRequestBody
}

type UseFormActionsParams = {
  formState: FormState
  resetFormState: () => void
  instance: ReactFullAutoFormInstance
  fields: Fields
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
  axios?: AxiosInstance // customAxiosInstance
}

const useFormActions = ({
  formState,
  resetFormState,
  instance,
  fields,
  method = 'POST',
  url,
  onSubmit,
  onCancel,
  onReset,
  onSuccess,
  onError,
  // successMessages,
  // errorMessages,
  formatter,
  submitFormat = 'JSON',
  axios
}: UseFormActionsParams) => {
  const handleSubmit = async (e: React.FormEvent) => {
    // TODO: check errors before submit!
    if (typeof onSubmit === 'function') {
      onSubmit(formState, e)
    }

    let data = getSubmitRequestBody(fields, formState, submitFormat)
    // QUESTION: formatter previous or ---> after <---?
    if (typeof formatter === 'function') {
      data = formatter(data)
    }
    // TODO: axios submit
    const submitAxiosInstance = axios || instance.axios
    try {
      const response = await submitAxiosInstance({ method, url, data })
      onSuccess && onSuccess(response.data, response)
      instance.notifySuccess(response.status, response)
    } catch (error) {
      if (!axiosStatic.isAxiosError(error)) return
      // WARNING!: non axios error will be ignored. Is this case possible?
      onError && onError(error.response, error)
      instance.notifyError(error.response?.status || -1, error)
    }
  }

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    resetFormState()
    typeof onReset === 'function' && onReset(formState, e)
  }

  return { handleSubmit, handleCancel: onCancel, handleReset }
}

export default useFormActions
