import { createTheme } from '@mui/material/styles';

const ncuPrimaryColor = "#F58733";
const ncuSecondaryColor = "#891E18";

export const Maintheme = createTheme({
    palette: {
      primary: {
        main: ncuPrimaryColor,
        contrastText: '#fff',
      },
      secondary: {
        main: ncuSecondaryColor,
      },
      ovverides: {
          MuiButton: {

          }
      }
    },
  });