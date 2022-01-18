import React, { ChangeEvent, ReactElement } from 'react'
import { ReactFullAutoFormInstance } from '../../../../../../core/instances/ReactFullAutoFormInstance/ReactFullAutoFormInstance'
import { TextFieldProps } from '../../../../../../core/types/propTypes/fields'
import {
  FieldState,
  FormState,
  HandleChangeFormStateFunction
} from '../../../../../../core/types/propTypes/reactFullAutoForm'
import { validateTextInput } from '../../../../../../core/validations/textInput'
import DefaultField from '../shared/DefaultField'

type Props = TextFieldProps & {
  instance: ReactFullAutoFormInstance
  state: FieldState
  onChangeFormState: HandleChangeFormStateFunction
}

export default function TextField(props: Props): ReactElement {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const errorMessage = validateTextInput(
      props.instance,
      props,
      e.target.value
    )
    props.onChangeFormState(
      props.name,
      (prevState: FormState): FieldState => ({
        value: errorMessage ? prevState[props.name].value : e.target.value,
        error: errorMessage,
        isBlurred: false
      })
    )
  }

  const handleEnableIsBlurred = () => {
    if (props.state.isBlurred) return
    props.onChangeFormState(props.name, (prevState) => ({
      ...prevState[props.name],
      isBlurred: true
    }))
  }

  if (props.component) {
    return <props.component {...props} />
  }
  return (
    <DefaultField {...props}>
      <input
        type={props.type}
        onChange={handleChange}
        onBlur={handleEnableIsBlurred}
      />
    </DefaultField>
  )
}
