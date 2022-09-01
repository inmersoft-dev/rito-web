// sito components
import SitoContainer from "sito-container";

// @mui components
import { useTheme, Box, Divider, Typography } from "@mui/material";

// own components
import Motion from "../components/Motion";

// contexts
import { useLanguage } from "../context/LanguageProvider";

const HowWeWork = () => {
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
        margin: "135px 0 100px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Motion delay={0.2}>
        <Typography
          variant="h3"
          sx={{
            margin: { xs: 0, md: "40px 0 20px 0" },
            fontWeight: "400",
            textAlign: "center",
            color: theme.palette.primary.dark,
          }}
        >
          {languageState.texts.Buy.HowWeWork.BigTitle}
        </Typography>
      </Motion>
      <Motion delay={0.4}>
        <Typography
          variant="body"
          sx={{ textAlign: "center", color: theme.palette.primary.dark }}
        >
          {languageState.texts.Buy.HowWeWork.SmallTitle}
        </Typography>
      </Motion>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {languageState.texts.Buy.HowWeWork.List.map((item, i) => (
          <Motion key={i} delay={getDelay(i)}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: { xs: "0 15px", md: "0 30px" },
                width: { xs: "300px", md: "350px" },
                height: " 400px",
                marginTop: "100px",
                marginRight: { xs: 0, md: "40px" },
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
                  boxShadow: "3px 7px 27px -17px",
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
            </Box>
          </Motion>
        ))}
      </Box>
    </Box>
  );
};

export default HowWeWork;
