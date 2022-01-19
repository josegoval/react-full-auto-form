import { ChangeEvent } from 'react'
import { Field } from '../types/propTypes/fields'
import { HandleChangeFieldStateValueFunction } from '../types/propTypes/reactFullAutoForm'

export type OnChangeCallbacks = {
  validate: (e: ChangeEvent<HTMLInputElement>) => string
  handleChangeFieldStateValue: (
    e: ChangeEvent<HTMLInputElement>,
    errorMessage: String,
    field: Field
  ) => HandleChangeFieldStateValueFunction
}
