import { useState, useEffect } from "react";

import PropTypes from "prop-types";

// @mui components
import { useTheme, Drawer as MUIDrawer, Link, IconButton } from "@mui/material";

// @mui icons
import CloseIcon from "@mui/icons-material/Close";

// sito components
import SitoContainer from "sito-container";
import SitoImage from "sito-image";

// contexts
import { useLanguage } from "../context/LanguageProvider";

// images
import Logo from "../assets/images/logo.png";

const Drawer = (props) => {
  const { open, onClose } = props;
  const theme = useTheme();
  const { languageState } = useLanguage();

  const [visible, setVisible] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setVisible(false);
    onClose();
  };

  useEffect(() => {
    console.log(open);
    if (open) setVisible(true);
  }, [open]);

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

  const showOff = () => {
    setVisible(false);
    onClose();
  };

  return (
    <MUIDrawer
      anchor="left"
      open={visible}
      onClose={(e) => toggleDrawer(false)}
    >
      <SitoContainer
        flexDirection="column"
        sx={{
          padding: "40px 100px 40px 40px",
          marginBottom: "20px",
          position: "relative",
        }}
      >
        <IconButton
          sx={{ position: "absolute", right: "20px", top: "20px" }}
          onClick={showOff}
          color="error"
        >
          <CloseIcon />
        </IconButton>
        <SitoContainer alignItems="center">
          <SitoImage
            src={Logo}
            alt="logo"
            sx={{ width: "130px", height: "55px" }}
          />
        </SitoContainer>
        {Object.values(languageState.texts.Links).map((item) => (
          <Link
            href={item.To}
            key={item.To}
            underline="none"
            sx={{
              marginTop: "20px",
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
            onClick={showOff}
          >
            {item.Label}
          </Link>
        ))}
      </SitoContainer>
    </MUIDrawer>
  );
};

Drawer.defaultProps = {
  open: false,
};

Drawer.propTypes = {
  open: PropTypes.bool,
};

export default Drawer;
