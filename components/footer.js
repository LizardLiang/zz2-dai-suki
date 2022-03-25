import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} Lizard Liang. Content belongs to Wolf
      Valley
      <br />
      Contact Me: Discord Peter Parker#0520
    </Box>
  );
};

export default Footer;

