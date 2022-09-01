// @mui components
import { useTheme, Box, Link, Button, Typography } from "@mui/material";

// own components
import Motion from "../components/Motion";

// image
import hero from "../assets/images/hero.png";

// contexts
import { useLanguage } from "../context/LanguageProvider";

const Hero = () => {
  const theme = useTheme();
  const { languageState } = useLanguage();

  return (
    <Box
      id="home"
      sx={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100%",
        padding: "40px 0 40px 0",
        paddingRight: { xs: "20px", sm: "40px" },
        paddingLeft: { lg: "12rem", md: "5rem", sm: "40px", xs: "20px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <Motion delay={0.2}>
        <Typography
          variant="subtitle1"
          sx={{ color: theme.palette.primary.dark }}
        >
          {languageState.texts.Hero.SmallTitle}
        </Typography>
      </Motion>
      <Motion delay={0.4}>
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
      </Motion>
      <Motion delay={0.6}>
        <Typography
          variant="subtitle1"
          sx={{
            color: theme.palette.primary.dark,
            width: { xs: "80%", md: "50%", sm: "70%" },
            lineHeight: "1.25",
          }}
        >
          {languageState.texts.Hero.Description}
        </Typography>
      </Motion>
      <Motion delay={0.8}>
        <Link href="#buy" underline="none">
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
        </Link>
      </Motion>
    </Box>
  );
};

export default Hero;
