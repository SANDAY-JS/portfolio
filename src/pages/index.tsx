import Head from 'next/head'
import { GetStaticProps } from 'next'
import Container from '../components/Container'
import MoreStories from '../components/MoreStories'
import HeroPost from '../components/HeroPost'
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
