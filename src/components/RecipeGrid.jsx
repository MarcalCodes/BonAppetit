import {Grid} from "@mui/material";
import * as React from "react";

const RecipeGrid = ({children}) => {
    return (
        <Grid container spacing={2} my={2} gap={4}>
            {children}
        </Grid>
    )
}

export default RecipeGrid