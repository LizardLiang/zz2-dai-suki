import { useState, useEffect, useRef } from 'react'
import {
  Box,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderMark,
  SliderThumb
} from '@chakra-ui/react'
import Section from './section'
import Voices from './list'
import Category from './category'

const VoicePack = () => {
  const audioPlayer = useRef()
  const [audioName, setAudioName] = useState('')
  const [audioVolume, setAudioVolume] = useState(30)
  const [category, setCategory] = useState('全部')

  const playVoice = name => {
    name = `/voice/${name}.mp3`
    if (name === audioName) {
      replayVoice()
    } else setAudioName(name)
  }

  const replayVoice = () => {
    audioPlayer.current.pause()
    //audioPlayer.current.load();
    audioPlayer.current
      .play()
      .then(() => {})
      .catch(() => {})
  }

  useEffect(() => {
    audioPlayer.current.volume = audioVolume / 100
  }, [audioVolume])

  useEffect(() => {
    if (audioName !== '/voice') {
      audioPlayer.current.pause()
      audioPlayer.current.load()
      audioPlayer.current
        .play()
        .then(() => {})
        .catch(() => {})
      console.log(audioName)
    }
  }, [audioName])

  useEffect(() => {
    audioPlayer.current.pause()
    audioPlayer.current.load()
    audioPlayer.current.play()
  }, [])

  return (
    <>
      <Section delay={0.6}>
        <Box>
          <Text>音量</Text>
          <Slider
            aria-label="slider-ex-1"
            defaultValue={30}
            min={0}
            max={100}
            mb={10}
            onChange={v => {
              setAudioVolume(v)
            }}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderMark value={0} fontSize="sm">
              0%
            </SliderMark>
            <SliderMark value={100} fontSize="sm">
              100%
            </SliderMark>
            <SliderThumb boxSize={6}></SliderThumb>
          </Slider>
        </Box>
      </Section>
      <Section delay={0.9}>
        <Category category={category} setCategory={setCategory} />
      </Section>
      <Section delay={0.9}>
        <Voices playVoice={playVoice} category={category} />
      </Section>
      <audio
        ref={el => {
          audioPlayer.current = el
        }}
      >
        <source src={audioName} />
      </audio>
    </>
  )
}

export default VoicePack
