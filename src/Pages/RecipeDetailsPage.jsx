import {useParams} from "react-router-dom";

const RecipeDetailsPage = () => {
    const params = useParams();
    const recipeId = params.recipeId

    return (
        <div className="RecipeDetails">
            <h1>Recipe #{recipeId}</h1>
        </div>
    )
}

export default RecipeDetailsPage