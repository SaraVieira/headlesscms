const path = require('path')

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  const pages = await graphql(`
    {
      allPrismicHome {
        edges {
          node {
            id
            last_publication_date
            lang
            slugs
            data {
              title {
                text
              }
              content {
                html
              }
            }
          }
        }
      }
    }
  `)

  const component = path.resolve('src/templates/index.js')

  pages.data.allPrismicHome.edges.forEach(({ node }) => {
    console.log(node)
    if (node.slugs[0] === 'home') node.slugs = ['']
    createPage({
      path:
        node.lang === 'en-us'
          ? `/${node.slugs[0].toLowerCase()}`
          : `/${node.lang}/${node.slugs}`,
      component,
      context: {
        content: node.data.content.html,
        title: node.data.title.text,
        lang: node.lang,
      },
    })
  })
}
