import AppRoutes from "./Routes/AppRoutes.jsx";
import {UserProvider} from "./Context/userContext.jsx";
import {useState} from "react";

function App() {
    const [userSearchedRecipes, setUserSearchedRecipes] = useState(undefined)

    return (
        <UserProvider>
            <AppRoutes recipes={userSearchedRecipes} setRecipes={setUserSearchedRecipes}/>
        </UserProvider>
    )
}

export default App
