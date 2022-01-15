import {
  CommonFieldValidations,
  Pattern,
  Validation
} from '../types/propTypes/fields'

function validatePatterns(pattern: Pattern, nextValue: string): string {
  if (!Array.isArray(pattern))
    return !pattern.regex.test(nextValue) ? pattern.errorMessage : ''

  return pattern.find(({ regex }) => !regex.test(nextValue))?.errorMessage || ''
}

function validateValidations(
  validation: Validation,
  nextValue: string
): string {
  if (!Array.isArray(validation)) return validation(nextValue) || ''

  let errorMessage
  for (const _validation of validation) {
    errorMessage = _validation(nextValue)
    if (errorMessage) return errorMessage
  }
  return ''
}

export function validateCommonFieldValidations(
  { pattern, validate }: CommonFieldValidations,
  nextValue: string
): string {
  if (pattern) {
    const errorMessage = validatePatterns(pattern, nextValue)
    if (errorMessage) return errorMessage
  }
  return validate ? validateValidations(validate, nextValue) : ''
}
