/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Header from '../components/header'

import Footer from '../components/footer'
import Mdx from '../components/mdx'

import { StyledThemeProvider } from '../styles/themeManager'

import '../styles/layout.css'
import '../styles/prism-github.css'
import '../styles/fonts.css'

const Layout = ({ path, children, nofooter }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          siteUrl
        }
      }
    }
  `)

  return (
    <StyledThemeProvider>
      <Header path={path} siteTitle={data.site.siteMetadata.title} />
      <Mdx>{children}</Mdx>
      {nofooter ? null : <Footer />}
    </StyledThemeProvider>
  )
}

export default Layout
