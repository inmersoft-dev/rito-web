// sito components
import SitoContainer from "sito-container";

// @mui components
import { Box, Link } from "@mui/material";

// @mui icons
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ display: "flex", width: "100%", height: "60px" }}>
      <SitoContainer>
        <Link href="https://facebook.com">
          <Facebook />
        </Link>
        <Link href="https://twitter.com">
          <Twitter />
        </Link>
        <Link href="https://linkedin.com">
          <LinkedIn />
        </Link>
      </SitoContainer>
    </Box>
  );
};

export default Footer;
