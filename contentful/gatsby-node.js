const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    const component = path.resolve('src/templates/index.js')
    resolve(
      graphql(`
        {
          allContentfulPage {
            edges {
              node {
                node_locale
                title
                slug
                content {
                  content
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        const pages = result.data.allContentfulPage.edges
        pages.forEach(({ node }) => {
          createPage({
            path:
              node.node_locale === 'en-US'
                ? node.slug
                : `/${node.node_locale}${node.slug}`,
            component,
            context: {
              content: node.content.content,
              title: node.title,
              lang: node.node_locale,
            },
          })
        })
        return
      })
    )
  })
}
