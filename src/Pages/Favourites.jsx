import BasePageLayout from "../components/BasePageLayout.jsx";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {Grid} from "@mui/material";
import RecipeCard from "../components/RecipeCard.jsx";
import RecipeGrid from "../components/RecipeGrid.jsx";

const Favourites = ({favourites, addFavourite, removeFavourite}) => {
    return (
        <BasePageLayout>
            <Typography variant="h2">My favourite recipes</Typography>
            <Typography variant="h6">&nbsp;</Typography>
            <RecipeGrid>
                {
                    favourites.map((favouriteRecipe, index) =>
                        <Grid key={index}>
                            <RecipeCard
                                key={index}
                                recipe={favouriteRecipe}
                                isFavourite={true}
                                addFavourite={addFavourite}
                                removeFavourite={removeFavourite}
                            />
                        </Grid>
                    )
                }
            </RecipeGrid>
        </BasePageLayout>
    )
}

export default Favourites;
