import { Falsy } from '../shared/common'

type MessageNotification = { title: string; description: string }

type SuccessfulMessageNotificationFunction = ({
  response,
  code,
  axiosResponse
}: {
  response: any
  code: number
  axiosResponse: any
}) => MessageNotification | Falsy | void

type ErrorMessageNotificationFunction = ({
  response,
  code,
  axiosError
}: {
  response: any
  code: number
  axiosError: any
}) => MessageNotification | Falsy | void

export type CodeMessage = { [code: number]: MessageNotification }

// TODO: convert to class and check range 200 to 209?
export type SuccessMessages = CodeMessage & {
  others: MessageNotification | SuccessfulMessageNotificationFunction
}
// TODO: convert to class and check range 400 to 599?
export type ErrorMessages = CodeMessage & {
  others: MessageNotification | ErrorMessageNotificationFunction
}
