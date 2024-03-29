import app from '../../src/App'
import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from '../pages/Menu/Menu/Menu';
import Order from '../pages/Order/Order/Order';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';
import Secret from '../pages/Shared/Secret/Secret';
import Dashboard from '../Layout/Dashboard';
import MyCart from '../pages/Dashboard/MyCart/MyCart';
import AllUsers from '../pages/Dashboard/AllUsers/AllUsers';
import AddItem from '../pages/Dashboard/AddItem/AddItem';
import AdminRoute from './AdminRoute';
import ManageItem from '../pages/Dashboard/ManageItems/ManageItem';
import Payment from '../pages/Dashboard/Payment/Payment';
import UserHome from '../pages/Dashboard/UserHome/UserHome'
import AdminHome from '../pages/Dashboard/AdminHome/AdminHome';
import Reaservations from '../pages/Dashboard/Reservations/Reaservations';
import PostReview from '../pages/Dashboard/PostReview/PostReview';
import ProceedToCheckout from '../pages/Dashboard/ProceedToCheckout/ProceedToCheckout';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: 'order/:category',
        element: <Order></Order>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
    ],
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'userhome',
        element: <UserHome></UserHome>
      },
      {
        path: 'mycart',
        element: <MyCart></MyCart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'reservations',
        element: <Reaservations></Reaservations>
      },
      {
        path: 'postreview',
        element: <PostReview></PostReview>
      },
      {
        path: 'proceedtocheckout',
        element: <ProceedToCheckout></ProceedToCheckout>
      },
      {
        path: 'adminhome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: 'allusers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'addItem',
        element: <AdminRoute><AddItem></AddItem></AdminRoute>
      },
      {
        path: 'manageitems',
        element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
      }

    ]
  }

]);