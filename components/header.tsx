import Image from 'next/image'
import Link from 'next/link'

type Props = {
  pages: PagesWithSlug[]
}

export default function Header({pages}: Props) {
  return (
    <div className="flex justify-between py-2 px-2 md:px-0">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/">
          <a className="hover:underline">
            <Image src={'/images/logo.png'} width={60} height={60} objectFit={'contain'} />
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
