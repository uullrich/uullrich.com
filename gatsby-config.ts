import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Uwe Ullrich`,
    siteUrl: `https://uullrich.com`,
    author: `Uwe Ullrich`,
    description: `Freelance software developer - Node.js, React, C++, Qt, ABAP, ABAP OO`,
    keywords: `softwareentwicklung, freelance, freiberuflich, nodejs, react, c++, qt, abap, abap oo`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-plugin-styled-components", {
    resolve: `gatsby-plugin-typography`,
    options: {
      pathToConfigModule: `src/typography/typography.ts`,
    },
  },
  {
    resolve: `gatsby-plugin-gdpr-cookies`,
    options: {
      googleAnalytics: {
        trackingId: '', // leave empty if you want to disable the tracker
        cookieName: 'gatsby-gdpr-google-analytics', // default
        anonymize: true, // default
        allowAdFeatures: false // default
      },
      // defines the environments where the tracking should be available  - default is ["production"]
      environments: ['production', 'development']
    },
  },
  "gatsby-plugin-image", "gatsby-plugin-react-helmet", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};

export default config;
