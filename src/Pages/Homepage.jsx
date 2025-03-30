import RecipeCard from "../components/RecipeCard.jsx";
import {Grid} from "@mui/material";
import BasePageLayout from "../BasePageLayout.jsx";


const Homepage = () => {
    return (
        <BasePageLayout>
            <h1>Welcome</h1>
            <h3>Choose a recipe</h3>
            <Grid container spacing={2} my={2}>
                <Grid>
                    <RecipeCard/>
                </Grid>
                <Grid>
                    <RecipeCard/>
                </Grid>
                <Grid>
                    <RecipeCard/>
                </Grid>
                <Grid>
                    <RecipeCard/>
                </Grid>
                <Grid>
                    <RecipeCard/>
                </Grid>
                <Grid>
                    <RecipeCard/>
                </Grid>
            </Grid>
        </BasePageLayout>
    )
}

export default Homepage