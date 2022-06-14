import React from "react"
import { graphql } from "gatsby"

const MarkDown = ({ pageContext, data }) => {
  console.log(pageContext, data)
  const { markdownRemark: mdItem } = data
  // const { name, age } = pageContext
  return (
    <div>
      <div>
        <h2>
          {mdItem.frontmatter.title} | {mdItem.frontmatter.date}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: mdItem.html }}></div>
      </div>
    </div>
  )
}

export default MarkDown
export const query = graphql`
  query ($slug: String = "") {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fileAbsolutePath
      id
      frontmatter {
        title
        tag
        date
      }
    }
  }
`
