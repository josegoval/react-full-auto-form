import { AxiosInstance } from 'axios'
import { ReactFullAutoFormInstance } from '../../../core/instances/ReactFullAutoFormInstance/ReactFullAutoFormInstance'
import { Fields } from '../../../core/types/propTypes/fields'
import {
  ErrorMessages,
  SuccessMessages
} from '../../../core/types/propTypes/messages'
import {
  FormatterFunction,
  OnCancelFunction,
  OnErrorFunction,
  OnResetFunction,
  OnSubmitFunction,
  OnSuccessFunction,
  SubmitFormat
} from '../../../core/types/propTypes/reactFullAutoForm'
import { HttpMethod } from '../../../core/types/shared/http'
import useFormActions from './useFormActions'
import useFormState from './useFormState'

type UseReactAutoFormParams = {
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
  // QUESTION (TODO): this might change to AxiosInstanceIntance type?
  axios?: AxiosInstance // customAxiosInstance
}

const useReactFullAutoForm = (params: UseReactAutoFormParams) => {
  const { formState, resetFormState, handlers } = useFormState(params)
  const { handleSubmit, handleReset, handleCancel } = useFormActions({
    ...params,
    formState,
    resetFormState
  })

  return {
    formState,
    handlers,
    handleSubmit,
    handleCancel,
    handleReset
  }
}

export default useReactFullAutoForm
