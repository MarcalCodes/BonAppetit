import BasePageLayout from "../BasePageLayout.jsx";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {Grid} from "@mui/material";
import RecipeCard from "../components/RecipeCard.jsx";

const Favourites = () => {
    return (
        <BasePageLayout>
            <Typography variant="h2">My favourite recipes</Typography>
            <Typography variant="h6">&nbsp;</Typography>
            <Grid container spacing={2} my={2}>
                <Grid>
                    <RecipeCard isFavourite={true}/>
                </Grid>
                <Grid>
                    <RecipeCard isFavourite={true}/>
                </Grid>
                <Grid>
                    <RecipeCard isFavourite={true}/>
                </Grid>
                <Grid>
                    <RecipeCard isFavourite={true}/>
                </Grid>
                <Grid>
                    <RecipeCard isFavourite={true}/>
                </Grid>
                <Grid>
                    <RecipeCard isFavourite={true}/>
                </Grid>
            </Grid>
        </BasePageLayout>
    )
}

export default Favourites;
