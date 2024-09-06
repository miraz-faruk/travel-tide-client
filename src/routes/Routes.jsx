import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllTouristsSpot from "../pages/AllTouristsSpot/AllTouristsSpot";
import PrivateRoutes from "./PrivateRoutes";
import AddTouristsSpot from "../pages/AddTouristsSpot/AddTouristsSpot";
import MyList from "../pages/MyList/MyList";
import SpotDetails from "../pages/SpotDetails/SpotDetails";
import UpdateSpot from "../pages/UpdateSpot/UpdateSpot";
import CountrySpots from "../pages/CountrySpots/CountrySpots";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/all-tourists-spot",
                element: <AllTouristsSpot></AllTouristsSpot>
            },
            {
                path: "/add-tourists-spot",
                element: <PrivateRoutes>
                    <AddTouristsSpot></AddTouristsSpot>
                </PrivateRoutes>
            },
            {
                path: "/my-list",
                element: <PrivateRoutes>
                    <MyList></MyList>
                </PrivateRoutes>
            },
            {
                path: "/spot-details/:id",
                element: <PrivateRoutes>
                    <SpotDetails></SpotDetails>
                </PrivateRoutes>
            },
            {
                path: "/update-spot/:id",
                element: <PrivateRoutes>
                    <UpdateSpot></UpdateSpot>
                </PrivateRoutes>,
            },
            {
                path: "/countries/:countryName/spots",
                element: <CountrySpots></CountrySpots>
            }
            
        ]
    }
]);

export default router;