import RecipeCard from "../components/RecipeCard.jsx";
import {FormGroup, Grid, TextField} from "@mui/material";
import BasePageLayout from "../BasePageLayout.jsx";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Button from "@mui/material/Button";


const Homepage = () => {

    const handleFindRecipeByName = (e) => {
        e.preventDefault();
        alert("sent")
    }

    return (
        <BasePageLayout>
            <Typography variant="h2">Welcome</Typography>
            <Typography variant="h6">&nbsp;</Typography>
            <form onSubmit={handleFindRecipeByName} >
                <FormGroup row>
                    <TextField sx={{ width: 1/3 }} id="outlined-basic" label="Find a recipe by name" variant="outlined" size="small" />
                    <Button type="submit" variant="contained" size="medium" disableElevation>Find recipe</Button>
                </FormGroup>
            </form>
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