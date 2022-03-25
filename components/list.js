import { useState, useEffect } from 'react'
import { SimpleGrid, Button } from '@chakra-ui/react'
import { voice_map } from '../lib/voice_list'
import { ChatIcon } from '@chakra-ui/icons'

const Voices = props => {
  const [voice, setVoice] = useState(voice_map)

  useEffect(() => {
    if (props.category === '全部') {
      setVoice(voice_map)
      return
    }
    let newVoice = Object.keys(voice_map).reduce((filtered, val) => {
      if (voice_map[val].includes(props.category))
        filtered[val] = voice_map[val]
      return filtered
    }, {})

    setVoice(newVoice)
  }, [props.category])

  return (
    <SimpleGrid columns={[2, 3, 3]} spacing={6}>
      {Object.keys(voice).map(val => {
        return (
          <Button
            key={val}
            leftIcon={<ChatIcon />}
            size="md"
            onClick={() => props.playVoice(val)}
            style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}
          >
            {val}
          </Button>
        )
      })}
    </SimpleGrid>
  )
}

export default Voices
