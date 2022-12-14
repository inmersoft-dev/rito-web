// sito components
import SitoContainer from "sito-container";
import SitoImage from "sito-image";

// @mui components
import { useTheme, Box, Typography } from "@mui/material";

// own components
import Motion from "../components/Motion";
import Bubble from "../components/Bubble";

// contexts
import { useLanguage } from "../context/LanguageProvider";

// images
import feature1 from "../assets/images/8.webp";
import feature2 from "../assets/images/9.webp";
import feature3 from "../assets/images/10.webp";
import feature4 from "../assets/images/11.webp";

const Process = () => {
  const theme = useTheme();
  const { languageState } = useLanguage();

  const image = [feature1, feature2, feature3, feature4];

  const getDelay = (i) => {
    let j = 0.2;
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
        margin: "135px 0 100px 0",
        padding: { lg: "0 15rem", md: "0 5rem" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Bubble
        animation="float-inv-radial"
        extraAnimation="float-y"
        width="150px"
        height="90px"
        right="20px"
        top="10px"
      />
      <Bubble
        animation="float-y"
        width="360px"
        height="234px"
        left="-100px"
        top="50%"
        display={{ xs: "none", md: "block" }}
      />
      <Bubble
        animation="float-y"
        width="250px"
        height="160px"
        right="20%"
        top="90%"
        transform="rotate(45deg)"
        filter="blur(4px)"
      />
      <Motion delay={0.2} sx={{ zIndex: 1 }}>
        <Typography
          variant="h3"
          sx={{
            margin: "40px 0 20px 0",
            fontWeight: "400",
            textAlign: "center",
            color: theme.palette.primary.dark,
          }}
        >
          {languageState.texts.Buy.Process.BigTitle}
        </Typography>
      </Motion>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "100px",
        }}
      >
        {languageState.texts.Buy.Process.List.map((item, i) => (
          <Motion key={i} delay={getDelay(i)}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: { xs: "0 15px", md: "0 30px" },
                width: { xs: "300px", md: "450px" },
                height: "450px",
                marginRight: { xs: 0, md: "40px" },
                borderRadius: "1rem",
              }}
            >
              <SitoContainer
                alignItems="center"
                justifyContent="center"
                sx={{
                  borderRadius: "100%",
                  padding: "25px 30px",
                  boxShadow: "3px 7px 27px -17px",
                  width: "120px",
                  height: "120px",
                  marginTop: "-50px",
                  marginBottom: "70px",
                  background: theme.palette.background.default,
                }}
              >
                <SitoImage
                  src={image[i]}
                  alt={`feature${i}`}
                  sx={{ width: "90px", height: "90px" }}
                />
              </SitoContainer>
              <Typography variant="h5" sx={{ fontWeight: "400" }}>
                {item.Title}
              </Typography>
              <Typography sx={{ textAlign: "center" }}>
                {item.Description}
              </Typography>
            </Box>
          </Motion>
        ))}
      </Box>
    </Box>
  );
};

export default Process;
