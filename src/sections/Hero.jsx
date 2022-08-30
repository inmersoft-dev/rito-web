// @mui components
import { useTheme, Box, Button, Typography } from "@mui/material";

// image
import hero from "../assets/images/hero.png";

// contexts
import { useLanguage } from "../context/LanguageProvider";

const Hero = () => {
  const theme = useTheme();
  const { languageState } = useLanguage();

  return (
    <Box
      sx={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
        paddingLeft: { lg: "12rem", md: "10rem", xs: "5rem" },
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{ color: theme.palette.primary.dark }}
      >
        {languageState.texts.Hero.SmallTitle}
      </Typography>
      <Typography
        variant="h3"
        sx={{
          margin: "40px 0",
          fontWeight: "400",
          color: theme.palette.primary.dark,
        }}
      >
        {languageState.texts.Hero.BigTitle}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          color: theme.palette.primary.dark,
          width: "50%",
          lineHeight: "1.25",
        }}
      >
        {languageState.texts.Hero.Description}
      </Typography>
      <Button
        sx={{
          marginTop: "60px",
          border: `2px solid #fff`,
          color: "#fff",
          padding: "9px 35px",
          borderRadius: "28.76px",
          background: theme.palette.primary.main,
          fontSize: "16px",
          textTransform: "Capitalize",
          "&:hover": {
            color: theme.palette.primary.dark,
            background: "#fff",
          },
        }}
      >
        {languageState.texts.Hero.Button}
      </Button>
    </Box>
  );
};

export default Hero;
