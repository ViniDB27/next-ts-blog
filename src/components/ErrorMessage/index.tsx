'use client'

import clsx from 'clsx'

type ErrorMessageProps = {
  pageTitle: string
  contentTtile: string
  content: React.ReactNode
}

export default function ErrorMessage({
  content,
  contentTtile,
  pageTitle,
}: Readonly<ErrorMessageProps>) {
  return (
    <>
      <title>{pageTitle}</title>
      <div
        className={clsx(
          'min-h-[320px] bg-slate-900 text-slate-100',
          'mb-16 p-8 rounded-xl',
          'flex items-center justify-center',
          'text-center',
        )}
      >
        <div>
          <h1 className='text-7xl/tight mb-4 font-extrabold'>{contentTtile}</h1>
          <div>{content} </div>
        </div>
      </div>
    </>
  )
}
