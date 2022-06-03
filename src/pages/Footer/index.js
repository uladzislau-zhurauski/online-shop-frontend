import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Copyright from "../../components/Copyright";


const StickyFooter = () => {
    return (
        <Box
            component="footer"
            sx={{ py: 3, px: 2, mt: 'auto' }}
        >
            <Container maxWidth="sm">
                <Copyright />
            </Container>
        </Box>
    );
}

export default StickyFooter;
