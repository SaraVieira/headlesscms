import React from 'react'
import { Link, graphql } from 'gatsby'
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
    <ReactMarkdown source={content.content} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    contentfulPage(title: { eq: "Home" }) {
      id
      title
      content {
        id
        content
      }
    }
  }
`
