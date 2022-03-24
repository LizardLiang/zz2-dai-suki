import { useRef, useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Layout from "./components/article";
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
import { ChatIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

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

        <Box>
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
            <SliderThumb />
          </Slider>
        </Box>
        <SimpleGrid columns={[2, 2, 3]} spacing={4}>
          <Button
            leftIcon={<ChatIcon />}
            size="md"
            onClick={() => playVoice("leavenow")}
          >
            要滾快滾
          </Button>
          <Button leftIcon={<ChatIcon />} size="md">
            要滾快滾
          </Button>
          <Button leftIcon={<ChatIcon />} size="md">
            要滾快滾
          </Button>
          <Button leftIcon={<ChatIcon />} size="md">
            要滾快滾
          </Button>
        </SimpleGrid>
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

