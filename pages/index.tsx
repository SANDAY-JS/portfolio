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
  const heroPost = posts[0]?.node
  const morePosts = posts.slice(1)

  return (
    <Layout preview={preview}>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>
      <Container>
        <Header pages={pages} />
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
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
