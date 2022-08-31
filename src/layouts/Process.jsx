// sito components
import SitoContainer from "sito-container";
import SitoImage from "sito-image";

// @mui components
import { useTheme, Box, Typography } from "@mui/material";

// contexts
import { useLanguage } from "../context/LanguageProvider";

// images
import Bubble from "../assets/images/bubble.png";
import feature1 from "../assets/images/8.png";
import feature2 from "../assets/images/9.png";
import feature3 from "../assets/images/10.png";
import feature4 from "../assets/images/11.png";

const Process = () => {
  const theme = useTheme();
  const { languageState } = useLanguage();

  const image = [feature1, feature2, feature3, feature4];

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
      <Box
        className="float-inv-radial"
        sx={{
          width: "150px",
          height: "90px",
          right: 0,
          top: "50px",
        }}
      >
        <Box
          className="float-y"
          sx={{
            width: "150px",
            height: "90px",
          }}
        >
          <SitoImage
            src={Bubble}
            alt="bubble"
            sx={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </Box>
      </Box>
      <Box
        className="float-y"
        sx={{
          display: { xs: "none", md: "initial" },
          width: "360px",
          height: "234px",
          left: -100,
          top: "50%",
        }}
      >
        <SitoImage
          src={Bubble}
          alt="bubble"
          sx={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </Box>
      <Box
        className="float-y"
        sx={{
          width: "250px",
          height: "160px",
          right: "20%",
          top: "90%",
          transform: "rotate(45deg)",
        }}
      >
        <SitoImage
          src={Bubble}
          alt="bubble"
          sx={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
            filter: "blur(4px)",
          }}
        />
      </Box>
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "100px",
        }}
      >
        {languageState.texts.Buy.Process.List.map((item, i) => (
          <SitoContainer
            flexDirection="column"
            alignItems="center"
            sx={{
              padding: "0 30px",
              width: "450px",
              height: "450px",
              marginRight: "40px",
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
          </SitoContainer>
        ))}
      </Box>
    </Box>
  );
};

export default Process;
