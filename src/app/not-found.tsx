import ErrorMessage from '@/components/ErrorMessage'

export default function NotFoundPage() {
  return (
    <ErrorMessage
      content='Erro 404 - A página que você está tentando acessar não existe neste site.'
      contentTtile='404 😅'
      pageTitle='Página não encontrada'
    />
  )
}
