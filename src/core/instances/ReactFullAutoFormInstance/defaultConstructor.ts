import TextField from '../../../components/ReactFullAutoForm/components/FormFields/components/TextField'
import { ComponentConfigurations } from './ReactFullAutoFormInstance'

export const defaultComponentConfigurations: Required<ComponentConfigurations> =
  {
    defaultTextField: {
      component: TextField,
      errorMessages: {
        minLength: (minLength, label) =>
          `${label} must be ${minLength} characters long.`,
        maxLength: (maxLength, label) =>
          `${label} must not be longer than ${maxLength} characters.`
      }
    }
  }
