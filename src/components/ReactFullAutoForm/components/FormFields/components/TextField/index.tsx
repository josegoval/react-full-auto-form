import React, { ReactElement } from 'react'
import { TextFieldProps } from '../../../../../../core/types/propTypes/fields'
import { HandleChangeFormStateFunction } from '../../../../../../core/types/propTypes/reactFullAutoForm'

type Props = TextFieldProps & {
  state: object
  onChangeFormState: HandleChangeFormStateFunction
}

export default function TextField(props: Props): ReactElement {
  if (props.component) {
    return <props.component {...props} />
  }
  return
}
