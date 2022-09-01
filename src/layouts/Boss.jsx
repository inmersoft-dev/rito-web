// @mui components
import { Box, Typography } from "@mui/material";

// sito component
import SitoContainer from "sito-container";
import SitoImage from "sito-image";

// own component
import Motion from "../components/Motion";

// images
import boss from "../assets/images/boss.png";
import noPhoto from "../assets/images/no-photo.webp";

// contexts
import { useLanguage } from "../context/LanguageProvider";

const Boss = () => {
  const { languageState } = useLanguage();

  return (
    <Box
      id="home"
      sx={{
        backgroundImage: { xs: "", md: `url(${boss})` },
        backgroundPositionY: { md: "-100px", lg: "-250px" },
        backgroundSize: "cover",
        height: { xs: "60vh", md: "100vh" },
        marginBottom: { xs: "160px", md: 0 },
        width: "100%",
        padding: "40px 0 40px 0",
        paddingLeft: { lg: "12rem", md: "5rem", xs: "40px" },
        paddingRight: { lg: "12rem", md: "10rem", xs: "40px" },
        display: "flex",
        justifyContent: { xs: "flex-end", md: "space-between" },
        flexDirection: { xs: "column-reverse", md: "row" },
      }}
    >
      <Motion delay={0.2}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "400",
            width: { md: "500px", lg: "700px" },
            marginTop: { xs: "20px", md: 0 },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {languageState.texts.Boss.Description}
        </Typography>
      </Motion>
      <SitoContainer flexDirection="column" alignItems="center">
        <Motion delay={0.4}>
          <SitoImage
            sx={{
              objectFit: "cover",
              width: "120px",
              height: "120px",
              borderRadius: "100%",
            }}
            src={noPhoto}
            alt="profile"
          />
        </Motion>
        <Motion delay={0.6}>
          <Typography color="primary" sx={{ marginTop: "20px" }}>
            {languageState.texts.Boss.Who}
          </Typography>
        </Motion>
        <Motion delay={0.8}>
          <Typography color="primary">
            {languageState.texts.Boss.Role}
          </Typography>
        </Motion>
      </SitoContainer>
    </Box>
  );
};

export default Boss;
