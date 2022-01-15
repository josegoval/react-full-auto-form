import { TextFieldComponent } from '../../types/propTypes/components'
import { Falsy } from '../../types/shared/common'
import { defaultsDeep } from 'lodash'
import { defaultComponentConfigurations } from './defaultConstructor'

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
}

export class ReactFullAutoFormInstance {
  private _componentConfigurations: ComponentConfigurations

  constructor({
    componentConfigurations = {}
  }: ReactFullAutoFormInstanceConstructor = {}) {
    this.componentConfigurations = defaultsDeep(
      componentConfigurations,
      defaultComponentConfigurations
    )
  }

  public get componentConfigurations() {
    return this._componentConfigurations
  }
  public set componentConfigurations(value) {
    this._componentConfigurations = value
  }
}
