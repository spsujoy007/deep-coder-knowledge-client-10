import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import BannerItem from "../../Pages/BannerItem/BannerItem";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import Courses from "../../Pages/Courses/Courses";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Login/Register";
import PrivetRote from "../../Pages/PrivetRoute/PrivetRote";
import Profile from "../../Pages/Profile/Profile";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <BannerItem></BannerItem>
            },
            {
                path: '/courses',
                loader: () => fetch('https://deep-coder.vercel.app/courses'),
                element: <Home></Home>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                loader: ({params}) => fetch(`https://deep-coder.vercel.app/category/${params.id}`),
                element: <Courses></Courses>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <PrivetRote><Profile></Profile></PrivetRote>
            },
            {
                path: '/checkout/:id',
                loader: ({params}) => fetch(`https://deep-coder.vercel.app/category/${params.id}`),
                element: <PrivetRote><Checkout></Checkout></PrivetRote>
            }
        ]
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
])