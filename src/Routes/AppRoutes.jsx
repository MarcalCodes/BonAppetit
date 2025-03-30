import PageNotFound from "../Pages/PageNotFound.jsx";
import {Route, Routes} from "react-router-dom";
import Homepage from "../Pages/HomePage.jsx";
import Favourites from "../Pages/Favourites.jsx";
import RecipeDetailsPage from "../Pages/RecipeDetailsPage.jsx";

function AppRoutes(props) {

    return (
        <Routes>
            {/* index matches on default/home URL: / */}
            <Route index element={<Homepage {...props} />}/>
            <Route path='/recipe/:recipeId' element={<RecipeDetailsPage{...props}/>}/>
            <Route path='/favourites' element={<Favourites{...props}/>}/>

            {/* special route to handle if none of the above match */}
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    )
}

export default AppRoutes;