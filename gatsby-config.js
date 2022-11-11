module.exports = {
  siteMetadata: {
    title: `Michelle Procópio`,
    author: `Michelle Procópio`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `descrição do site`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
      implementation: require("sass"),
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
};
