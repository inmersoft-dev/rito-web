// @mui components
import { useTheme, Box, Button, Typography } from "@mui/material";

// contexts
import { useLanguage } from "../context/LanguageProvider";

// images
import Catch from "../assets/images/catch.png";

const CatchToAction = () => {
  const theme = useTheme();
  const { languageState } = useLanguage();

  return (
    <Box
      sx={{
        background: `url(${Catch})`,
        backgroundSize: "contain",
        width: "100%",
        padding: { xs: "40px", md: "50px 15rem", lg: "50px 20rem" },
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{ textAlign: "center", color: theme.palette.primary.dark }}
      >
        {languageState.texts.Buy.CatchToAction.SmallTitle}
      </Typography>
      <Typography
        variant="h3"
        sx={{
          margin: "40px 0",
          fontWeight: "400",
          fontSize: { xs: "1.65rem !important", md: "3rem !important" },
          textAlign: "center",
          color: theme.palette.primary.dark,
        }}
      >
        {languageState.texts.Buy.CatchToAction.BigTitle}
      </Typography>
      <Button
        sx={{
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
        {languageState.texts.Buy.CatchToAction.Button}
      </Button>
    </Box>
  );
};

export default CatchToAction;
