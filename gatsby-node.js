const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(({ node }) => {
    const { slug } = node.frontmatter

    createPage({
      path: `/blog/${slug}`,
      component: path.resolve("./src/templates/post.js"),
      context: { slug },
    })
  })
}