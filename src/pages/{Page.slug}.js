import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
// import { Container, Box, Heading } from "../components/ui"
import  { heading, body } from "./page.module.css"

export default function Page(props) {
  const { page } = props.data
//  console.log(page, 'this page')
  return (
    <Layout {...page}>
      <div>
        <div>
          <h1 className={heading}> {page.title}</h1>
          <div 
            className={body}
            dangerouslySetInnerHTML={{
              __html: page.html,
            }}
          />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PageContent($id: String!) {
    page(id: { eq: $id }) {
      id
      title
      slug
      description
      image {
        id
        url
      }
      html
    }
  }
`
