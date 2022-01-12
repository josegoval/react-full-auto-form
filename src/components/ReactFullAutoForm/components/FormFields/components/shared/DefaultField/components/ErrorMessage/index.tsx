import React, { ReactElement } from 'react'
import { Falsy } from '../../../../../../../../../core/types/shared/common'

type ErrorMessageProps = {
  error: string | Falsy // TODO error type
  isBlurred: boolean | Falsy // TODO blur type
}

export default function ErrorMessage({
  error,
  isBlurred
}: ErrorMessageProps): ReactElement {
  return error && isBlurred ? (
    <p style={{ color: 'red' }}>{error}</p>
  ) : (
    <React.Fragment />
  )
}
