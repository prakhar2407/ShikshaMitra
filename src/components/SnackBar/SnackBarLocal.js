import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SnackBarLocal(props) {
  const { opensnackbar, handleClose } = props;

  return (
    <Snackbar
      open={opensnackbar.setopen}
      autoHideDuration={4000}
      onClose={handleClose}
    >
      {opensnackbar.message && (
        <Alert
          onClose={handleClose}
          severity={opensnackbar.severity}
          sx={{ width: "100%" }}
        >
          {opensnackbar.message}
        </Alert>
      )}
    </Snackbar>
  );
}

export default SnackBarLocal;
