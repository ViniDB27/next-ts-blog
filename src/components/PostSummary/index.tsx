import { formatDatetime, formatDistanceToNow } from '@/utils/format-datetime'
import { PostHeading } from '../PostHeading'

type PostSummaryProps = {
  postHeading: 'h1' | 'h2'
  postLink: string
  createdAt: string
  title: string
  excerpt: string
}

export function PostSummary({
  postHeading,
  postLink,
  createdAt,
  excerpt,
  title,
}: Readonly<PostSummaryProps>) {
  return (
    <div className='flex flex-col gap-4 sm:justify-center'>
      <time
        className='text-slate-600 block text-sm/tight'
        dateTime={formatDistanceToNow(createdAt)}
      >
        {formatDatetime(createdAt)}
      </time>
      <PostHeading url={postLink} as={postHeading}>
        {title}
      </PostHeading>
      <p>{excerpt}</p>
    </div>
  )
}
