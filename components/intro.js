import { Button, Box, Text, Image, Stack, LinkBox, LinkOverlay, useColorModeValue } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faDiscord,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'

export default function Intro() {
  return (
    <Box
      display="flex"
      mt={4}
      mb={6}
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
                style={useColorModeValue(
                  {},
                  {
                    '--clr': '#1877f2',
                    color: 'var(--clr)',
                    zIndex: '2'
                  }
                )}
                _hover={useColorModeValue(
                  {},
                  {
                    filter:
                      'drop-shadow(0 0 20px var(--clr)) drop-shadow(0 0 40px var(--clr))'
                  }
                )}
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
                style={useColorModeValue(
                  {},
                  {
                    '--clr': '#5865F2',
                    color: 'var(--clr)',
                    zIndex: '2'
                  }
                )}
                _hover={useColorModeValue(
                  {},
                  {
                    filter:
                      'drop-shadow(0 0 20px var(--clr)) drop-shadow(0 0 40px var(--clr))'
                  }
                )}
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
                style={useColorModeValue(
                  {},
                  {
                    '--clr': '#FF0000',
                    color: 'var(--clr)',
                    zIndex: '2'
                  }
                )}
                _hover={useColorModeValue(
                  {},
                  {
                    filter:
                      'drop-shadow(0 0 20px var(--clr)) drop-shadow(0 0 40px var(--clr))'
                  }
                )}
              >
                {' '}
                Youtube
              </Button>
            </LinkOverlay>
          </LinkBox>
        </Stack>
      </Box>
    </Box>
  )
}