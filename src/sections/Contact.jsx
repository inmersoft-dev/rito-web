import { useForm, Controller } from "react-hook-form";

// @mui components
import {
  useTheme,
  Box,
  Paper,
  Button,
  Typography,
  TextField,
} from "@mui/material";

// @mui icons
import { Circle } from "@mui/icons-material";

// sito components
import SitoContainer from "sito-container";

// own components
import Motion from "../components/Motion";
import Bubble from "../components/Bubble";

// contexts
import { useLanguage } from "../context/LanguageProvider";

const Contact = () => {
  const theme = useTheme();

  const { languageState } = useLanguage();

  const { control, reset, handleSubmit } = useForm();

  const onSubmit = (data) => {
    reset({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

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
      id="contact"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Bubble
        animation="float-radial"
        width="150px"
        height="90px"
        left="-100px"
        top="50%"
      />
      <Bubble
        animation="float-y"
        width="360px"
        height="234px"
        right="0"
        display={{ xs: "none", md: "initial" }}
      />
      <Bubble
        animation="float-y"
        width="250px"
        height="160px"
        right="20%"
        top="90%"
        transform="rotate(45deg)"
        filter="blur(4px)"
      />
      {/* main section */}
      <Box sx={{ display: { xs: "block", md: "flex" }, zIndex: 1 }}>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: { xs: "100px 0 0 0", md: "100px 0 100px 0" },
            paddingRight: { xs: "40px", md: 0 },
            paddingLeft: { lg: "12rem", md: "5rem", xs: "40px" },
          }}
        >
          <Motion delay={0.2}>
            <Typography
              variant="subtitle1"
              sx={{ color: theme.palette.primary.dark }}
            >
              {languageState.texts.Contact.SmallTitle}
            </Typography>
          </Motion>
          <Motion delay={0.4}>
            <Typography
              variant="h3"
              sx={{
                margin: "40px 0",
                fontWeight: "400",
                color: theme.palette.primary.main,
              }}
            >
              {languageState.texts.Contact.BigTitle}
            </Typography>
          </Motion>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: { xs: "-10px", md: "-30px" },
            }}
          >
            {languageState.texts.Contact.List.map((item, i) => (
              <Motion key={item.Title} delay={getDelay(i)}>
                <SitoContainer
                  flexDirection="column"
                  sx={{ marginTop: "30px" }}
                >
                  <SitoContainer alignItems="center">
                    <Circle
                      color="primary"
                      sx={{
                        fontSize: "16px",
                        marginTop: "-2px",
                        marginRight: "20px",
                      }}
                    />
                    <Typography
                      sx={{
                        color: theme.palette.primary.dark,
                        fontSize: "18px",
                        fontWeight: 500,
                      }}
                    >
                      {item.Title}
                    </Typography>
                  </SitoContainer>
                  <Typography
                    variant="body1"
                    sx={{
                      marginLeft: "37px",
                      color: theme.palette.primary.dark,
                      marginTop: "20px",
                    }}
                  >
                    {item.Description}
                  </Typography>
                </SitoContainer>
              </Motion>
            ))}
          </Box>
        </Box>
        <Box
          component="form"
          sx={{
            width: "100%",
            zIndex: 10,
            padding: { xs: "100px 0 100px 0", md: "100px 0 100px 0" },
            paddingRight: { xs: "20px !important", sm: "60px !important" },
            paddingLeft: { xs: "20px !important", md: 0 },
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Motion delay={0.2}>
            <Paper
              sx={{ borderRadius: "1rem", padding: "20px", marginTop: "80px" }}
            >
              <Motion delay={0.4}>
                <Typography>
                  {languageState.texts.Contact.Form.Description}
                </Typography>
              </Motion>
              {/* name */}
              <Motion delay={0.6}>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      color="secondary"
                      sx={{ width: "100%", marginTop: "20px" }}
                      id="name"
                      required
                      label={languageState.texts.Contact.Form.Inputs.Name.Label}
                      placeholder={
                        languageState.texts.Contact.Form.Inputs.Name.Placeholder
                      }
                      variant="outlined"
                      {...field}
                    />
                  )}
                />
              </Motion>
              {/* email */}
              <Motion delay={0.8}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      color="secondary"
                      sx={{ width: "100%", marginTop: "20px" }}
                      id="email"
                      type="email"
                      required
                      label={
                        languageState.texts.Contact.Form.Inputs.Email.Label
                      }
                      placeholder={
                        languageState.texts.Contact.Form.Inputs.Email
                          .Placeholder
                      }
                      variant="outlined"
                      {...field}
                    />
                  )}
                />
              </Motion>
              {/* phone */}
              <Motion delay={1.0}>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      color="secondary"
                      sx={{ width: "100%", marginTop: "20px" }}
                      id="phone"
                      type="phone"
                      required
                      label={
                        languageState.texts.Contact.Form.Inputs.Phone.Label
                      }
                      placeholder={
                        languageState.texts.Contact.Form.Inputs.Phone
                          .Placeholder
                      }
                      variant="outlined"
                      {...field}
                    />
                  )}
                />
              </Motion>
              {/* message */}
              <Motion delay={1.2}>
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      color="secondary"
                      sx={{ width: "100%", marginTop: "20px" }}
                      id="message"
                      required
                      multiline
                      rows={5}
                      label={
                        languageState.texts.Contact.Form.Inputs.Message.Label
                      }
                      placeholder={
                        languageState.texts.Contact.Form.Inputs.Message
                          .Placeholder
                      }
                      variant="outlined"
                      {...field}
                    />
                  )}
                />
              </Motion>
              <SitoContainer
                fullWidth
                justifyContent="flex-end"
                sx={{ marginTop: "20px" }}
              >
                <Motion delay={1.4}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    sx={{
                      padding: "9px 35px",
                      borderRadius: "28.76px",
                      fontSize: "16px",
                      textTransform: "Capitalize",
                    }}
                  >
                    {languageState.texts.Buy.CatchToAction.Button}
                  </Button>
                </Motion>
              </SitoContainer>
            </Paper>
          </Motion>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
