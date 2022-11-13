import React, { useState } from "react";
import { useForm } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Roles } from "../../../config/ROLES";
import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  CircularProgress,
  Link,
} from "@mui/material";
import { Color, ERROR_MESSAGE, UI_TEXT, URL } from "../../../config/CONSTANT";
import { NavLink } from "react-router-dom";
import REGEX_PATTERN from "../../../config/REGEX";
import "../../../styles/styles.css";
import { postRequest } from "../../../services";
import SnackBarLocal from "../../../components/SnackBar/SnackBarLocal";

export function requestDTO(formData, email, base64Encode) {
  return { ...formData, email, password: base64Encode };
}

function Signup() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [opensnackbar, setSnackbarOpen] = useState({
    setopen: false,
    message: "",
    severity: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen({ setopen: false });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) => {
    const base64Encode = btoa(data.password);
    const email = data.email.toLowerCase();
    const requestPayload = requestDTO(data, email, base64Encode);
    setIsLoading(true);
    postRequest("/auth/signup", requestPayload)
      .then((res) => {
        setSnackbarOpen({
          setopen: true,
          message: res.message,
          severity: "success",
        });
      })
      .catch((err) => {
        setSnackbarOpen({
          setopen: true,
          message: err.message,
          severity: "error",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Container maxWidth="lg">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: "#fafdff", marginTop: "2rem" }}
      >
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Box
              component="div"
              sx={{
                boxShadow: "0px 0px 3px #48B2FF29",
                backgroundColor: "#fff",
                p: 4,
                borderRadius: "8px",
              }}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <Typography align="left" fontSize="2rem" mb={4}>
                  {UI_TEXT.SIGNUP}
                </Typography>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="m-0">
                    <FormControl
                      sx={{ m: 1, width: "25ch" }}
                      variant="outlined"
                    >
                      <TextField
                        {...register("email", {
                          required: ERROR_MESSAGE.REQ_ERROR_MSG,
                          pattern: {
                            value: REGEX_PATTERN.EMAIL_FORMAT,
                            message: ERROR_MESSAGE.EMAIL_VALIDATION,
                          },
                          onChange: (event) => {
                            setValue("email", event.target.value.toLowerCase());
                          },
                        })}
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                      />
                      {errors.email && (
                        <Box>
                          <span className="mandatory">
                            {errors.email.message}
                          </span>
                        </Box>
                      )}
                    </FormControl>
                  </div>
                  <div className="m-0">
                    <FormControl
                      sx={{ m: 1, width: "25ch" }}
                      variant="outlined"
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        Password
                      </InputLabel>
                      <OutlinedInput
                        {...register("password", {
                          required: ERROR_MESSAGE.REQ_ERROR_MSG,
                        })}
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                      />
                      {errors.password && (
                        <Box>
                          <span className="mandatory">
                            {errors.password.message}
                          </span>
                        </Box>
                      )}
                    </FormControl>
                  </div>
                  <div className="m-0">
                    <FormControl
                      sx={{ m: 1, width: "25ch" }}
                      variant="outlined"
                    >
                      <InputLabel id="demo-controlled-open-select-label">
                        Role
                      </InputLabel>
                      <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        label="Role"
                        {...register("role", {
                          required: ERROR_MESSAGE.REQ_ERROR_MSG,
                        })}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {Object.entries(Roles).map(([key, value]) => (
                          <MenuItem key={key} value={value}>
                            {value}
                          </MenuItem>
                        ))}
                      </Select>
                      {errors.role && (
                        <Box>
                          <span className="mandatory">
                            {errors.role.message}
                          </span>
                        </Box>
                      )}
                    </FormControl>
                  </div>
                  <div className="m-1">
                    <Button
                      fullWidth
                      type="submit"
                      size="large"
                      variant="contained"
                      disabled={isLoading}
                      sx={{
                        marginTop: 2,
                        backgroundColor: Color.Orange,
                        fontWeight: 500,
                        m: 1,
                        width: "25ch",
                        "&:hover": {
                          backgroundColor: "gray",
                        },
                      }}
                      startIcon={
                        isLoading && (
                          <CircularProgress size="1rem" color="inherit" />
                        )
                      }
                    >
                      {UI_TEXT.SIGNUP}
                    </Button>
                  </div>
                </div>
              </form>
            </Box>
            <Typography
              sx={{ color: "gray", mx: 4, mt: 1, textAlign: "center" }}
            >
              {UI_TEXT.ALREADY_A_MEMBER}
              <Link
                sx={{
                  color: Color.Orange,
                  "&:hover": {
                    color: "gray",
                  },
                }}
                underline="none"
                as={NavLink}
                to={URL.SIGNIN}
              >
                {` ${UI_TEXT.SIGNIN}`}
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <SnackBarLocal opensnackbar={opensnackbar} handleClose={handleClose} />
    </Container>
  );
}

export default Signup;
