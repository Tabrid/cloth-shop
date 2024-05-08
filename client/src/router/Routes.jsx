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
import Information from "../pages/PaymentPage/information/Information";
import Shipping from "../pages/PaymentPage/Shipping/Shipping";
import GatewayPage from "../pages/PaymentPage/GatewayPage/GatewayPage";
import Return from "../pages/Return/Return";
import GiftCard from "../pages/GiftCard/GiftCard";
import OurImpact from "../pages/OurImpact/OurImpact";
import OurStory from "../pages/OurStory/OurStory";
import Press from "../pages/Press/Press";
import CookiePolicy from "../pages/CookiePolicy/CookiePolicy";
import Privacy from "../pages/Privacy/Privacy";
import Terms from "../pages/Terms/Terms";
import SingleProduct from "../pages/SingleProduct/SingleProduct";
import Account from "../pages/Account/Account";
import Store from "../pages/Store/Store";
import Contact from "../pages/Contact/Contact";
import ColorImageDisplay from "../pages/ColorImageDisplay/ColorImageDisplay";


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
                path:'/return',
                element:<Return/>
            },
            {
                path:'/test',
                element:<Test/>
            },
            {
                path:'/test2',
                element:<Test2/>
            },
            {
                path:'/gift-card',
                element:<GiftCard/>
            },
            {
                path:'/our-impact',
                element:<OurImpact/>
            },
            {
                path:'/our-story',
                element:<OurStory/>
            },
            {
                path:'/press',
                element:<Press/>
            },
            {
                path:'/cookie-policy',
                element:<CookiePolicy/>
            },
            {
                path:'/privacy-policy',
                element:<Privacy/>
            },
            {
                path:'/terms-conditions',
                element:<Terms/>
            },
            {
                path:'/single-product',
                element:<SingleProduct/>
            },
            {
                path:'/account',
                element:<Account/>
            },
            {
                path:'/store',
                element:<Store/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/image',
                element:<ColorImageDisplay/>
            },
           ]
    },
    {
        path:"payment/",
        element:<Payment></Payment>,
        children:[
            {
                path:'information',
                element:<Information></Information>
            },
            {
                path:'shipping',
                element:<Shipping></Shipping>
            }
            ,
            {
                path:'payment-method',
                element:<GatewayPage></GatewayPage>
            }
        ]
    },
    
])
export default router;