import {RouterProvider} from "react-router";
import router from "./routes/routeIndex.tsx";
import ThemeProvider from "./contexts/ThemeProvider.tsx";


const App = () => {
    return (
        <ThemeProvider>
            <RouterProvider router={router}/>
        </ThemeProvider>
    )
}

export default App