// framer-motion
import { motion } from "framer-motion";

// @emotion/css
import { css } from "@emotion/css";

import PropTypes from "prop-types";

const Motion = (props) => {
  const { children, delay, sx } = props;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={css({ ...sx })}
    >
      {children}
    </motion.div>
  );
};

Motion.defaultProps = {
  delay: 0,
  sx: {},
};

Motion.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  sx: PropTypes.object,
};

export default Motion;
