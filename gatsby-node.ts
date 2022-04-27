const path = require("path");

/**
 * Generate blog post pages
 */
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: ASC }) {
        edges {
          node {
            id
            frontmatter {
              slug,
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('Error at loading "createPages" query');
  }

  const posts = result.data.allMdx.edges;

  posts.forEach(({ node }, index) => {
    let previous = null;
    let next = null;
    if (index === posts.length - 1) {
      previous = posts[index - 1].node;
    } else if (index === 0) {
      next = posts[index + 1].node;
    } else {
      next = posts[index + 1].node;
      previous = posts[index - 1].node;
    }

    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/pages/blogPost.tsx`),
      context: { id: node.id, previous, next },
    });
  })
}

/**
 * No SourceMaps in production
 **/
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  if (getConfig().mode === 'production') {
    actions.setWebpackConfig({
      devtool: false
    });
  }
};