import { NotifierFunction } from './notifier'
export const AlertNotifier: NotifierFunction<any> = ({ title }) => {
  alert(title)
}
