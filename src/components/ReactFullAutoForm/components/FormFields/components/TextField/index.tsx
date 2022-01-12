import React, { ChangeEvent, ReactElement } from 'react'
import { TextFieldProps } from '../../../../../../core/types/propTypes/fields'
import {
  FieldState,
  HandleChangeFormStateFunction
} from '../../../../../../core/types/propTypes/reactFullAutoForm'
import DefaultField from '../shared/DefaultField'

type Props = TextFieldProps & {
  state: FieldState
  onChangeFormState: HandleChangeFormStateFunction
}

export default function TextField(props: Props): ReactElement {
  // TODO: validateTextInput
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    props.onChangeFormState(props.name, {
      value: e.target.value,
      error: '',
      isBlurred: false
    })

  if (props.component) {
    return <props.component {...props} />
  }
  return (
    <DefaultField {...props}>
      <input type={props.type} onChange={handleChange} />
    </DefaultField>
  )
}
