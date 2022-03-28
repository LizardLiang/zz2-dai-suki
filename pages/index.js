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
  useToast
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faDiscord,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import Layout from '../components/article'
import Section from '../components/section'
import Footer from '../components/footer'
import VoicePack from '../components/voice_pack'

export default function Home() {
  const [curPage, setCurPage] = useState('voice_page')
  const toast = useToast()

  useEffect(() => {
    toast({
      render: () => (
        <Box
          display="flex"
          justifyContent="center"
          bg="green.500"
          p={4}
          borderRadius="md"
        >
          <Link
            variant="Toast"
            href="https://events.qoo-app.com/specials/vote/YL2WYQ3YFXR8W9Q8"
          >
            溫馨提醒, 好狸寶, 每天要投票
          </Link>
        </Box>
      ),
      status: 'success',
      duration: 5000,
      isClosable: true
    })
  }, [])

  return (
    <Layout>
      <Container pt={8} maxW="container.sm">
        <Section delay={0.3}>
          <Box
            display="flex"
            mb={10}
            alignItems="center"
            justifyContent="space-evenly"
          >
            <Image
              src="/zz2Cute.gif"
              alt={`zz2`}
              boxSize="150px"
              borderRadius="full"
              mr={4}
            />
            <Box>
              <Text mb={4}>
                啊哈 可悲怎麼變這樣
                <br />
                我怎麼在做這種東西
              </Text>
              <Stack direction={['column', 'row']}>
                <LinkBox>
                  <LinkOverlay
                    href="https://twitter.com/kitsukitsuuu"
                    target="_blank"
                  >
                    <Button
                      colorScheme="twitter"
                      leftIcon={<FontAwesomeIcon icon={faTwitter} />}
                      style={{
                        '--clr': '#1877f2',
                        color: 'var(--clr)',
                        zIndex: '2'
                      }}
                      _hover={{
                        filter:
                          'drop-shadow(0 0 20px var(--clr)) drop-shadow(0 0 40px var(--clr))'
                      }}
                    >
                      Twitter
                    </Button>
                  </LinkOverlay>
                </LinkBox>
                <LinkBox>
                  <LinkOverlay href="https://reurl.cc/bkX1gX" target="_blank">
                    <Button
                      colorScheme="purple"
                      leftIcon={<FontAwesomeIcon icon={faDiscord} />}
                      style={{
                        '--clr': '#5865F2',
                        color: 'var(--clr)',
                        zIndex: '2'
                      }}
                      _hover={{
                        filter:
                          'drop-shadow(0 0 20px var(--clr)) drop-shadow(0 0 40px var(--clr))'
                      }}
                    >
                      Discord
                    </Button>
                  </LinkOverlay>
                </LinkBox>
                <LinkBox>
                  <LinkOverlay
                    href="https://www.youtube.com/channel/UCYsZjpYAuBdytWpZEyZKO4g"
                    target="_blank"
                  >
                    <Button
                      colorScheme="red"
                      leftIcon={<FontAwesomeIcon icon={faYoutube} />}
                      style={{
                        '--clr': '#FF0000',
                        color: 'var(--clr)',
                        zIndex: '2'
                      }}
                      _hover={{
                        filter:
                          'drop-shadow(0 0 20px var(--clr)) drop-shadow(0 0 40px var(--clr))'
                      }}
                    >
                      {' '}
                      Youtube
                    </Button>
                  </LinkOverlay>
                </LinkBox>
              </Stack>
            </Box>
          </Box>
        </Section>
        {curPage === 'voice_page' ? <VoicePack /> : null}
        <Section delay={1.2}>
          <Footer />
        </Section>
      </Container>
    </Layout>
  )
}

