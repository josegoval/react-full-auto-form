import { TextFieldComponent } from '../../types/propTypes/components'
import { Falsy } from '../../types/shared/common'

type ClampErrorFunction = (
  requiredLength: number,
  label: string
) => string | Falsy

export type DefaultTextField = {
  component?: TextFieldComponent
  errorMessages?: {
    minLength?: string | ClampErrorFunction
    maxLength?: string | ClampErrorFunction
  }
}

type ReactFullAutoFormInstanceConstructor = {
  componentConfigurations: {
    DefaultTextField?: DefaultTextField
  }
}

class ReactFullAutoFormInstance {
  private _componentConfigurations

  constructor({ DefaultTextField }: ReactFullAutoFormInstanceConstructor = {}) {
    this.componentConfigurations = {
      DefaultTextField
    }
  }

  public get componentConfigurations() {
    return this._componentConfigurations
  }
  public set componentConfigurations(value) {
    this._components = value
  }
}

export const globalReactFullAutoFormInstance = new ReactFullAutoFormInstance()
