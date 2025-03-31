import {Box, Container, Toolbar} from "@mui/material";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";



/**
 * Copied from https://mui.com/material-ui/react-app-bar/#responsive-app-bar-with-drawer
 */
const BasePageLayout = ({children}) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"
        >
            <NavBar/>

            <Box component="main" sx={{ flexGrowp: 1, py: 3}}>
                <Toolbar/>
                <Container maxWidth="lg">
                    {children}
                </Container>
            </Box>

            <Footer />
        </Box>
    );
};

export default BasePageLayout
