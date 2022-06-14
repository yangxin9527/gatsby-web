const path = require("path")
exports.createPages = async function ({ actions, graphql }) {
  const persons = [
    {
      slug: "1",
      name: "xx",
      age: 36,
    },
    {
      slug: "2",
      name: "xx33",
      age: 22,
    },
  ]
  persons.forEach(person => {
    console.log(person.slug)
    actions.createPage({
      path: `/person/${person.slug}`,
      component: require.resolve("./src/templates/person.js"),
      context: person,
    })
  })

  const { data } = await graphql(`
    query MarkdownSulgQuery {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(mdItem => {
    actions.createPage({
      path: `/md/${mdItem.fields.slug}`,
      component: require.resolve("./src/templates/markdown.js"),
      context: {
        slug: mdItem.fields.slug,
      },
    })
  })
}

exports.onCreateNode = async function ({ node, actions }) {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    // console.log("====")
    // console.log(node.fileAbsolutePath)
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
