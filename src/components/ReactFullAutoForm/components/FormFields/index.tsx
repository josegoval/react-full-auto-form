import React, { ReactElement } from 'react'
import { Fields } from '../../../../core/types/propTypes/fields'
import { HandleChangeFormStateFunction } from '../../../../core/types/propTypes/reactFullAutoForm'
import TextField from './components/TextField'

type FormFieldsProps = {
  fields: Fields
  formState: object // TODO type
  onChangeFormState: HandleChangeFormStateFunction
}

export default function FormFields({
  fields,
  formState,
  onChangeFormState
}: FormFieldsProps): ReactElement {
  return (
    <>
      {fields?.map((field) => {
        switch (field.type) {
          case 'text':
            return <TextField {...field} state={formState[field.name]} />
            break

          default:
            return null
            break
        }
      })}
    </>
  )
}
