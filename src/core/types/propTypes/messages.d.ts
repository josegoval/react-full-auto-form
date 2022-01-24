import { AxiosError, AxiosResponse } from 'axios'
import { NotifierFunctionParams } from '../../instances/ReactFullAutoFormInstance/notifier/notifier'
import { Falsy } from '../shared/common'

type MessageNotification<T = any> = NotifierFunctionParams<T>

type SuccessfulMessageNotificationFunction = ({
  response,
  code,
  axiosResponse
}: {
  response: any
  code: number
  axiosResponse: AxiosResponse
}) => MessageNotification | Falsy | void

type ErrorMessageNotificationFunction = ({
  response,
  code,
  axiosError
}: {
  response: any
  code: number
  axiosError: AxiosError
}) => MessageNotification | Falsy | void

export type CodeMessage = { [code: number]: MessageNotification }

// IDEA: convert to class and check range 200 to 209?
export type SuccessMessages = CodeMessage & {
  others: MessageNotification | SuccessfulMessageNotificationFunction
}

export type PartialSuccessMessages = Partial<SuccessMessages>

// IDEA: convert to class and check range 400 to 599?
export type ErrorMessages = CodeMessage & {
  others: MessageNotification | ErrorMessageNotificationFunction
}

export type PartialErrorMessages = Partial<ErrorMessages>
