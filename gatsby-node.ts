import path from 'node:path'

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
      image: String
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

  const allPosts = result?.data?.allMdx?.nodes
  if (!allPosts || allPosts.length === 0) {
    reporter.warn(`No blog posts found`)
    return
  }

  const posts = allPosts.filter(
    node => !node?.frontmatter?.slug?.startsWith('/blog/demo')
  )

  posts.forEach((node, index) => {
    if (!node?.frontmatter?.slug) {
      reporter.warn(`Skipping post with missing slug: ${node.id}`)
      return
    }

    const previous = index > 0 ? posts[index - 1] : null
    const next = index < posts.length - 1 ? posts[index + 1] : null

    reporter.info(`Creating page at path: ${node.frontmatter.slug}`)

    createPage({
      path: node.frontmatter.slug,
      component: `${path.resolve('./src/pages/blogPost.tsx')}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id, previous, next },
    })
  })
}

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const config = getConfig()

  if (config.mode === 'production') {
    actions.setWebpackConfig({
      devtool: false,
    })
  }

  // Gatsby 5 injects eslint-webpack-plugin with ESLint 8 options
  // (extensions/useEslintrc/rulePaths) that were removed in ESLint 9.
  // Strip it and rely on the standalone `npm run lint` (flat config) instead.
  config.plugins = config.plugins.filter(
    plugin => plugin?.constructor?.name !== 'ESLintWebpackPlugin'
  )
  actions.replaceWebpackConfig(config)
}
