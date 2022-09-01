// framer-motion
import { motion } from "framer-motion";

import PropTypes from "prop-types";

const Motion = (props) => {
  const { children, delay } = props;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

Motion.defaultProps = {
  delay: 0,
};

Motion.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
};

export default Motion;
