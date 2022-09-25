type PagesWithSlug = {node: {title: string, slug:string}}

type PagesBaseType = {edges: PagesWithSlug[]}

type ContentType = {
    title: string,
    slug: string,
    date: string,
    content: string,
    featuredImage: {
        node: {sourceUrl: string}
    },
    author: {
      node: {
        name: string,
        firstName: string,
        lastName: string,
        avatar: {
          url: string
        }
      }
    }
  }
  
  type PagesType = {
      node: ContentType
  }
  
  type WorkType = {
    featuredImage: {
      node: {
        sourceUrl: string
      }
    },
    title: string,
    id?: string,
    slug: string,
    date?: string
    categories?: string
    content?: string
  }