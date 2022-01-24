import React, { ReactElement } from 'react'
import { ReactFullAutoFormInstance } from '../../../../../../core/instances/ReactFullAutoFormInstance/ReactFullAutoFormInstance'
import { TextFieldProps } from '../../../../../../core/types/propTypes/fields'
import {
  FieldHandlers,
  FieldState
} from '../../../../../../core/types/propTypes/reactFullAutoForm'
import DefaultField from '../shared/DefaultField'

// TODO: abstractFieldProps<T> = T & {...}
type Props = TextFieldProps & {
  instance: ReactFullAutoFormInstance
  state: FieldState
  fieldHandlers: FieldHandlers
}

export default function TextField(props: Props): ReactElement {
  if (props.component) {
    return <props.component {...props} />
  }
  return (
    <DefaultField {...props}>
      <input
        type={props.type}
        onChange={props.fieldHandlers.handleChange}
        onBlur={props.fieldHandlers.handleBlur}
      />
    </DefaultField>
  )
}
