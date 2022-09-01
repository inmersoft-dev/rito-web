// @mui components
import { useTheme, Box, Typography, TextField } from "@mui/material";

// @mui icons
import { Circle } from "@mui/icons-material";

// sito components
import SitoContainer from "sito-container";
import SitoImage from "sito-image";

// own components
import Motion from "../components/Motion";
import Bubble from "../components/Bubble";

// contexts
import { useLanguage } from "../context/LanguageProvider";

const Contact = () => {
  const theme = useTheme();
  const { languageState } = useLanguage();

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
      <Bubble
        animation="float-y"
        width="360px"
        height="234px"
        right="0"
        display={{ xs: "none", md: "initial" }}
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
      {/* main section */}
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            width: { xs: "100%", sm: "90%", md: "600px" },
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
            {languageState.texts.Contact.SmallTitle}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              margin: "40px 0",
              fontWeight: "400",
              color: theme.palette.primary.main,
            }}
          >
            {languageState.texts.Contact.BigTitle}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: { xs: "-10px", md: "-30px" },
            }}
          >
            {languageState.texts.Contact.List.map((item) => (
              <SitoContainer
                key={item.Title}
                flexDirection="column"
                sx={{ marginTop: "30px" }}
              >
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
            ))}
          </Box>
        </Box>
        <Box component="form">
          <Typography>
            {languageState.texts.Contact.Form.Description}
          </Typography>
          <TextField />
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
