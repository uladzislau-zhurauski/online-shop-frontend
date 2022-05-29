import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import React from "react";
import {TEXT404} from "../../consts";

const NotFound = () => (
    <Container sx={{ mt: 5 }}>
        <Typography variant="h5" align="center" color="text.primary">
            {TEXT404}
        </Typography>
    </Container>
);

export default NotFound;
