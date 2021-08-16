module.exports = {
  siteMetadata: {
    siteUrl: "https://poemsbym.com",
    title: "Poems by M",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    /* {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "",
      }, 
    },*/
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
