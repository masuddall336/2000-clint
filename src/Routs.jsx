import {
  createBrowserRouter
} from "react-router";
import Root from "./Root";
import Home from "./pages/home/Home";
import AddProducts from "./pages/add_products/AddProducts";
import ProductDetails from "./pages/Product_details/ProductDetails";
import UpdateProduct from "./pages/update-products/UpdateProduct";
import SignIn from "./pages/sign-in/SignIn";
import SignaUp from "./pages/Sign-up/SignaUp";
import Users from "./pages/users/Users";

let router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        loader: () => fetch('https://2000-server.vercel.app/products'),
        Component: Home
      },
      {
        path: '/add-products',
        Component: AddProducts
      },
      {
        path: '/update-product/:id',
        loader: ({ params }) => fetch(`https://2000-server.vercel.app/products/${params.id}`),
        Component: UpdateProduct
      },
      {
        path: '/product-details/:id',
        loader: ({ params }) => fetch(`https://2000-server.vercel.app/products/${params.id}`),
        Component: ProductDetails
      },
      {
        path: '/login',
        Component: SignIn
      },
      {
        path: '/sign-up',
        Component: SignaUp
      },
      {
        path: '/users',
        loader: () => fetch('https://2000-server.vercel.app/users'),
        Component: Users
      }
    ]
  }
]);

export { router }