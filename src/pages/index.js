import { Link, graphql } from "gatsby"
import React from "react"

export default function Home({ data }) {
  const { author } = data.site.siteMetadata
  return (
    <div>
      Hello world!
      <Link to="/list">to list</Link>
      <footer>{author}</footer>
    </div>
  )
}

export const query2 = graphql`
  query siteQuery {
    site {
      siteMetadata {
        author
        description
        title
      }
    }
  }
`
