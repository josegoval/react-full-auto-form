import { TextFieldComponent } from '../../types/propTypes/components'
import { Falsy } from '../../types/shared/common'
import { defaultsDeep } from 'lodash'
import {
  defaultComponentConfigurations,
  defaultNotifierConfiguration
} from './defaultConstructor'
import defaultAxiosInstance, {
  AxiosError,
  AxiosInstance,
  AxiosResponse
} from 'axios'
import { NotifierFunction } from './notifier/notifier'
import {
  ErrorMessages,
  PartialErrorMessages,
  PartialSuccessMessages,
  SuccessMessages
} from '../../types/propTypes/messages'

type ClampErrorFunction = (
  requiredLength: number,
  label: string
) => string | Falsy

export type DefaultTextFieldErrorMessages = {
  minLength: string | ClampErrorFunction
  maxLength: string | ClampErrorFunction
}

export type PartialDefaultTextFieldErrorMessages = Partial<DefaultTextField>

export type DefaultTextField = {
  component: TextFieldComponent
  errorMessages: DefaultTextFieldErrorMessages
}

export type PartialDefaultTextField = Partial<DefaultTextField>

export type ComponentConfigurations = {
  defaultTextField: DefaultTextField
}

type PartialComponentConfiguration = Partial<ComponentConfigurations>

export type NotifierConfiguration<T> = {
  notify: NotifierFunction<T>
  defaultSuccessMessages: SuccessMessages
  defaultErrorMessages: ErrorMessages
}

type PartialNotifierConfiguration<T> = {
  notify?: NotifierFunction<T>
  defaultSuccessMessages?: PartialSuccessMessages
  defaultErrorMessages?: PartialErrorMessages
}

type ReactFullAutoFormInstanceConstructor<
  NotifierFunctionConfigurationParamType
> = {
  componentConfigurations?: PartialComponentConfiguration
  axios?: AxiosInstance
  notifierConfiguration?: PartialNotifierConfiguration<NotifierFunctionConfigurationParamType>
}

export class ReactFullAutoFormInstance<
  NotifierFunctionConfigurationParamType = any
> {
  private _componentConfigurations: ComponentConfigurations
  private _axios: AxiosInstance
  private _notifierConfiguration: NotifierConfiguration<NotifierFunctionConfigurationParamType>

  constructor({
    componentConfigurations = {},
    axios = defaultAxiosInstance,
    notifierConfiguration = {}
  }: // defaultSuccessMessages
  // defaultErrorMessages
  ReactFullAutoFormInstanceConstructor<NotifierFunctionConfigurationParamType> = {}) {
    this._componentConfigurations = defaultsDeep(
      componentConfigurations,
      defaultComponentConfigurations
    )
    this._axios = axios
    this._notifierConfiguration = defaultsDeep(
      notifierConfiguration,
      defaultNotifierConfiguration
    )
  }

  public get componentConfigurations() {
    return this._componentConfigurations
  }
  public get axios(): AxiosInstance {
    return this._axios
  }

  public notifySuccess(
    statusCode: number,
    axiosResponse: AxiosResponse,
    successMessages?: PartialSuccessMessages
  ) {
    for (const messages of [
      successMessages,
      this._notifierConfiguration.defaultSuccessMessages
    ]) {
      if (typeof messages === 'object') {
        if (Object.prototype.hasOwnProperty(statusCode)) {
          const notifyArgs = messages[statusCode]
          notifyArgs && this._notifierConfiguration.notify(notifyArgs)
          return
        }
        if (Object.prototype.hasOwnProperty('others')) {
          const notifyArgs =
            typeof messages.others === 'function'
              ? messages.others({
                  response: axiosResponse.data,
                  code: statusCode,
                  axiosResponse
                })
              : messages.others
          if (!notifyArgs) return

          this._notifierConfiguration.notify(notifyArgs)
          return
        }
      }
    }
  }

  public notifyError(
    statusCode: number,
    axiosError: AxiosError,
    errorMessages?: PartialErrorMessages
  ) {
    for (const messages of [
      errorMessages,
      this._notifierConfiguration.defaultErrorMessages
    ]) {
      if (typeof messages === 'object') {
        if (Object.prototype.hasOwnProperty(statusCode)) {
          const notifyArgs = messages[statusCode]
          notifyArgs && this._notifierConfiguration.notify(notifyArgs)
          return
        }
        if (Object.prototype.hasOwnProperty('others')) {
          const notifyArgs =
            typeof messages.others === 'function'
              ? messages.others({
                  response: axiosError.response?.data,
                  code: statusCode,
                  axiosError
                })
              : messages.others
          if (!notifyArgs) return

          this._notifierConfiguration.notify(notifyArgs)
          return
        }
      }
    }
  }
}
