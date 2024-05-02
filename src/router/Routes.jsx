import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Collections from "../pages/Collection/Collection";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import WishList from "../pages/WishList/WishList";
import Payment from "../pages/PaymentPage/Payment";
import Faq from "../pages/Faq/Faq";
import ShippingAndDelivery from "../pages/ShippingAndDelivery/ShippingAndDelivery";
import ReturnsAndFunds from "../pages/ReturnsAndFunds/ReturnsAndFunds";
import ResetPassWord from "../pages/ResetPassWord/ResetPassWord";
import Test from "../pages/Test/Test";
import Test2 from "../pages/Test2/Test2";


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
                path:'/faqs',
                element:<Faq></Faq>
            },
            {
                path:'/shipping',
                element:<ShippingAndDelivery></ShippingAndDelivery>
            }
            ,
            {
                path:'/return-refund',
                element:<ReturnsAndFunds></ReturnsAndFunds>
            },
            {
                path:'/test',
                element:<Test/>
            },
            {
                path:'/test2',
                element:<Test2/>
            },
           ]
    },
    {
        path:"/payment",
        element:<Payment></Payment>
    },
    
])
export default router;