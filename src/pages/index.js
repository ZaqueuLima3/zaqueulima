import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PostItem
      key="How to create a blog"
      slug="How to create a blog"
      background="#C44EB8"
      category="blog"
      date="05-12-2019"
      timeToRead={`2 min de leitura`}
      title="Cri um blog eficiente"
      description="In march of 2017 i was about to create my first website but this is to easy how i thought, so i started my sutudy about that"
    />
  </Layout>
)

export default IndexPage
