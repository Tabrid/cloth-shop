import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Collections from "../pages/Collection/Collection";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import WishList from "../pages/WishList/WishList";
import ResetPassWord from "../pages/ResetPassWord/ResetPassWord";
import Account from "../pages/Account/Account";

import SingleProduct from "../pages/SingleProduct/SingleProduct";
import Contact from "../pages/Contact/Contact";
import Store from "../pages/Store/Store";
import Privacy from "../pages/Privacy/Privacy";
import Return from "../pages/Return/Return";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/collections',
                element: <Collections></Collections>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/sign-up',
                element: <SignUp></SignUp>
            },
            {
                path: '/reset-password',
                element: <ResetPassWord></ResetPassWord>
            },
            {
                path: '/wishlist',
                element: <WishList></WishList>
            },
            {
                path: '/account',
                element: <Account></Account>
            },
            {
                path: '/product',
                element: <SingleProduct></SingleProduct>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/store',
                element: <Store/>
            },
            {
                path: '/privacy',
                element: <Privacy/>
            },
            {
                path: '/privacy',
                element: <Privacy/>
            },
            {
                path: '/return',
                element: <Return/>
            },


        ]
    }
])
export default router;