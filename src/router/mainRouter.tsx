import {createBrowserRouter} from "react-router-dom"
import FirstLayout from "../components/common/FirstLayout"
import HomeScreen from "../pages/screen/HomeScreen"
import SigninScreen from "../pages/auth/SigninScreen"
import SignupScreen from "../pages/auth/SignupScreen"
import Layout from "../components/common/Layout"
import LandingScreen from "../pages/auth/LandingScreen"

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <FirstLayout/>,
        children: [
            {
                index: true,
                element: <LandingScreen/>
            }
        ]
    },
    {
        path: "/sign-in",
        element: <SigninScreen/>
    },
    {
        path: "/sign-up",
        element: <SignupScreen/>
    },
    {
        path: "/home",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <HomeScreen/>
            }
        ]
    }
])