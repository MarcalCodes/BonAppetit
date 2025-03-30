import RecipeCard from "../components/RecipeCard.jsx";
import {Grid} from "@mui/material";


const Homepage = () => { // Save in pages/Homepage.jsx
    return (
        <div className="Homepage">
            <h1>Welcome</h1>
            <Grid container spacing={2} my={2}>
                {/* Inner Grids (columns) are items */}
                <Grid> {/* use 4/12 columns on xs screens up */}
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
        </div>
    )
}

export default Homepage