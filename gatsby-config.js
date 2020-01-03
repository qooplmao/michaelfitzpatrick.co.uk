module.exports = {
  siteMetadata: {
    title: 'michaelfitzpatrick',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
