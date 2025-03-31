import AppRoutes from "./Routes/AppRoutes.jsx";
import {UserProvider} from "./Context/userContext.jsx";

function App() {

    return (
        <UserProvider>
            <AppRoutes/>
        </UserProvider>
    )
}

export default App
