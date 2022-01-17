import React, { ReactElement } from 'react'
import { ReactFullAutoFormInstance } from '../../../../core/instances/ReactFullAutoFormInstance/ReactFullAutoFormInstance'
import { Fields } from '../../../../core/types/propTypes/fields'
import {
  FormState,
  HandleChangeFormStateFunction
} from '../../../../core/types/propTypes/reactFullAutoForm'
import TextField from './components/TextField'

type FormFieldsProps = {
  instance: ReactFullAutoFormInstance
  fields: Fields
  formState: FormState
  onChangeFormState: HandleChangeFormStateFunction
}

export default function FormFields({
  instance,
  fields,
  formState,
  onChangeFormState
}: FormFieldsProps): ReactElement {
  return (
    <React.Fragment>
      {fields?.map((field) => {
        switch (field.type) {
          case 'text':
            return (
              <TextField
                {...field}
                instance={instance}
                state={formState[field.name]}
                onChangeFormState={onChangeFormState}
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
