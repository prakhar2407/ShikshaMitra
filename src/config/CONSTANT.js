import { orange } from "@mui/material/colors";

export const NCU_WEB_URL = "https://www.ncuindia.edu/";

export const DEFAULT_LANGUAGE = "en";

export const dateConfig = {
  format1: "dddd, MMM Do",
  format2: "DD/MM",
  format3: "DD/MM/YYYY",
  format4: "ddd, MMM DD",
  format5: "YYYY-MM-DD",
};

export const UI_TEXT = {
  SIGNUP: "Signup",
  SIGNIN: "Signin",
  FORGOT_PASSWORD: "Forgot Password?",
  EMAIL: "Email",
  PASSWORD: "Password",
  ROLE: "Role",
  ALREADY_A_MEMBER: "Already a member?",
  NEW_TO_WEBSITE: "New to Shikshamitra?",
  WEBSITE_NAME: "ShikshaMitra",
};

export const URL = {
  FORGOT_PASSWORD: "",
  SIGNIN: "/auth/signin",
  SIGNUP: "/auth/signup",
};

export const Color = {
  Orange: orange[500],
};

export const ERROR_MESSAGE = {
  REQ_ERROR_MSG: "This field is mandatory",
  EMAIL_VALIDATION: "Please enter a valid email ID including @",
};

export const STATUS_CODE = {
  SUCCESSFULLY_LOGIN: 158,
  SUCCESSFULLY_LOGOUT: 166,
  USRE_NOTFOUND: 140,
  INVALID_TOKEN: 141,
  EXPIRE_TOKEN: 142,
  PASSWORD_RESET_MAIL_SENT: 149,
  CONFIRM_TOKEN_SUCCESS: 143,
  INVALID_PASSWORD_RESET_TOKEN: 146,
  CONFIRM_RESEND_OLD_TOKEN_SUCCESS: 150,
  UPDATE_PASSWORD_SUCCESSFULLY: 152,
  RESEND_EMAIL_OF_DISABLE_ACCOUNTS: 154,
  INVALID_CREDENTIALS: 153,
  SAVE_A_NEW_PASSWORD: 148,
  AUTH401: 401,
  USER_NOT_LOGGED_IN: 108,
  FEEDBACK_SUBMITTED_SUCCESSFULLY: 194,
  EXCEEDED_ATTEMPTS_TO_GENERATE_TOKEN_FOR_PASSWORD_RESET: 159,
  EMPLOYER_APPROVAL_PENDING: 208,
};
