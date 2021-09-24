import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme, GlobalStyle } from './theme'

export const StyledThemeProvider = props => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {props.children}
    </ThemeProvider>
  )
}
