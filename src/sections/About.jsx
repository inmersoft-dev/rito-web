// @mui components
import { useTheme, Box, Typography } from "@mui/material";

// @mui icons
import { Circle } from "@mui/icons-material";

// sito components
import SitoContainer from "sito-container";

// own components
import Motion from "../components/Motion";
import Bubble from "../components/Bubble";

// contexts
import { useLanguage } from "../context/LanguageProvider";

const About = () => {
  const theme = useTheme();
  const { languageState } = useLanguage();

  const getDelay = (i) => {
    let j = 0.4;
    let k = 0;
    while (k < i) {
      j += 0.2;
      k += 1;
    }
    return j;
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: "100px 40px 100px 0",
        paddingLeft: { lg: "12rem", md: "5rem", xs: "40px" },
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Bubble
        animation="float-radial"
        width="150px"
        height="90px"
        left="-100px"
        top="50%"
      />
      <Bubble animation="float-y" width="360px" height="234px" right="0" />
      <Bubble
        animation="float-y"
        width="250px"
        height="160px"
        right="20%"
        top="90%"
        transform="rotate(45deg)"
        filter="blur(4px)"
      />
      {/* main section */}
      <Box
        sx={{
          width: { xs: "100%", sm: "90%", md: "600px" },
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
            {languageState.texts.About.SmallTitle}
          </Typography>
        </Motion>
        <Motion delay={0.4}>
          <Typography
            variant="h3"
            sx={{
              margin: "40px 0",
              fontWeight: "400",
              color: theme.palette.primary.main,
            }}
          >
            {languageState.texts.About.BigTitle}
          </Typography>
        </Motion>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginLeft: { xs: "-10px", md: "-30px" },
          }}
        >
          {languageState.texts.About.List.map((item, i) => (
            <Motion delay={getDelay(i)} key={item.Title}>
              <SitoContainer flexDirection="column" sx={{ marginTop: "30px" }}>
                <SitoContainer alignItems="center">
                  <Circle
                    color="primary"
                    sx={{
                      fontSize: "16px",
                      marginTop: "-2px",
                      marginRight: "20px",
                    }}
                  />
                  <Typography
                    sx={{
                      color: theme.palette.primary.dark,
                      fontSize: "18px",
                      fontWeight: 500,
                    }}
                  >
                    {item.Title}
                  </Typography>
                </SitoContainer>
                <Typography
                  variant="body1"
                  sx={{
                    marginLeft: "37px",
                    color: theme.palette.primary.dark,
                    marginTop: "20px",
                  }}
                >
                  {item.Description}
                </Typography>
              </SitoContainer>
            </Motion>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default About;
