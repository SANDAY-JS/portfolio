import Container from './Container'
import { SITE_TITLE } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-8 flex flex-col items-center gap-4 w-full">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center">
            {SITE_TITLE}
          </h3>
          <div className="mt-10">
            &copy; 2022 {SITE_TITLE}
          </div>
        </div>
      </Container>
    </footer>
  )
}
