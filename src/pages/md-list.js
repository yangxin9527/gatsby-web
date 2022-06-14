import React from "react"
import { graphql, Link } from "gatsby"

const MarkDown = ({ data }) => {
  console.log(data)
  const nodes = data.allMarkdownRemark.nodes
  return (
    <div>
      {nodes.map(node => {
        return (
          <div key={node.id}>
            <Link to={`/md/${node.fields.slug}`}>
              {node.frontmatter.title} | {node.frontmatter.date}
            </Link>
          </div>
        )
      })}
    </div>
  )
}
export default MarkDown
export const query = graphql`
  query MarkdownQuery {
    allMarkdownRemark {
      nodes {
        html
        fileAbsolutePath
        id
        fields {
          slug
        }
        frontmatter {
          title
          tag
          date
        }
      }
    }
  }
`
