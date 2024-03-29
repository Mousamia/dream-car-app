/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Listing from "../pages/Listing/Listing";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },

            {
                path: 'listing',
                element: <Listing/>
            },
            {
                path: 'blog',
                element: <Blog/>
            },
        
        ]
    }
])


export default router;