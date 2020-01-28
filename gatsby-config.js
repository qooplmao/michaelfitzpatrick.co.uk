module.exports = {
  siteMetadata: {
    title: `Michael Fitzpatrick`,
    description: `michael, fitzpatrick, michaelfitzpatrick, cv, full stack developer, php, react, javascript`,
    author: `@qooplmao`,
  },
  plugins: [
    `gatsby-plugin-sass`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Michael Fitzpatrick`,
        short_name: `Michael Fitzpatrick`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#ccc`,
        display: `standalone`,
        icons:[{
          src: `/icons/android-chrome-192x192.png`,
          sizes: `192x192`,
          type: `image/png`
        },{
          src: `/icons/android-chrome-512x512.png`,
          sizes: `512x512`,
          type: `image/png`
        }]
      },
    },
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
