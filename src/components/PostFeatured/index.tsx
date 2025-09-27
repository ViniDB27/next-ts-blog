import clsx from 'clsx'
import { PostCoverImage } from '../PostCoverImage'
import { PostSummary } from '../PostSummary'
import { findAllPublicPostsCached } from '@/lib/post/queries/public'
import ErrorMessage from '../ErrorMessage'

export async function PostFeatured() {
  const posts = await findAllPublicPostsCached()

  if (posts.length <= 0)
    return (
      <ErrorMessage
        contentTtile='Sem posts 😅'
        content='Nossos admins estão trabalhando para publicar algo interessante volte daqui a pouco 🏃🏻‍♂️'
      />
    )

  const post = posts[0]
  const postLink = `/post/${post.slug}`
  return (
    <section
      className={clsx(
        'grid',
        'grid-cols-1',
        'gap-8',
        'mb-16',
        'sm:grid-cols-2 ',
        'group',
      )}
    >
      <PostCoverImage
        linkProps={{ href: postLink }}
        imageProps={{
          src: post.coverImageUrl,
          height: 720,
          width: 1200,
          priority: true,
          alt: 'Titulo do post',
        }}
      />
      <PostSummary
        postLink={postLink}
        postHeading='h1'
        createdAt={post.createdAt}
        excerpt={post.excerpt}
        title={post.title}
      />
    </section>
  )
}
