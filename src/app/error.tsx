'use client'

import ErrorMessage from '@/components/ErrorMessage'
import { useEffect } from 'react'

type RootErrorPageProps = {
  error: Error
}

export default function RootErrorPage({ error }: Readonly<RootErrorPageProps>) {
  useEffect(() => {
    console.log(error)
  }, [error])

  return (
    <ErrorMessage
      content='É constrangedor mas não coseguimos tratar esse erro '
      contentTtile='500 🫣'
      pageTitle='Internal Server Error'
    />
  )
}
