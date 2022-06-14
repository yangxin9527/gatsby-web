import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
const List = ({ data }) => {
  let arr = []
  try {
    arr = data.allProductsJson.nodes
  } catch (e) {}
  console.log(arr)
  return (
    <div>
      list
      <Link to="/">tohome</Link>
      <ul>
        {arr.map(item => (
          <li key={item.jsonId}>
            {item.title} :{item.price}
            <div style={{ width: "100px" }}>
              {/* <Img fluid={item.url.childImageSharp.fluid} /> */}
              <Img fixed={item.url.childImageSharp.fixed} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
// export const query = graphql`
//   query ListQuery {
//     allProductsJson {
//       nodes {
//         address
//         jsonId
//         price
//         title
//         url {
//           childImageSharp {
//             fluid {
//               src
//               sizes
//               srcSet
//               aspectRatio
//             }
//           }
//         }
//       }
//     }
//   }
// `

export const query = graphql`
  query MyQuery {
    allProductsJson {
      nodes {
        title
        price
        url {
          childImageSharp {
            fixed(width: 100, height: 100) {
              height
              width
              src
              srcSet
            }
          }
        }
      }
    }
  }
`
