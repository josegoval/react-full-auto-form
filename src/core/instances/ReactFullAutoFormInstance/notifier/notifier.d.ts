type NotifierType = 'success' | 'error' | 'warning'
type NotifierTitle = 'string'
type NotifierDescription = 'string'
type NotifierConfigurations<T> = T

type NotifierFunctionParams<T> = {
  type: NotifierType
  title: NotifierTitle
  description?: NotifierDescription
  configurations?: NotifierConfigurations<T>
}

export type NotifierFunction<T> = ({
  type,
  title,
  description,
  configurations
}: NotifierFunctionParams<T>) => void
