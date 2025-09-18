/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

const pathPrefix = process.env.PATH_PREFIX ?? "";

module.exports = {
  pathPrefix,
  siteMetadata: {
    title: `Notebook`,
    author: {
      name: `Rohan`,
      summary: `By day, I'm a professional problem solver, tackling the intricacies of Software Engineering. When the sun settles, I transform into a part-time meme enthusiast, finding humor in life's quirks and curiosities. When I’m not glued to a screen, you’ll probably find me on a football field, hanging off a climbing wall, or plotting my next travel adventure.`,
      extendedSummary: `I am currently an engineer at <a href="https://cloudflare.com" target="_blank" rel="noreferrer">Cloudflare</a>, where I help build a better internet. Before this, I was a founding engineer at <a href="https://dyte.io" target="_blank" rel="noreferrer">Dyte</a>, a YC W’21 startup that later joined Cloudflare. Along the way, I've also freelanced on <a href="https://www.upwork.com/freelancers/~01a03245e7615b2e2a" target="_blank" rel="noreferrer">Upwork</a> and shared my thoughts through articles on <a href="https://medium.com/@roerohan" target="_blank" rel="noreferrer">Medium</a>, <a href="https://dev.to/roerohan" target="_blank" rel="noreferrer">dev.to</a>, and <a href="https://dyte.io/blog/author/roerohan/" target="_blank" rel="noreferrer">Dyte's blog</a>.`,
    },
    description: `Explore the intersection of technology and life through the lens of a passionate tech enthusiast and digital explorer.`,
    siteUrl: `https://roerohan.github.io/blog`,
    social: {
      twitter: `roerohan`,
      linkedin: `roerohan`,
      github: `roerohan`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `{
              allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
                nodes {
                  excerpt
                  html
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                  }
                }
              }
            }`,
            output: "/rss.xml",
            title: "Notebook RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Notebook`,
        short_name: `Notebook`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-22SD716NSF", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: "GTM-NSNFW3NL",
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          // origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
    {
      resolve: `@w2-yamaguchi/gatsby-plugin-google-adsense`,
      options: {
        publisherId: "ca-pub-9534757811774250", // Required
      },
    },
  ],
}
