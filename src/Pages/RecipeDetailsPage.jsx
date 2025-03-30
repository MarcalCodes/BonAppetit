import {useParams} from "react-router-dom";
import {Grid} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import BasePageLayout from "../BasePageLayout.jsx";
import Typography from "@mui/material/Typography";

const RecipeDetailsPage = () => {
    const params = useParams();
    const recipeId = params.recipeId

    return (
        <BasePageLayout>
            <Grid container spacing={2} my={2}>
                <Grid size={8}>
                    <Typography align="center" variant="h2">Lizard chops</Typography>
                </Grid>
                <Grid size={4}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="http://mui.com/static/images/cards/contemplative-reptile.jpg"
                    />
                </Grid>
                <Grid size={12}>
                    <Typography variant="h5">Ingredients</Typography> {/* TODO Ingrid: Put that alongside the ingredient list  */}
                </Grid>
                <Grid container size={12}>
                    <Grid size={6}>
                        <ul>
                            <li>Pork</li>
                            <li>Chicken</li>
                            <li>Butter</li>
                        </ul>
                    </Grid>
                    <Grid size={6}>
                        <ul>
                            <li>Beef</li>
                            <li>Duck</li>
                            <li>Oil</li>
                        </ul>
                    </Grid>
                </Grid>
                <Grid size={12}>
                    <Typography variant="h5">Instruction</Typography>
                    <Typography variant="p" component="p">
                        Place the raisins and prunes into a small bowl and pour over enough water to cover.
                        Add lemon juice and let soak for at least 1 hour.
                        Drain.
                        Roughly chop the prunes.
                        Meanwhile, heat the butter in a large pan, add the onion, and cook for 5 minutes.
                        Add cubed lamb, ground lamb, and crushed garlic cloves.
                        Fry for 5 minutes, stirring constantly until browned.
                        Pour 2/3 cup (150 milliliters) of stock into the pan.
                        Bring to a boil, then lower the heat, cover, and simmer for 1 hour, or until the lamb is tender.
                        Add the remaining stock and bring to a boil.
                        Add rinsed long-grain white rice and a large pinch of saffron.
                        Stir, then cover, and simmer for 15 minutes, or until the rice is tender.
                        Add the drained raisins, drained chopped prunes, and salt and pepper to taste.
                        Heat through for a few minutes, then turn out onto a warmed serving dish and garnish with sprigs
                        of flat-leaf parsley.
                    </Typography>
                </Grid>
            </Grid>
        </BasePageLayout>
    )
}

export default RecipeDetailsPage