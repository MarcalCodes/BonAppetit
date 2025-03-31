import React from 'react';
import { Box } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                width: '100%', // Make sure it stretches across
                minHeight: '60px',
                backgroundColor: '#ADD8E6',
                color: 'black',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mt: 'auto', // Push it to the bottom in a flex layout
                px: 2,
                textAlign: 'center',
            }}
        >
            © 2025 Bon Appetit
        </Box>
    );
};

export default Footer;
