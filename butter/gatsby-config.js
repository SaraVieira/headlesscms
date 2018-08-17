module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: ['gatsby-plugin-react-helmet', 
  {
      resolve: 'gatsby-source-buttercms',
      options: {
        authToken: '3ba2ca5c8fc24d385164d54b50ef827ea3a7862c'
      }
    }],
}

