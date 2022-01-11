import { access } from 'fs'
import { useState } from 'react'
import { Fields } from '../../../core/types/propTypes/fields'
import { InputType } from '../../../core/types/propTypes/input'

const getTypeDefaultValue = (type: InputType) => {
  if (type === 'text' || type === 'password') {
    return ''
  }
  return null
}

const parseFieldsIntoFormState = (fields: Fields) =>
  fields.reduce(
    (acc, { name, type }) => ({ ...acc, [name]: getTypeDefaultValue(type) }),
    {}
  )

const useReactFullAutoForm = ({ fields }) => {
  const [formState, setFormState] = useState(parseFieldsIntoFormState(fields))
}

export default useReactFullAutoForm
