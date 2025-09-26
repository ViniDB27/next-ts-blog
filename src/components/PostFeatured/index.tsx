import clsx from 'clsx'
import { PostCoverImage } from '../PostCoverImage'
import { PostSummary } from '../PostSummary'
import { findAllPublicPosts } from '@/lib/post/queries'

export async function PostFeatured() {
  const posts = await findAllPublicPosts()
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
