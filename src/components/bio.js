/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
            extendedSummary
          }
          social {
            twitter
            linkedin
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <pre>
          <pre>
            Hi, I'm <strong>{author.name}</strong>.
          </pre>
          <br />
          <pre>{author?.summary || null}</pre>
          <br />
          <pre
            dangerouslySetInnerHTML={{ __html: author?.extendedSummary }}
          ></pre>
          <br />
          <pre>
            You can find me on{" "}
            <a
              href={`https://x.com/${social?.twitter || ``}`}
              target="_blank"
              rel="noreferrer"
            >
              X (formerly Twitter)
            </a>
            ,{" "}
            <a
              href={`https://linkedin.com/in/${social?.linkedin || ``}`}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            , and{" "}
            <a
              href={`https://github.com/${social?.github || ``}`}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            .
          </pre>
        </pre>
      )}
    </div>
  )
}

export default Bio
