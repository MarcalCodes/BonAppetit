import BasePageLayout from "../components/BasePageLayout.jsx";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {Grid} from "@mui/material";
import RecipeCard from "../components/RecipeCard.jsx";

const Favourites = ({favourites, addFavourite, removeFavourite}) => {
    return (
        <BasePageLayout>
            <Typography variant="h2">My favourite recipes</Typography>
            <Typography variant="h6">&nbsp;</Typography>
            <Grid container spacing={2} my={2}>
                {
                    favourites.map(favouriteRecipe =>
                        <Grid>
                            <RecipeCard
                                recipe={favouriteRecipe}
                                isFavourite={true}
                                addFavourite={addFavourite}
                                removeFavourite={removeFavourite}
                            />
                        </Grid>
                    )
                }
            </Grid>
        </BasePageLayout>
    )
}

export default Favourites;
