import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import { Seo } from "../components/seo"
import {
  container,
  intro,
  callOut,
  callToAction,
  deployButton,
} from "./index.module.css"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "frontpage" }) {
      products {
        ...ProductCard
      }
    }
    homepage {
    title
    description
    image {
      alt
      id
      url
    }
  }
  }
`
function Hero ({props}) {
  console.log('props', props, typeof props, props?.title)
  return (
    <div className={container}>
      <h1 className={intro}>{props.title}</h1>
    </div>
  )
}

export default function IndexPage({ data }) {
  console.log(data)
  return (
    <Layout>
      <Hero props={data.homepage}/>
      <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', alignSelf: 'center'}} >
      <img src={data.homepage.image.url} />
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center', alignSelf: 'center', padding: '0px 400px', marginTop: '50px'}} >
      <p>
        {data.homepage.description}
      </p>
      </div>

      
      <ProductListing products={data?.shopifyCollection?.products} />
    </Layout>
  )
}

export const Head = () => <Seo />
