import RecipeCard from "../components/RecipeCard.jsx";
import {Box, FormGroup, Grid, TextField} from "@mui/material";
import BasePageLayout from "../components/BasePageLayout.jsx";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Button from "@mui/material/Button";
import {searchRecipesByName} from "../api/TheMealDbApi.js";
import RecipeGrid from "../components/RecipeGrid.jsx";


const Homepage = ({recipes, setRecipes, isFavourite, addFavourite, removeFavourite}) => {

    const handleFindRecipeByName = async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target))
        const foundRecipes = await searchRecipesByName(data.userFilter)
        setRecipes(foundRecipes)
    }

    return (
        <BasePageLayout>
            <Typography variant="h2">Welcome</Typography>
            <Typography variant="h6">&nbsp;</Typography>
            <Box sx={{mb: 6}}>
                <form onSubmit={handleFindRecipeByName}>
                    <FormGroup row>
                        <TextField sx={{width: 1 / 3}} id="outlined-basic" label="Find a recipe by name"
                                   variant="outlined"
                                   size="small" name="userFilter"/>
                        <Button type="submit" variant="contained" size="medium" disableElevation>Find recipe</Button>
                    </FormGroup>
                </form>
            </Box>
            <RecipeGrid>
                {
                    recipes === undefined
                        ? <Box/> // user just arrived on the page and didn't search yet for anything
                        : recipes.length === 0
                            ? <Typography>No Recipe found</Typography>
                            : recipes.map((recipe, index) =>
                                <Grid key={index}>
                                    <RecipeCard
                                        key={index}
                                        recipe={recipe}
                                        isFavourite={isFavourite(recipe)}
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

export default Homepage