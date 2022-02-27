const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Articles {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/(products)/" } }
      ) {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    actions.createPage({
      path: "/products/" + node.frontmatter.slug,
      component: path.resolve("./src/templates/product-details.js"),
      context: { slug: node.frontmatter.slug },
    })
  })
}
