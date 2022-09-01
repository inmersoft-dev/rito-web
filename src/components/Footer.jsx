// sito components
import SitoContainer from "sito-container";

// @mui components
import { useTheme, Box, Link, Typography } from "@mui/material";

// @mui icons
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";

// contexts
import { useLanguage } from "../context/LanguageProvider";

const Footer = () => {
  const theme = useTheme();
  const { languageState } = useLanguage();

  return (
    <Box
      sx={{
        zIndex: 1,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: "40px 0 40px 0",
        paddingRight: { xs: "40px" },
        paddingLeft: { lg: "12rem", md: "5rem", xs: "40px" },
        background: theme.palette.primary.main,
      }}
    >
      <SitoContainer
        alignItems="center"
        sx={{ height: "100%", marginBottom: "20px" }}
      >
        <Link
          href="https://facebook.com"
          sx={{
            marginRight: "20px",
            borderRadius: "100%",
            background: "#fff",
            width: "35px",
            height: "35px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 500ms ease",
            "&:hover": {
              transform: "translateY(-10px)",
            },
          }}
        >
          <Facebook />
        </Link>
        <Link
          href="https://twitter.com"
          sx={{
            marginRight: "20px",
            borderRadius: "100%",
            background: "#fff",
            width: "35px",
            height: "35px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 500ms ease",
            "&:hover": {
              transform: "translateY(-10px)",
            },
          }}
        >
          <Twitter />
        </Link>
        <Link
          href="https://linkedin.com"
          sx={{
            marginRight: "20px",
            borderRadius: "100%",
            background: "#fff",
            width: "35px",
            height: "35px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 500ms ease",
            "&:hover": {
              transform: "translateY(-10px)",
            },
          }}
        >
          <LinkedIn />
        </Link>
      </SitoContainer>
      <SitoContainer alignItems="center" sx={{ height: "100%" }}>
        <Typography>{languageState.texts.Footer.Text}</Typography>
      </SitoContainer>
    </Box>
  );
};

export default Footer;
