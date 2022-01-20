import { useCallback, useMemo, useState } from 'react'
import { ReactFullAutoFormInstance } from '../../../../core/instances/ReactFullAutoFormInstance/ReactFullAutoFormInstance'
import { Fields } from '../../../../core/types/propTypes/fields'
import { InputType } from '../../../../core/types/propTypes/input'
import { FormState } from '../../../../core/types/propTypes/reactFullAutoForm'
import { parseFieldsIntoHandlers } from './handlers'

const getTypeDefaultValue = (type: InputType) => {
  if (type === 'text' || type === 'password') {
    return ''
  }
  return null
}

const parseFieldsIntoFormState = (fields: Fields): FormState =>
  fields.reduce(
    (acc, { name, type }) => ({
      ...acc,
      [name]: { value: getTypeDefaultValue(type), error: '', isBlurred: false }
    }),
    {}
  )

type UseFormStateParams = {
  fields: Fields
  instance: ReactFullAutoFormInstance
}

const useFormState = ({ fields, instance }: UseFormStateParams) => {
  const [formState, setFormState] = useState<FormState>(
    parseFieldsIntoFormState(fields)
  )

  console.log('------> re-render', formState)
  const handlers = useMemo(
    () => parseFieldsIntoHandlers(instance, fields, setFormState),
    [instance, fields, setFormState]
  )

  const resetFormState = useCallback(
    () => setFormState(parseFieldsIntoFormState(fields)),
    [fields, setFormState]
  )
  return { formState, setFormState, resetFormState, handlers }
}

export default useFormState
