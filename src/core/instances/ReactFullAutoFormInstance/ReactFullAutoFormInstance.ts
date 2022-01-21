import { TextFieldComponent } from '../../types/propTypes/components'
import { Falsy } from '../../types/shared/common'
import { defaultsDeep } from 'lodash'
import { defaultComponentConfigurations } from './defaultConstructor'
import defaultAxiosInstance, { AxiosInstance } from 'axios'
import { NotifierFunction } from './notifier/notifier'
import { AlertNotifier } from './notifier/alertNotifier'

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

type PartialComponentConfiguration = Partial<{
  defaultTextField: PartialDefaultTextField
}>

type ReactFullAutoFormInstanceConstructor<NotifierConfigurationType> = {
  componentConfigurations?: PartialComponentConfiguration
  axios?: AxiosInstance
  notifierFunction?: NotifierFunction<NotifierConfigurationType>
}

export class ReactFullAutoFormInstance<NotifierConfigurationType = any> {
  private _componentConfigurations: ComponentConfigurations
  private _axios: AxiosInstance
  private _notifierFunction: NotifierFunction<NotifierConfigurationType>

  constructor({
    componentConfigurations = {},
    axios = defaultAxiosInstance,
    notifierFunction = AlertNotifier
  }: // defaultSuccessMessages
  // defaultErrorMessages
  ReactFullAutoFormInstanceConstructor<NotifierConfigurationType> = {}) {
    this._componentConfigurations = defaultsDeep(
      componentConfigurations,
      defaultComponentConfigurations
    )
    this._axios = axios
    this._notifierFunction = notifierFunction
    // TODO: (others field is required for both cases)
    // defaultSuccessMessages
    // defaultErrorMessages
  }

  public get componentConfigurations() {
    return this._componentConfigurations
  }
  public get axios(): AxiosInstance {
    return this._axios
  }
  public get notify(): NotifierFunction<NotifierConfigurationType> {
    return this._notifierFunction
  }
}
