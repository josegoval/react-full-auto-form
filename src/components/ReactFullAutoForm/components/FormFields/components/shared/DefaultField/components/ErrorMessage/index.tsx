import React, { ReactElement } from 'react'

type ErrorMessageProps = {
  error: string
  isBlurred: boolean
}

export default function ErrorMessage({
  error,
  isBlurred
}: ErrorMessageProps): ReactElement {
  return error && isBlurred ? <p style={{ color: 'red' }}>{error}</p> : <></>
}
