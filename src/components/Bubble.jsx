import PropTypes from "prop-types";

// sito components
import SitoImage from "sito-image";

// @mui material
import { Box } from "@mui/material";

// images
import BubbleIMG from "../assets/images/bubble.webp";

const Bubble = (props) => {
  const {
    animation,
    extraAnimation,
    transform,
    filter,
    width,
    height,
    left,
    top,
    right,
    display,
  } = props;

  return (
    <Box
      className={animation}
      sx={{
        width,
        height,
        left,
        top,
        right,
        display,
      }}
    >
      <Box className={extraAnimation} sx={{ width, height }}>
        <SitoImage
          src={BubbleIMG}
          alt="bubble"
          sx={{
            objectFit: "contain",
            width: "100%",
            height: "100%",
            filter,
            transform,
          }}
        />
      </Box>
    </Box>
  );
};

Bubble.defaultProps = {
  extraAnimation: "",
  transform: undefined,
  filter: undefined,
  left: undefined,
  right: undefined,
  top: undefined,
  display: undefined,
};

Bubble.propTypes = {
  animation: PropTypes.string.isRequired,
  extraAnimation: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  transform: PropTypes.string,
  filter: PropTypes.string,
  left: PropTypes.string,
  top: PropTypes.string,
  right: PropTypes.string,
  display: PropTypes.object,
};

export default Bubble;
