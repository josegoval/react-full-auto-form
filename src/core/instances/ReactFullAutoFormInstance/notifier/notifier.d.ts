type NotifierType = 'success' | 'error' | 'warning'
type NotifierConfigurations<T> = T

export type NotifierFunctionParams<T> = {
  type?: NotifierType
  title: string
  description?: string
  configurations?: NotifierConfigurations<T>
}

export type NotifierFunction<T> = ({
  type,
  title,
  description,
  configurations
}: NotifierFunctionParams<T>) => void
