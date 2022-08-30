// @mui components
import { useTheme, Box, Link } from "@mui/material";

// sito components
import SitoContainer from "sito-container";
import SitoImage from "sito-image";

// utils
import { scrollTo } from "../utils/functions";

// contexts
import { useLanguage } from "../context/LanguageProvider";

// images
import Logo from "../assets/images/logo.png";

const Navbar = () => {
  const theme = useTheme();
  const { languageState } = useLanguage();

  const extraCSS = {
    border: `2px solid ${theme.palette.primary.main}`,
    padding: "9px 35px",
    borderRadius: "28.76px",
    background: `${theme.palette.primary.main}1B`,
    "&:hover": {
      color: "#ffffff",
      background: theme.palette.primary.main,
    },
  };

  return (
    <Box
      sx={{
        padding: "40px 60px 40px 0",
        paddingLeft: { lg: "12rem", md: "10rem", xs: "5rem" },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
      }}
    >
      <SitoImage
        src={Logo}
        alt="logo"
        sx={{ width: "130px", height: "55px" }}
      />
      <SitoContainer alignItems="center">
        {Object.values(languageState.texts.Links).map((item) => (
          <Link
            href={item.To}
            key={item.To}
            underline="none"
            sx={{
              marginLeft: "40px",
              transition: "all 500ms ease",
              color: theme.palette.primary.main,
              ...(item.Pretty
                ? extraCSS
                : {
                    "&:hover": {
                      color: theme.palette.primary.dark,
                    },
                  }),
            }}
          >
            {item.Label}
          </Link>
        ))}
      </SitoContainer>
    </Box>
  );
};

export default Navbar;
