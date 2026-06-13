import { useStaticQuery, graphql } from 'gatsby'

export type Buzzword = {
  title: string
  githubLink?: string
  explanation: string
}

export type Category = {
  title: string
  buzzwords: Buzzword[]
}

export type BuzzwordCollection = {
  categories: Category[]
}

const useFetchBuzzwordCollection = (): BuzzwordCollection => {
  const data = useStaticQuery(graphql`
    {
      allBuzzwordsJson {
        nodes {
          title
          buzzwords {
            title
            explanation
            githubLink
          }
        }
      }
    }
  `)

  //ToDo: Add validation!

  const content: BuzzwordCollection = {
    categories: data.allBuzzwordsJson.nodes.map((category: Category) => ({
      title: category.title,
      buzzwords: category.buzzwords.map((buzzword: Buzzword) => ({
        title: buzzword.title,
        explanation: buzzword.explanation,
        githubLink: buzzword.githubLink || undefined,
      })),
    })),
  }

  return content
}

export default useFetchBuzzwordCollection
