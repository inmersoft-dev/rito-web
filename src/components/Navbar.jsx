// @mui components
import { useTheme, Box, Link } from "@mui/material";

// sito components
import SitoImage from "sito-image";

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
        background: "#fff",
        padding: "40px 0 40px 0",
        paddingRight: { xs: "40px" },
        paddingLeft: { lg: "12rem", md: "5rem", xs: "40px" },
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <SitoImage
        src={Logo}
        alt="logo"
        sx={{ width: "130px", height: "55px" }}
      />
      <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center" }}>
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
      </Box>
    </Box>
  );
};

export default Navbar;
