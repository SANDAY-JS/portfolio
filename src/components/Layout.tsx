import Footer from './Footer'
import Meta from './Meta'

export default function Layout({ preview, pages, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      <Footer pages={pages} />
    </>
  )
}
