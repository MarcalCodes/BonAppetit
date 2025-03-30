import {Box, Container, Toolbar} from "@mui/material";
import NavBar from "./NavBar.jsx";

/**
 * Copied from https://mui.com/material-ui/react-app-bar/#responsive-app-bar-with-drawer
 */
const BasePageLayout = ({children}) => {
    return (
        <Container sx={{display: 'flex'}}>
            <NavBar/>
            <Box component="main" sx={{p: 3}}>
                <Toolbar/>
                {children}
            </Box>
        </Container>
    )
}

export default BasePageLayout