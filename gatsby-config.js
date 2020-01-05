module.exports = {
  siteMetadata: {
    title: `Michael Fitzpatrick`,
    description: `michael, fitzpatrick, michaelfitzpatrick, cv, full stack developer, php, react, javascript`,
    author: `@qooplmao`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://michaelfitzpatrick.co.uk`,
      },
    },
    `gatsby-plugin-remove-generator`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //     icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    //   },
    // },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-125869489-1',
        head: true,
        anonymize: false,
        respectDNT: true
      },
    },
  ],
};
