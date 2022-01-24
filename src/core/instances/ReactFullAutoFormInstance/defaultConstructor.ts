import TextField from '../../../components/ReactFullAutoForm/components/FormFields/components/TextField'
import { AlertNotifier } from './notifier/alertNotifier'
import { ComponentConfigurations, Notifier } from './ReactFullAutoFormInstance'

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

export const defaultNotifier: Notifier<unknown> = {
  notify: AlertNotifier,
  defaultErrorMessages: {
    others: {
      type: 'error',
      title: 'Unexpected error',
      description: 'The form could not be submited.'
    }
  },
  defaultSuccessMessages: {
    others: {
      type: 'success',
      title: 'Successfully sent',
      description: 'The form was sent successfully.'
    }
  }
}
