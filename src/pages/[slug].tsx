import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head';
import React from 'react'
import Container from '../components/Container';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PostBody from '../components/PostBody';
import { getAllPagesWithSlug, getPageBySlug } from '../lib/api'

type Props = {
  preview: boolean;
  page: ContentType;
  allPages: PagesBaseType;
  pagesData: {page: PagesType, pages: {edges: PagesType[]}};
}

const Page = ({preview, page, allPages: {edges: pages}, pagesData}: Props) => {
  return (
    <Container>
        <Head><title>{page?.title}</title></Head>
        <Header pages={pagesData?.pages.edges} />
        {page && (
          <div className="flex flex-col items-center">
            <h3>{page.title}</h3>
            <PostBody content={page.content} />
          </div>
        )}
        <Footer pages={pages} />
    </Container>
  )
}

export default Page;

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
  previewData,
}) => {
  const pageData = await getPageBySlug(params?.slug, preview, previewData)
  const allPages = await getAllPagesWithSlug()

  return {
    props: {
      preview,
      page: pageData.page,
      pagesData: pageData,
      allPages
    },
    revalidate: 10,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPages = await getAllPagesWithSlug()

  return {
    paths: allPages.edges.map(({ node }) => `/${node.slug}`) || [],
    fallback: true,
  }
}
