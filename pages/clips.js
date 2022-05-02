import { useEffect, useState } from 'react'
import {
  Container,
  Box,
  SimpleGrid
} from '@chakra-ui/react'
import Clip from '../components/clip'
import Layout from '../components/article'
import Intro from '../components/intro'

const url = "https://cor-proxy.herokuapp.com/https://www.youtube.com/hashtag/kitsuclip"
export default function Clips() {
  const [clips, setClips] = useState([])
  useEffect(() => {
    fetch(url).then(res => res.text()).then(res => {
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(res, 'text/html')

      let videoText = xmlDoc.childNodes[1].childNodes[1].childNodes[16].innerHTML

      let videoObject = JSON.parse(videoText.slice(20).slice(0, -1))
      let videos = videoObject.contents.twoColumnBrowseResultsRenderer.tabs[0].tabRenderer.content.richGridRenderer.contents

      setClips(videos)
    })
  }, [])

  return (
    <Layout>
      <Container pt={8} maxW="container.sm">
        <Box>
          <Intro />
          <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={6}>
            {clips.length > 0 && <Clip videos={clips} />}
          </SimpleGrid>
        </Box>
      </Container>
    </Layout>
  )
}