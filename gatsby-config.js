/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: `Nerd's Notebook`,
    author: {
      name: `Rohan`,
      summary: `By day, I'm a professional problem solver, tackling the intricacies of Software Engineering.
When the sun settles, I transform into a part-time meme enthusiast, finding humor in life's quirks and curiosities.`,
      extendedSummary: `I work as a full-stack developer at <a href="https://dyte.io" target="_blank" rel="noreferrer">Dyte</a>, a YC W'21 funded, Bangalore-based startup. I also freelance on <a href="https://www.upwork.com/freelancers/~01a03245e7615b2e2a" target="_blank" rel="noreferrer">Upwork</a>.
Here are some articles I've written in the past on <a href="https://medium.com/@roerohan" target="_blank" rel="noreferrer">Medium</a>, <a href="https://dev.to/roerohan" target="_blank" rel="noreferrer">dev.to</a>, and <a href="https://dyte.io/blog/author/roerohan/" target="_blank" rel="noreferrer">Dyte's blog</a>.`,
    },
    description: `Explore the intersection of technology and life through the lens of a passionate tech enthusiast and digital explorer.`,
    siteUrl: `https://blog-roerohan.netlify.app/`,
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
            title: "Gatsby Starter Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nerd's Notebook`,
        short_name: `Nerd's Notebook`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
