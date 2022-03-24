import { SimpleGrid, Button } from "@chakra-ui/react";
import { voice_map } from "../lib/voice_list";
import { ChatIcon } from "@chakra-ui/icons";

const Voices = (props) => {
  return (
    <SimpleGrid columns={[2, 3, 3]} spacing={6}>
      {voice_map.map((val) => {
        return (
          <Button
            key={val}
            leftIcon={<ChatIcon />}
            size="md"
            onClick={() => props.playVoice(val)}
            style={{ wordWrap: "break-word", whiteSpace: "pre-wrap" }}
          >
            {val}
          </Button>
        );
      })}
    </SimpleGrid>
  );
};

export default Voices;
