import { useState, useEffect } from 'react'
import { SimpleGrid, Button, ButtonGroup, IconButton } from '@chakra-ui/react'
import { voice_map } from '../lib/voice_list'
import { ChatIcon, StarIcon } from '@chakra-ui/icons'

const Voices = props => {
  const [voice, setVoice] = useState(Object.keys(voice_map))
  const [fav, setFav] = useState([])

  const addToFavorite = name => {
    if (!fav.includes(name)) {
      setFav(old => [...old, name])
    } else {
      setFav(old => {
        return old.filter(val => val !== name)
      })
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.localStorage.getItem('fav')) {
        let localFav = JSON.parse(localStorage.getItem('fav'))
        setFav(localFav)
      }
    }
  }, [])

  useEffect(() => {
    console.table(fav)
    window.localStorage.setItem('fav', JSON.stringify(fav))
  }, [fav])

  useEffect(() => {
    let newVoice = null
    if (props.category === '全部') {
      newVoice = voice_map
    } else {
      newVoice = Object.keys(voice_map).reduce((filtered, val) => {
        if (voice_map[val].includes(props.category))
          filtered[val] = voice_map[val]
        return filtered
      }, {})
    }

    console.log(fav, typeof fav)

    let favVoice = Object.keys(newVoice).filter(val => fav.includes(val))
    let regVoice = Object.keys(newVoice).filter(val => !fav.includes(val))

    newVoice = favVoice.push(...regVoice)
    const sortedVoice = Object.keys(voice_map).reduce((filtered, val) => {
      if (favVoice.includes(val)) {
        filtered.push(val)
      }
      return filtered
    }, [])

    setVoice(favVoice)
  }, [props.category, fav])

  return (
    <SimpleGrid columns={[2, 3, 3]} spacing={6}>
      {voice.map((val, index) => {
        return (
          <ButtonGroup
            display="flex"
            w="full"
            key={`${val}-${index}`}
            isAttached
          >
            <Button
              leftIcon={<ChatIcon />}
              size="md"
              onClick={() => props.playVoice(val)}
              style={{ wordWrap: 'break-word', whiteSpace: 'pre-wrap' }}
              flexGrow={1}
              justifyContent="flex-start"
              textAlign="left"
            >
              {val}
            </Button>
            <IconButton
              aria-label="add to fav"
              icon={<StarIcon />}
              onClick={() => addToFavorite(val)}
              color={fav.includes(val) ? 'yellow.300' : 'white'}
            />
          </ButtonGroup>
        )
      })}
    </SimpleGrid>
  )
}

export default Voices
