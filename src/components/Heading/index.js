import Typography from "@mui/material/Typography";
import React from "react";

const Heading = (props) => (
  <Typography sx={{ my: 3 }} variant="h5" color="primary" align="center">
    {props.text.toUpperCase()}
  </Typography>
);

export default Heading;
