import { TextFieldComponent } from '../types/propTypes/components'
import BaseTextField from '../../components/ReactFullAutoForm/components/FormFields/components/TextField'

type ReactFullAutoFormInstanceConstructor = {
  DefaultTextFieldComponent?: TextFieldComponent
}

class ReactFullAutoFormInstance {
  private _components

  constructor({
    DefaultTextFieldComponent = BaseTextField
  }: ReactFullAutoFormInstanceConstructor = {}) {
    this.components = {
      DefaultTextFieldComponent
    }
  }

  public get components() {
    return this._components
  }
  public set components(value) {
    this._components = value
  }
}

export const globalReactFullAutoFormInstance = new ReactFullAutoFormInstance()
