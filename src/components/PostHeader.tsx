import Avatar from './Avatar'
import Date from './Date'
import CoverImage from './CoverImage'
import PostTitle from './PostTitle'
import Categories from './Categories'

export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="md:mb-4 sm:mx-0">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto flex items-center gap-10">
        <div className="block mb-6">
          <Avatar author={author} />
        </div>
        <div className="text-sm flex flex-col mt-auto mb-6">
          <Date dateString={date} />
          <Categories categories={categories} />
        </div>
      </div>
    </>
  )
}
