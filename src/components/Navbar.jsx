// @mui components
import { Link } from "@mui/material";

// sito components
import SitoContainer from "sito-container";
import SitoImage from "sito-image";

// utils
import { scrollTo } from "../utils/functions";

// contexts
import { useLanguage } from "../context/LanguageProvider";

const Navbar = () => {
  const { languageState } = useLanguage();

  return (
    <SitoContainer>
      <SitoImage sx={{ width: "100px", height: "40px" }} />
      <SitoContainer>
        {Object.values(languageState.texts.Links).map((item) => (
          <Link href={item.to} key={item.To}>
            {item.label}
          </Link>
        ))}
      </SitoContainer>
    </SitoContainer>
  );
};

export default Navbar;
