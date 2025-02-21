const path = require('path')

/**
 * Generate custom schema for MdxFrontmatter.
 * Without this schema we get an build error due to the
 * fact that all fields in MdxFrontmatter are mandatory.
 */
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type MdxFrontmatter implements Node {
      slug: String
      date: String
      author: String
      spoiler: String
      title: String
    }
  `)
}

/**
 * Generate blog post pages
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
            title
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('Error at loading "createPages" query', result.errors)
    return
  }

  const posts = result?.data?.allMdx?.nodes
  if (!posts || posts.length === 0) {
    reporter.warn(`No blog posts found`)
    return
  }

  posts.forEach((node, index) => {
    if (!node?.frontmatter?.slug) {
      reporter.warn(`Skipping post with missing slug: ${node.id}`)
      return
    }

    let previous = index > 0 ? posts[index - 1] : null
    let next = index < posts.length - 1 ? posts[index + 1] : null

    reporter.info(`Creating page at path: ${node.frontmatter.slug}`)

    createPage({
      path: node.frontmatter.slug,
      component: `${path.resolve('./src/pages/blogPost.tsx')}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id, previous, next },
    })
  })
}

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  if (getConfig().mode === 'production') {
    actions.setWebpackConfig({
      devtool: false,
    })
  }
}
