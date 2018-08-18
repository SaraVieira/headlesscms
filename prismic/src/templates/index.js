import React, { Fragment } from 'react'
import Header from '../components/header'
import Helmet from 'react-helmet'
import 'tacit-css/dist/tacit-css-1.3.2.min.css'

export default ({ pathContext, data: { allSitePage }, location }) => (
  <Fragment>
    <Helmet
      title={'Gatsby Test'}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>

    <div>
      <Header pages={allSitePage.edges} location={location} />
      <article>
        <div dangerouslySetInnerHTML={{ __html: pathContext.content }} />
      </article>
    </div>
  </Fragment>
)

export const query = graphql`
  {
    allSitePage {
      edges {
        node {
          path
          context {
            lang
            title
          }
        }
      }
    }
  }
`
