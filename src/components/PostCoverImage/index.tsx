import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

type PostCoverImageProps = {
  imageProps: React.ComponentProps<typeof Image>
  linkProps: React.ComponentProps<typeof Link>
}

export function PostCoverImage({
  imageProps,
  linkProps,
}: Readonly<PostCoverImageProps>) {
  return (
    <Link
      {...linkProps}
      className={clsx(
        'w-full',
        'h-full',
        'overflow-hidden',
        'rounded-xl',
        linkProps.className,
      )}
    >
      <Image
        {...imageProps}
        className={clsx(
          'w-full',
          'h-full',
          'group-hover:scale-105',
          'transition',
          'object-cover',
          'object-center',
          imageProps.className,
        )}
        alt={imageProps.alt}
      />
    </Link>
  )
}

// height={720}
//     width={1200}
//     alt='Titulo do post'
//     priority
