'use client'

import { deletePostAction } from '@/actions/post/delete-post-action'
import { Dialog } from '@/components/Dialog'
import clsx from 'clsx'
import { Trash2Icon } from 'lucide-react'
import { useState, useTransition } from 'react'
import { toast } from 'react-toastify'

type DeletePostButtonProps = {
  id: string
  title: string
}

export function DeletePostButton({
  title,
  id,
}: Readonly<DeletePostButtonProps>) {
  const [isPending, startTransition] = useTransition()
  const [showDialog, setShowDialog] = useState(false)

  async function handleButton() {
    toast.dismiss()
    setShowDialog(true)
    if (!showDialog) return
    startTransition(async () => {
      const result = await deletePostAction(id)
      setShowDialog(false)

      if (result.error) {
        toast.error(result.error)
      }

      toast.success('Post apagado com sucesso!')
    })
  }

  return (
    <>
      <button
        className={clsx(
          'text-red-500 cursor-pointer transition',
          '[&_svg]:w-4 [&_svg]:h-4',
          'hover:scale-120 hover:text-red-700',
          'disabled:text-slate-600 disabled:cursor-not-allowed',
        )}
        aria-label={`Botão para apagar 0 post ${title}`}
        title={`Botão para apagar 0 post ${title}`}
        onClick={handleButton}
        disabled={isPending}
      >
        <Trash2Icon />
      </button>
      <Dialog
        disabled={isPending}
        isVisible={showDialog}
        title='Apagar post'
        onCancel={() => setShowDialog(false)}
        onConfirm={handleButton}
        content={`tem certeza que deseja apagar o post ${title} \nessa ação não poderá ser desfeita mais tarde.`}
      />
    </>
  )
}
