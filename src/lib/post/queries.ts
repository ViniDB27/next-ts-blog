import { postRepository } from '@/repositories/post'
import { notFound } from 'next/navigation'
import { cache } from 'react'

export const findAllPublicPostsCached = cache(async () => {
  return postRepository.findAllPublic()
})

export const findPostByIdCached = cache(async (id: string) => {
  return postRepository.findById(id)
})

export const findPostBySlugCached = cache(async (slug: string) => {
  const post = await postRepository.findBySlug(slug).catch(() => undefined)
  if (!post) notFound()
  return post
})
