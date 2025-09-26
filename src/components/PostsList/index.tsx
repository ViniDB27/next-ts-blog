import { findAllPublicPostsCached } from '@/lib/post/queries'
import { PostCoverImage } from '../PostCoverImage'
import { PostSummary } from '../PostSummary'

export async function PostsList() {
  const posts = await findAllPublicPostsCached()
  return (
    <div className='grid grid-cols-1 mb-16 gap-8 sm:grid-cols-2 md:grid-cols-3'>
      {posts.slice(1).map(post => (
        <div key={post.id} className='flex flex-col gap-4 group'>
          <PostCoverImage
            linkProps={{ href: `/post/${post.slug}` }}
            imageProps={{
              src: post.coverImageUrl,
              height: 720,
              width: 1200,
              priority: true,
              alt: post.title,
            }}
          />
          <PostSummary
            postLink={`/post/${post.slug}`}
            postHeading='h2'
            createdAt={post.createdAt}
            excerpt={post.excerpt}
            title={post.title}
          />
        </div>
      ))}
    </div>
  )
}
