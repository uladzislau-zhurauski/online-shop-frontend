import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import {MASTERS_USERNAME} from "../../consts";
import React from "react";


const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        {MASTERS_USERNAME}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;
