import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import { createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/Register.jsx';

// Private route is a route that is only accessible to authenticated users. It checks if the user is authenticated before rendering the component. If the user is not authenticated, it redirects them to the login page.
import PrivateRoute from './components/PrivateRoute.jsx';

// Admin route is a route that is only accessible to authenticated users with admin privileges. It checks if the user is authenticated and has admin privileges before rendering the component. If the user is not authenticated or does not have admin privileges, it redirects them to the login page.
import AdminRoute from './pages/Admin/AdminRoute.jsx';

import Profile from './pages/User/Profile.jsx';
import UserList from './pages/Admin/UserList.jsx';
import CategoryList from './pages/Admin/CategoryList.jsx';
import ProductList from './pages/Admin/ProductList.jsx';
import AllProducts from './pages/Admin/AllProducts.jsx';
import AdminProductUpdate from './pages/Admin/ProductUpdate.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';

import Favorites from './pages/Products/Favorites.jsx';
import ProductDetails from './pages/Products/ProductDetails.jsx';
import Cart from './pages/Cart.jsx';
import Home from './pages/Home.jsx';
import Shop from './pages/Shop.jsx';
import Shipping from './pages/Order/Shipping.jsx';
import PlaceOrder from './pages/Order/PlaceOrder.jsx';
import Order from './pages/Order/Order.jsx';

import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import OrderList from './pages/Admin/OrderList.jsx';
import UserOrder from './pages/User/UserOrder.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route index={true} path="/" element={<Home />} />
      <Route path="/favorite" element={<Favorites />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shop" element={<Shop />} />

      {/* Registered users */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/user-order" element={<UserOrder />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
        <Route path="/order/:id" element={<Order />} />
      </Route>

      {/* Admin route */}
      <Route path="/admin" element={<AdminRoute />}>
        <Route path="userlist" element={<UserList />} />
        <Route path="categorylist" element={<CategoryList />} />
        <Route path="productlist" element={<ProductList />} />
        <Route path="allproductslist" element={<AllProducts />} />
        <Route path="productlist/:pageNumber" element={<ProductList />} />
        <Route path="product/update/:_id" element={<AdminProductUpdate />} />
        <Route path="orderlist" element={<OrderList />} />
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PayPalScriptProvider>
      <RouterProvider router={router} />
    </PayPalScriptProvider>
  </Provider>
);
