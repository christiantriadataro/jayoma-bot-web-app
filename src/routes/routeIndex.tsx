import DummyComponent from "../components/layout/DummyComponent.tsx";
import {createBrowserRouter, createRoutesFromElements, Navigate, Route} from "react-router";
import {ROUTER_TABS} from "../constants/ROUTE_TABS.tsx";


const router = createBrowserRouter(
    createRoutesFromElements(
        <>

            <Route path="/" element={<Navigate to="/splash" replace/>}/>
            {ROUTER_TABS.map((tab, index) =>
                <Route key={index} path={tab.path} element={tab.element}/>
            )}
            
            {/* Not Found Page */}
            <Route path="*" element={<Navigate to="/404" replace/>}/>
            <Route path="/not-found" element={<DummyComponent text="Not Found"/>}/>
        </>
    ), {
        future: {
            v7_fetcherPersist: true,
            v7_relativeSplatPath:
                true,
            v7_normalizeFormMethod:
                true,
            v7_partialHydration:
                true,
            v7_skipActionErrorRevalidation:
                true
        }
    }
)

export default router;