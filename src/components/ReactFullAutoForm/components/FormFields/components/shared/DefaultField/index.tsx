import React, { ReactElement } from 'react'
import { CommonFieldProps } from '../../../../../../../core/types/propTypes/fields'
import { FieldState } from '../../../../../../../core/types/propTypes/reactFullAutoForm'
import ErrorMessage from './components/ErrorMessage'

type DefaultFieldProps = CommonFieldProps & {
  state: FieldState
  children: JSX.Element
}

export default function DefaultField({
  label,
  children,
  state
}: DefaultFieldProps): ReactElement {
  return (
    <label>
      {label}
      {children}
      <ErrorMessage {...state} />
    </label>
  )
}
