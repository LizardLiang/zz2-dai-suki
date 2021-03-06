import {
  Container,
  Box,
  Link,
  Stack,
  Button,
  LinkBox,
  LinkOverlay,
  useColorModeValue
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.900')

  return (
    <Link
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      borderRadius="md"
      {...props}
    >
      {children}
    </Link>
  )
}

const Navbar = props => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Stack
          direction="row"
          display="flex"
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Link href="/">
            <Button>語音包</Button>
          </Link>
          <Link href="/clips">
            <Button>精華包</Button>
          </Link>
          <Box display="flex" flexGrow={1} justifyContent="flex-end">
            <ThemeToggleButton />
            <LinkBox>
              <LinkOverlay
                href="https://github.com/LizardLiang/zz2-dai-suki"
                target="_blank"
              >
                <Button leftIcon={<FontAwesomeIcon icon={faGithub} />}>
                  源碼
                </Button>
              </LinkOverlay>
            </LinkBox>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}

export default Navbar
