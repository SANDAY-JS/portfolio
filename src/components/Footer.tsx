import Container from './Container'
import { SITE_TITLE } from '../lib/constants'
import Link from 'next/link';

type Props = {
  pages: PagesWithSlug[];
}

export default function Footer({pages}: Props) {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-8 flex flex-col items-center gap-4 w-full">
          <div className="flex flex-col w-full">
            <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center">
              {SITE_TITLE}
            </h3>
            <div className="flex flex-wrap gap-3">
              {pages?.map((page, i) => (
                <Link key={i} href={page.node.slug}>
                  <a className='hover:text-accent-2 transition-colors'>
                    {page.node.title}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-10">
            &copy; 2022 {SITE_TITLE}
          </div>
        </div>
      </Container>
    </footer>
  )
}
