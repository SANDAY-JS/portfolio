import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/Container'
import MoreStories from '../components/MoreStories'
import Intro from '../components/Intro'
import Layout from '../components/Layout'
import { getAllPagesWithSlug, getAllPostsForHome } from '../lib/api'
import { CMS_NAME } from '../lib/constants'
import Header from '../components/Header'

export default function Index({ allPages: {edges: pages}, allPosts: { edges: posts }, preview }) {

  return (
    <Layout preview={preview} pages={pages}>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Container>
        <Header pages={pages} />
        <Intro />
        <div className='mx-auto w-full md:max-w-xl leading-relaxed text-lg flex flex-col gap-2'>
          <p><b>Webサイトは地球温暖化・気候変動に無関係だと思っていませんか？</b></p>
          <p>実は、Webサイトでは、1回の閲覧で平均1.76gの二酸化炭素が放出されるといわれています。あるサイトが月間10万回閲覧されるとするなら、年間2,112kgもの二酸化炭素を排出しているのです。</p>
          <p>私達は、「サステナブルなWebサイト」をモットーに、地球に優しいWebサイトを制作しております。</p>
          <p>&nbsp;</p>
        </div>
        {posts?.length > 0 && <MoreStories posts={posts} />}
      </Container>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPages = await getAllPagesWithSlug()
  const allPosts = await getAllPostsForHome(preview)

  return {
    props: { allPages, allPosts, preview },
    revalidate: 10,
  }
}
