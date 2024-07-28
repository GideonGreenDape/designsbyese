import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { Provider } from 'react-redux';
import store from "./store/store.js"
import HomePage from './Routes/Homepage.jsx';
import ErrorPage from './Routes/errorPage.jsx';
import BuyProduct from './Routes/product.jsx';
import ReadyToWear from './Routes/readytowear.jsx';
import CustomMade from './Routes/customwear.jsx';
import BespokePage from './Routes/bespokePage.jsx';
import KiddiesPage from './Routes/kiddies.jsx';
import BespokeProductPage from './Routes/bespokeproduct.jsx';
import SignInPage from './Routes/signIn.jsx';
import ResetPage from './Routes/ResetPage.jsx';
import VerificationPage from './Routes/verificationPage.jsx';
import CartPage from './Routes/cartPage.jsx';
import DetailsPage from './Routes/DetailsPage.jsx';
import ShippingPage from './Routes/shippingPage.jsx';
import OrderHistory from './Routes/orderHistory.jsx';

const router= createBrowserRouter(
  [
    {
      path: "/",
      element: <HomePage />,
      errorElement: <ErrorPage />
    },
    {
      path: "products/:productId",
      element: <BuyProduct />,
      errorElement: <ErrorPage />
    },
    {
      path: "/ready_to_wear",
      element: <ReadyToWear />,
      errorElement: <ErrorPage />
    },
    {
      path: "/custom_made",
      element: <CustomMade />,
      errorElement: <ErrorPage />
    },
    {
      path: "/bespoke",
      element: <BespokePage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/kiddies",
      element: <KiddiesPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/bespoke_products/:productId",
      element: <BespokeProductPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/account",
      element: <SignInPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/reset_password",
      element: <ResetPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/account_verification",
      element: <VerificationPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/account_cart",
      element: <CartPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/account_signUp",
      element: <DetailsPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/account_address",
      element: <ShippingPage />,
      errorElement: <ErrorPage />
    },
    {
      path: "/order_history",
      element: <OrderHistory />,
      errorElement: <ErrorPage />
    },
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
