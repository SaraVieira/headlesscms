import React from 'react'
import { Link, graphql } from 'gatsby'
import ReactMarkdown from 'react-markdown'

import Layout from '../components/layout'

const IndexPage = ({
  data: {
    contentfulPage: { content },
  },
}) => (
  <Layout>
    <ReactMarkdown source={content.content} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    contentfulPage(title: { eq: "About" }) {
      id
      title
      content {
        id
        content
      }
    }
  }
`
