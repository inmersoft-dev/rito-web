// sito components
import SitoContainer from "sito-container";

// @mui components
import { useTheme, Box, Divider, Typography } from "@mui/material";

// contexts
import { useLanguage } from "../context/LanguageProvider";

const HowWeWork = () => {
  const theme = useTheme();
  const { languageState } = useLanguage();

  return (
    <Box
      sx={{
        width: "100%",
        padding: { xs: "100px 40px", md: "100px 15rem", lg: "100px 20rem" },
        margin: "135px 0",
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          margin: "40px 0 20px 0",
          fontWeight: "400",
          textAlign: "center",
          color: theme.palette.primary.dark,
        }}
      >
        {languageState.texts.Buy.HowWeWork.BigTitle}
      </Typography>
      <Typography
        variant="body"
        sx={{ textAlign: "center", color: theme.palette.primary.dark }}
      >
        {languageState.texts.Buy.HowWeWork.SmallTitle}
      </Typography>
      <Box sx={{ display: "flex", marginTop: "100px" }}>
        {languageState.texts.Buy.HowWeWork.List.map((item, i) => (
          <SitoContainer
            flexDirection="column"
            alignItems="center"
            sx={{
              padding: "0 30px",
              width: "350px",
              height: " 400px",
              marginRight: "40px",
              borderRadius: "1rem",
              background: theme.palette.background.paper,
              boxShadow: "3px 15px 27px -28px",
            }}
          >
            <SitoContainer
              alignItems="center"
              justifyContent="center"
              sx={{
                borderRadius: "100%",
                padding: "25px 30px",
                boxShadow: "3px 7px 27px -8px",
                width: "100px",
                height: "100px",
                marginTop: "-50px",
                marginBottom: "70px",
                background: theme.palette.background.default,
              }}
            >
              <Typography
                color="primary"
                fontSize="3rem"
                className="prevent-select"
              >
                0{i + 1}
              </Typography>
            </SitoContainer>
            <Typography variant="h5" sx={{ fontWeight: "400" }}>
              {item.Title}
            </Typography>
            <Divider
              sx={{ width: "100%", margin: "20px 0", borderWidth: "2px" }}
            />
            <Typography sx={{ textAlign: "center" }}>
              {item.Description}
            </Typography>
          </SitoContainer>
        ))}
      </Box>
    </Box>
  );
};

export default HowWeWork;
