import {RouterProvider} from "react-router";
import router from "./routes/routeIndex.tsx";

const App = () => {
    return (
        <RouterProvider router={router}/>
    )
}

export default App