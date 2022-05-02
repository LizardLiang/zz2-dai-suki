import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Navbar from './navbar'
import VoxelDogLoader from './voxel-zz2-loader'
import Intro from './intro'

const LazyVoxelZz2 = dynamic(() => import('./voxel-zz2'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>zz2 我婆</title>
      </Head>
      <Navbar />
      <Container maxW="container.md" pt={14}>
        {/* <LazyVoxelZz2 /> */}
        {children}
      </Container>
    </Box>
  )
}
export default Main
