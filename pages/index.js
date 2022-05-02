import { useRef, useState, useEffect } from 'react'
import {
  Container,
  Image,
  Box,
  Text,
  Button,
  Stack,
  Link,
  LinkOverlay,
  LinkBox,
  useToast,
  useColorModeValue
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faDiscord,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import dynamic from 'next/dynamic'
import Layout from '../components/article'
import Section from '../components/section'
import Footer from '../components/footer'
import VoicePack from '../components/voice_pack'
import VoxelDogLoader from '../components/voxel-zz2-loader'
import Intro from '../components/intro'

const LazyVoxelZz2 = dynamic(() => import('../components/voxel-zz2'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

export default function Home() {
  const [curPage, setCurPage] = useState('voice_page')
  const toast = useToast()

  useEffect(() => { }, [])

  return (
    <Layout>
      <Container pt={4} maxW="container.sm">
        <Section delay={0.3}>
          <LazyVoxelZz2 />
        </Section>
        <Section delay={0.6}>
          <Intro />
        </Section>
        {curPage === 'voice_page' ? <VoicePack /> : null}
        <Section delay={1.2}>
          <Footer />
        </Section>
      </Container>
    </Layout>
  )
}
