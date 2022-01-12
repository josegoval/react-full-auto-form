import React, { ReactElement } from 'react'
import { CommonFieldProps } from '../../../../../../../core/types/propTypes/fields'

type DefaultFieldProps = CommonFieldProps & {
  state: object
  children: JSX.Element
}

export default function DefaultField({
  label,
  children
}: DefaultFieldProps): ReactElement {
  return (
    <label>
      {label}
      {children}
    </label>
  )
}
