import {Link, useParams} from "react-router-dom";
import {Grid} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import BasePageLayout from "../BasePageLayout.jsx";

const RecipeDetailsPage = () => {
    const params = useParams();
    const recipeId = params.recipeId

    return (
        <BasePageLayout>
            <Grid container spacing={2} my={2}>
                <Grid size={8}>
                    <h1>Recipe #{recipeId}</h1>
                </Grid>
                <Grid size={4}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="http://mui.com/static/images/cards/contemplative-reptile.jpg"
                    />
                </Grid>
                <Grid container spacing={2} my={2} >
                    <Grid size={6} >
                        <ul>
                            <li>Pork</li>
                            <li>Chicken</li>
                            <li>Butter</li>
                        </ul>
                    </Grid>
                    <Grid size={6} >
                        <ul>
                            <li>Beef</li>
                            <li>Duck</li>
                            <li>Oil</li>
                        </ul>
                    </Grid>
                </Grid>
            </Grid>
        </BasePageLayout>
    )
}

export default RecipeDetailsPage