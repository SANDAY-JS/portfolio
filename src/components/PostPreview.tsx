import Avatar from './Avatar'
import Date from './Date'
import CoverImage from './CoverImage'
import Link from 'next/link'
import Categories from './Categories'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-2">
        {coverImage && (
          <CoverImage title={title} coverImage={coverImage} slug={slug} />
        )}
      </div>
      <h3 className="text-3xl leading-snug">
        <Link href={`/posts/${slug}`}>
          <a
            className="hover:text-accent-2"
            dangerouslySetInnerHTML={{ __html: title }}
          ></a>
        </Link>
      </h3>
      <div className="text-sm mb-4 flex items-center gap-4">
        <div className="hidden md:block">
          <Avatar author={author} />
        </div>
        <Date dateString={date} />
      </div>
      <div
        className="text-lg leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
    </div>
  )
}
