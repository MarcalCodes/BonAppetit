import RecipeCard from "../components/RecipeCard.jsx";
import {Grid} from "@mui/material";
import BasePageLayout from "../BasePageLayout.jsx";
import Typography from "@mui/material/Typography";
import * as React from "react";


const Homepage = () => {
    return (
        <BasePageLayout>
            <Typography variant="h2">Welcome</Typography>
            <Typography variant="h6">Choose a recipe</Typography>
            <Grid container spacing={2} my={2}>
                <Grid>
                    <RecipeCard isFavourite={false}/>
                </Grid>
                <Grid>
                    <RecipeCard isFavourite={false}/>
                </Grid>
                <Grid>
                    <RecipeCard isFavourite={false}/>
                </Grid>
                <Grid>
                    <RecipeCard isFavourite={false}/>
                </Grid>
                <Grid>
                    <RecipeCard isFavourite={false}/>
                </Grid>
                <Grid>
                    <RecipeCard isFavourite={false}/>
                </Grid>
            </Grid>
        </BasePageLayout>
    )
}

export default Homepage