import React, { ReactElement } from 'react'
import { ReactFullAutoFormInstance } from '../../../../core/instances/ReactFullAutoFormInstance/ReactFullAutoFormInstance'
import { Fields } from '../../../../core/types/propTypes/fields'
import {
  FormState,
  Handlers
} from '../../../../core/types/propTypes/reactFullAutoForm'
import TextField from './components/TextField'

type FormFieldsProps = {
  instance: ReactFullAutoFormInstance
  fields: Fields
  formState: FormState
  handlers: Handlers
}

export default function FormFields({
  instance,
  fields,
  formState,
  handlers
}: FormFieldsProps): ReactElement {
  return (
    <React.Fragment>
      {fields?.map((field) => {
        switch (field.type) {
          case 'text':
            return (
              <TextField
                key={field.name}
                {...field}
                instance={instance}
                state={formState[field.name]}
                fieldHandlers={handlers[field.name]}
              />
            )

          default:
            return null
            break
        }
      })}
    </React.Fragment>
  )
}
