/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Gatsby Tutorial',
    siteUrl: 'https://gatsbytutorialmain33162.gatsbyjs.io/',
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    // source plugins
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    // transformer plugins
    'gatsby-plugin-mdx',
  ],
}
