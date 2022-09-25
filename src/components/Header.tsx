import Image from 'next/image'
import Link from 'next/link'
import useMediaQuery from '../hooks/UseMediaQuery'

type Props = {
  pages: PagesWithSlug[]
}

export default function Header({pages}: Props) {
  const isPageWide = useMediaQuery('(min-width: 768px)')

  return (
    <div className="flex justify-between py-1 md:py-0 sticky top-0 left-0 z-50 bg-accent-1 mb-4 md:mb-8">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/">
          <a className="hover:text-accent-2 flex">
            <Image src={isPageWide ? '/images/logo&name.png' : '/images/logo.png'} width={isPageWide ? 180 : 48} height={isPageWide ? 80 : 48} objectFit={'contain'} />
          </a>
        </Link>
      </h2>
      <div className="flex justify-center items-center gap-2">
        {pages?.map((page, i) => (
          <Link key={i} href={page.node.slug}>
            <a className='hover:text-accent-2 transition-colors'>
              {page.node.title}
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}
