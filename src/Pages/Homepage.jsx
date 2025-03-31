import RecipeCard from "../components/RecipeCard.jsx";
import {Box, FormGroup, Grid, TextField} from "@mui/material";
import BasePageLayout from "../components/BasePageLayout.jsx";
import Typography from "@mui/material/Typography";
import * as React from "react";
import {useState} from "react";
import Button from "@mui/material/Button";
import TheMealDBClient from "../Clients/TheMealDBClient.js";


const Homepage = () => {
    const [userSearchedRecipes, setUserSearchedRecipes] = useState(undefined)

    const handleFindRecipeByName = async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target))
        const foundRecipes = await TheMealDBClient.searchRecipesByName(data.userFilter)
        setUserSearchedRecipes(foundRecipes)
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
            <Grid container spacing={2} my={2} gap={4}>
                {
                    userSearchedRecipes === undefined
                        ? <Box/> // user just arrived on the page and didn't search yet for anything
                        : userSearchedRecipes.length === 0
                            ? <Typography>No Recipe found</Typography>
                            : userSearchedRecipes.map((recipe, index) =>
                                <Grid key={index}>
                                    <RecipeCard
                                        key={index}
                                        id={recipe.idMeal}
                                        name={recipe.strMeal}
                                        image={recipe.strMealThumb}
                                        category={recipe.strCategory}
                                        area={recipe.strArea}
                                        isFavourite={false}/>
                                </Grid>
                            )
                }
            </Grid>
        </BasePageLayout>
    )
}

export default Homepage