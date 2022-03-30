import { extendTheme, withDefaultSize } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'none',
        fontSize: 20,
        marginTop: 3,
        marginBottom: 4
      },
      'info-title': {
        textDecoration: 'underline',
        fontSize: 18,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3,
      fontSize: 20
    }),
    variants: {
      Toast: {
        color: 'white.900',
        textDecoration: 'underline'
      }
    }
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'"
}

const colors = {
  grassTeal: '#88ccca'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
})

export default theme

