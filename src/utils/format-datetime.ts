import {
  format,
  formatDistanceToNow as dateFnsFormatDistanceToNow,
} from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDatetime(rowDate: string) {
  const date = new Date(rowDate)
  return format(date, "dd/MM/yyyy 'ás' HH'h'mm", {
    locale: ptBR,
  })
}

export function formatDistanceToNow(rowDate: string) {
  const date = new Date(rowDate)
  return dateFnsFormatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  })
}
