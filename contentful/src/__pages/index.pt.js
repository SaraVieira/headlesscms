import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import ReactMarkdown from 'react-markdown'

import Layout from '../components/layout'

const IndexPage = ({
  location,
  data: {
    contentfulPage: { content },
  },
}) => (
  <Layout>
    <Link to={`${location.pathname}/about`}>About</Link>
    {console.log(location)}
    <ReactMarkdown source={content.content} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    contentfulPage(title: { eq: "Home" }, node_locale: { eq: "pt" }) {
      id
      title
      content {
        id
        content
      }
    }
  }
`
