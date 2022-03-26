import '../styles/globals.css'
import theme from '../lib/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import Main from '../components/main'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Main>
        <AnimatePresence exitBeforeEnter initial={true}>
          <Component {...pageProps} />
        </AnimatePresence>
      </Main>
    </ChakraProvider>
  )
}

export default MyApp
