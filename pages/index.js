import { useRef, useState, useEffect } from "react";
import {
  Container,
  Image,
  Box,
  Text,
  SimpleGrid,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Stack,
  LinkOverlay,
  LinkBox,
} from "@chakra-ui/react";
import { ChatIcon, M } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";
import Layout from "../components/article";
import Section from "../components/section";
import Voices from "../components/list";

export default function Home() {
  const audioPlayer = useRef();
  const [audioName, setAudioName] = useState("");
  const [audioVolume, setAudioVolume] = useState(30);
  const playVoice = (name) => {
    name = `/voice/${name}.mp3`;
    if (name === audioName) {
      replayVoice();
    } else setAudioName(name);
  };

  const replayVoice = () => {
    audioPlayer.current.pause();
    //audioPlayer.current.load();
    audioPlayer.current
      .play()
      .then(() => {})
      .catch(() => {});
  };

  useEffect(() => {
    audioPlayer.current.volume = audioVolume / 100;
  }, [audioVolume]);

  useEffect(() => {
    if (audioName !== "/voice") {
      audioPlayer.current.pause();
      audioPlayer.current.load();
      audioPlayer.current
        .play()
        .then(() => {})
        .catch(() => {});
    }
  }, [audioName]);

  return (
    <Layout>
      <Container pt={10}>
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
              <Stack direction={["column", "row"]}>
                <LinkBox>
                  <LinkOverlay
                    href="https://twitter.com/kitsukitsuuu"
                    target="_blank"
                  >
                    <Button
                      colorScheme="twitter"
                      leftIcon={<FontAwesomeIcon icon={faTwitter} />}
                    >
                      Twitter
                    </Button>
                  </LinkOverlay>
                </LinkBox>
                <LinkBox>
                  <LinkOverlay href="https://reurl.cc/bkX1gX" target="_blank">
                    <Button
                      colorScheme="twitter"
                      leftIcon={<FontAwesomeIcon icon={faDiscord} />}
                    >
                      Discord
                    </Button>
                  </LinkOverlay>
                </LinkBox>
              </Stack>
            </Box>
          </Box>
        </Section>
        <Section delay={0.6}>
          <Box>
            <Text>音量</Text>
            <Slider
              aria-label="slider-ex-1"
              defaultValue={30}
              min={0}
              max={100}
              mb={10}
              onChange={(v) => {
                setAudioVolume(v);
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
        <Section>
          <Voices playVoice={playVoice} />
        </Section>
        <audio
          ref={(el) => {
            audioPlayer.current = el;
          }}
        >
          <source src={audioName} />
        </audio>
      </Container>
    </Layout>
  );
}
