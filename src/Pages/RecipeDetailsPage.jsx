import {useParams} from "react-router-dom";
import {CircularProgress, Grid, ListItem, ListItemText} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import {useEffect, useState} from "react";
import BasePageLayout from "../components/BasePageLayout.jsx";
import Typography from "@mui/material/Typography";
import TheMealDBClient from "../Clients/TheMealDBClient.js";
import List from '@mui/material/List';


const RecipeDetailsPage = () => {
    const [currentRecipe, setCurrentRecipe] = useState(undefined)

    const params = useParams();
    const recipeId = params.recipeId

    useEffect(() => {
        TheMealDBClient
            .findRecipeById(recipeId)
            .then(recipe => setCurrentRecipe(recipe))
    }, [recipeId])

    const ingredients = () => {
        return [
            currentRecipe.strIngredient1,
            currentRecipe.strIngredient2,
            currentRecipe.strIngredient3,
            currentRecipe.strIngredient4,
            currentRecipe.strIngredient5,
            currentRecipe.strIngredient6,
            currentRecipe.strIngredient7,
            currentRecipe.strIngredient8,
            currentRecipe.strIngredient9,
            currentRecipe.strIngredient10,
            currentRecipe.strIngredient11,
            currentRecipe.strIngredient12,
            currentRecipe.strIngredient13,
            currentRecipe.strIngredient14,
            currentRecipe.strIngredient15,
            currentRecipe.strIngredient16,
            currentRecipe.strIngredient17,
            currentRecipe.strIngredient18,
            currentRecipe.strIngredient19,
            currentRecipe.strIngredient20,
        ].filter(ing => ing !== undefined && ing !== null && ing !== "")
    }

    const showPageContent = () => {
        return (
            <Grid container spacing={2} my={2}>
                <Grid size={12}>
                    <Typography variant="h2">{currentRecipe.strMeal}</Typography>
                </Grid>
                <Grid size={12}>
                    <CardMedia
                        component="img"
                        alt="recipe image"
                        height="350"
                        sx={{maxWidth: 'md'}}
                        image={currentRecipe.strMealThumb}
                    />
                </Grid>
                <Grid size={12}>
                    <Typography
                        variant="h5">Ingredients</Typography> {/* TODO: Put that alongside the ingredient list  */}
                </Grid>
                <Grid container size={12}>
                    <List
                        dense={true}
                        // CSS comes from https://stackoverflow.com/a/69369691/29476271
                        sx={{
                        display: "flex",
                        flexFlow: "column wrap",
                        height: 300, // set the height limit to your liking
                        width: '50%',
                    }}>
                        {ingredients().map(ingredient =>
                            <ListItem>
                                <ListItemText primary={ingredient}/>
                            </ListItem>
                        )}
                    </List>
                </Grid>
                <Grid size={12}>
                    <Typography variant="h5" sx={{mb: 2}}>Instruction</Typography>
                    <Typography component="div" sx={{maxWidth: '75%', whiteSpace: 'normal'}} >{currentRecipe.strInstructions}</Typography>
                </Grid>
            </Grid>
        )
    }

    return (
        <BasePageLayout>
            {
                currentRecipe ? showPageContent() : <CircularProgress/>
            }
        </BasePageLayout>

    )
}

export default RecipeDetailsPage