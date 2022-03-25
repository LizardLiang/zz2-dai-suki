import { useRef, useState, useEffect } from "react";
import {
  Container,
  Image,
  Box,
  Text,
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faDiscord,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Layout from "../components/article";
import Section from "../components/section";
import Voices from "../components/list";
import Footer from "../components/footer";

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
                      style={{
                        "--clr": "#1877f2",
                        color: "var(--clr)",
                        zIndex: "2",
                      }}
                      _hover={{
                        filter:
                          "drop-shadow(0 0 20px var(--clr)) drop-shadow(0 0 40px var(--clr))",
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
                        "--clr": "#5865F2",
                        color: "var(--clr)",
                        zIndex: "2",
                      }}
                      _hover={{
                        filter:
                          "drop-shadow(0 0 20px var(--clr)) drop-shadow(0 0 40px var(--clr))",
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
                        "--clr": "#FF0000",
                        color: "var(--clr)",
                        zIndex: "2",
                      }}
                      _hover={{
                        filter:
                          "drop-shadow(0 0 20px var(--clr)) drop-shadow(0 0 40px var(--clr))",
                      }}
                    >
                      {" "}
                      Youtube
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
        <Section delay={0.9}>
          <Voices playVoice={playVoice} />
        </Section>
        <Section delay={1.2}>
          <Footer />
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

