import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { useMediaQuery } from '@react-hook/media-query'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Menu from './menu'

import Bao from '../images/bao.inline.svg'
import MenuIcon from '../images/menu.inline.svg'
import CloseIcon from '../images/x.inline.svg'

import { Sun, Moon } from 'react-feather'
import { useDarkMode } from '../contexts/Application'

import useDocumentScrollThrottled from '../utils/useDocumentScrollThrottled'

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem 1.25rem;
  margin-left: auto;
  margin-right: auto;
  z-index: 3;
  position: sticky;
  top: -1px;
  background: ${({ theme, open, showBG }) => (showBG && !open ? theme.backgroundColor : 'none')};
  transition: background-color 0.25s ease;
  @media (max-width: 960px) {
    padding: 1.5rem 2rem;
    height: ${({ open }) => (open ? '100vh' : '100%')};
  }
`

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  z-index: 3;
  position: sticky;
  top: -1px;
  max-width: 1600px;
  background: ${({ theme, open, showBG }) => (showBG && !open ? '#fff8ee' : 'none')};
  transition: background-color 0.25s ease;
  }
`

const StyledNav = styled.nav`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: right 0.25s ease;
  max-width: 1280px;
  @media (max-width: 1160px) {
    position: fixed;
    top: 0px;
    right: ${({ open }) => (open ? '0px' : '-100%')};
    align-items: flex-start;
    flex-wrap: wrap;
    -webkit-overflow-scrolling: touch;
    background-color: ${({ theme }) => theme.cardBG};
    width: 100%;
    height: 100%;
    z-index: 999;
    padding: 2rem;
    overflow: auto;
    box-shadow: ${({ theme }) => theme.shadows.huge};
  }

  > * + * {
    margin-left: 24px;
  }

  @media (max-width: 1160px) {
    > * + * {
      margin-left: 0;
    }
  }
`

const StyledNavTitleWrapper = styled.nav`
  display: flex;
  align-items: center;
`

const HeaderText = styled.h2`
color: ${({ theme }) => theme.textColor};;
font-family: "Reem Kufi", sans-serif;
font-size: 20px;
font-weight: 700;
letter-spacing: 0.03em;
margin-right: 6rem;
`

const StyledTradeLink = styled.a`
  padding: 0.33rem 1rem;
  background-color: ${({ theme }) => theme.buttonBackground};
  text-decoration: none;
  color: ${({ theme }) => theme.buttonText};
  border: ${({ theme }) => theme.buttonBorder};
  border-radius: 6px;
  display: inline-block;
  transition: transform 0.25s ease;
  font-weight: 600;
  font-family: 'Poppins,sans-serif';
  box-shadow: rgb(181 176 174) 1px 1px 2px, rgb(255 252 245 / 50%) -1px -1px 2px;
  transition: transform 0.45s cubic-bezier(0.19, 1, 0.22, 1);

  :hover {
    transform: translate3d(2px, 2px, 10px);
  }

  @media (max-width: 1160px) {
    display: none;
  }
`

const StyledButton = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  color: ${({ theme }) => theme.textColor};
  :focus {
    outline: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }
`

const StyledHomeLink = styled(Link)`
  max-height: 48px;
  display: flex;
  align-items: center;
`

const MenuToggle = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.grey9};
  display: none;
  z-index: 9999;
  width: 24px;
  height: 24px;
  padding: 0px;

  :focus {
    outline: none;
  }
  @media (max-width: 1160px) {
    display: initial;
    position: ${({ open }) => (open ? 'fixed' : 'relative')};
    right: ${({ open }) => (open ? '1.5rem' : 'initial')};
    top: ${({ open }) => (open ? '1.5rem' : 'initial')};
  }
`

const StyledBao = styled(Bao)`
  margin: 0;
  width: 32px;
  height: 32px;
  margin-right: 0.35rem;
  margin-top: -4px;
  transform: rotate(0deg);
  transition: transform 0.2s linear;
  :hover {
    transform: rotate(-10deg);
  }
`

const StyledCloseIcon = styled(CloseIcon)`
  path {
    stroke: ${({ theme }) => theme.textColor};
  }
`

const StyledMenuIcon = styled(MenuIcon)`
  path {
    stroke: ${({ theme }) => theme.textColor};
  }
`

const HideSmall = styled.span`
  @media (max-width: 960px) {
    display: none;
  }
`

const Header = props => {
  const matches = useMediaQuery('only screen and (max-width: 1024px)')
  const node = useRef()
  const button = useRef()
  const [isMenuOpen, updateIsMenuOpen] = useState(false)
  const [headerBG, setHeaderBG] = useState(false)
  const [darkMode, toggleDarkMode] = useDarkMode()

  useDocumentScrollThrottled(callbackData => {
    const { currentScrollTop } = callbackData
    // const isScrolledDown = previousScrollTop < currentScrollTop
    // const isMinimumScrolled = currentScrollTop > MINIMUM_SCROLL

    setHeaderBG(currentScrollTop > 2)

    // setTimeout(() => {
    //   setSidebarBG(isScrolledDown && isMinimumScrolled)
    // }, TIMEOUT_DELAY)
  })

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          menulinks {
            name
            sublinks {
              description
              name
              link
            }
          }
          title
        }
      }
    }
  `)

  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow
    // Prevent scrolling on mount
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.maxHeight = '-webkit-fill-available'
    }
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle)
  }, [isMenuOpen]) // Empty array ensures effect is only run on mount and unmount

  useEffect(() => {
    const handleClickOutside = e => {
      if (node.current.contains(e.target) || button.current.contains(e.target)) {
        return
      }
      updateIsMenuOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen, updateIsMenuOpen, matches])

  return (
    <StyledHeader open={isMenuOpen} showBG={headerBG}>
      <HeaderWrapper>
        <StyledNavTitleWrapper>
          <StyledHomeLink
            to="/"
            style={{
              textDecoration: `none`
            }}
          >
            <StyledBao />
            <HeaderText>Bao.Finance</HeaderText>
          </StyledHomeLink>
        </StyledNavTitleWrapper>
        <MenuToggle ref={button} open={isMenuOpen} onClick={() => updateIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <StyledCloseIcon /> : <StyledMenuIcon />}
        </MenuToggle>
        <StyledNav ref={node} open={isMenuOpen}>
          {data.site.siteMetadata.menulinks.map(item => {
            return <Menu key={item.name} data={item} />
          })}

          {props.path !== undefined && (
            <StyledTradeLink
              target="_blank"
              href="https://bao.finance/"
            >
              Mainnet
            </StyledTradeLink>
          )}
          {props.path !== undefined && (
            <StyledTradeLink
              target="_blank"
              href="https://www.baoswap.xyz/"
            >
              xDai
            </StyledTradeLink>
          )}
          {props.path !== undefined && (
            <StyledTradeLink
              target="_blank"
              href="https://pandaswap.xyz/"
            >
              PandaSwap
            </StyledTradeLink>
          )}
          {/* <HideSmall>
          <StyledButton type="button" onClick={toggleDarkMode}>
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </StyledButton>
          </HideSmall> */}

        </StyledNav>
      </HeaderWrapper>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
