import { TextFieldComponent } from '../../types/propTypes/components'
import { Falsy } from '../../types/shared/common'
import { defaultsDeep } from 'lodash'
import { defaultComponentConfigurations } from './defaultConstructor'
import defaultAxiosInstance, { AxiosInstance } from 'axios'

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

type ReactFullAutoFormInstanceConstructor = {
  componentConfigurations?: PartialComponentConfiguration
  axios?: AxiosInstance
}

export class ReactFullAutoFormInstance {
  private _componentConfigurations: ComponentConfigurations
  private _axios: AxiosInstance

  constructor({
    componentConfigurations = {},
    axios = defaultAxiosInstance
  }: ReactFullAutoFormInstanceConstructor = {}) {
    this._componentConfigurations = defaultsDeep(
      componentConfigurations,
      defaultComponentConfigurations
    )
    this._axios = axios
  }

  public get componentConfigurations() {
    return this._componentConfigurations
  }
  public set componentConfigurations(value) {
    this._componentConfigurations = value
  }
  public get axios(): AxiosInstance {
    return this._axios
  }
  public set axios(value: AxiosInstance) {
    this._axios = value
  }
}
