import { Axios } from 'axios'
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
  axios?: Axios // customAxios
}

const useReactFullAutoForm = (
  params: // method,
  // url,
  // onSubmit,
  // onCancel,
  // onReset,
  // onSuccess,
  // onError,
  // successMessages,
  // formatter,
  // submitFormat,
  // axios
  UseReactAutoFormParams
) => {
  const { formState, handlers } = useFormState(params)

  // const handleSubmit: OnSubmitFunction = ({ values, e }) => {
  //   // TODO
  // }
  // const handleCancel: OnCancelFunction = (e) => {
  //   // TODO
  // }
  // const handleReset: OnResetFunction = ({ values, e }) => {
  //   // TODO
  // }

  return {
    formState,
    handlers
    // handleSubmit,
    // handleCancel,
    // handleReset
  }
}

export default useReactFullAutoForm
