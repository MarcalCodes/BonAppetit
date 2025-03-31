import AppRoutes from "./Routes/AppRoutes.jsx";
import {UserProvider} from "./Context/userContext.jsx";
import {useState} from "react";

const App = () => {
    const [userSearchedRecipes, setUserSearchedRecipes] = useState(undefined)
    const [favouriteRecipes, setFavouriteRecipes] = useState([])

    const addFavouriteRecipe = (recipe) => {
        setFavouriteRecipes([...favouriteRecipes, recipe])
    }

    const removeFavouriteRecipe = (recipe) => {
        setFavouriteRecipes(favouriteRecipes.filter((r) => r.idMeal !== recipe.idMeal))
    }

    const isFavouriteRecipe = (recipe) => {
        return favouriteRecipes.includes(recipe)
    }

    return (
        <UserProvider>
            <AppRoutes
                recipes={userSearchedRecipes}
                setRecipes={setUserSearchedRecipes}
                favourites={favouriteRecipes}
                addFavourite={addFavouriteRecipe}
                removeFavourite={removeFavouriteRecipe}
                isFavourite={isFavouriteRecipe}
            />
        </UserProvider>
    )
}

export default App
