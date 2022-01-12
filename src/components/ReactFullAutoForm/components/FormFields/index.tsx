import React, { ReactElement } from 'react'
import { Fields } from '../../../../core/types/propTypes/fields'
import {
  FieldState,
  HandleChangeFormStateFunction
} from '../../../../core/types/propTypes/reactFullAutoForm'
import TextField from './components/TextField'

type FormState = {
  [key: string]: FieldState<string>
}

type FormFieldsProps = {
  fields: Fields
  formState: FormState // TODO type
  onChangeFormState: HandleChangeFormStateFunction
}

export default function FormFields({
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
