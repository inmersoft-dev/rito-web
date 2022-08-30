// @mui components
import { useTheme, Box, Button, Typography } from "@mui/material";

// @mui icons
import { Circle } from "@mui/icons-material";

// sito components
import SitoContainer from "sito-container";

// contexts
import { useLanguage } from "../context/LanguageProvider";

const About = () => {
  const theme = useTheme();
  const { languageState } = useLanguage();

  return (
    <Box
      sx={{
        width: "100%",
        padding: "40px 60px 40px 0",
        paddingLeft: { lg: "12rem", md: "10rem", xs: "5rem" },
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: { md: "60%", lg: "50%" },
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
          {languageState.texts.About.SmallTitle}
        </Typography>
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
        <SitoContainer flexDirection="column" sx={{ marginLeft: "-30px" }}>
          {languageState.texts.About.List.map((item) => (
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
          ))}
        </SitoContainer>
      </Box>
    </Box>
  );
};

export default About;
