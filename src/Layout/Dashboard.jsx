import { NavLink, Outlet } from "react-router-dom";
import { FaCartShopping, FaWallet } from "react-icons/fa6";
import {  FaHome, FaUsers, FaUtensils } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoMenu } from "react-icons/io5";
import useCart from "../hooks/useCart";
import { MdRestaurantMenu } from "react-icons/md";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();

   
    const [isAdmin] = useAdmin();


    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary text-white drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side bg-[#1c4659]">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full  text-white">

                    {
                        isAdmin ? <>
                            <li><NavLink to="/dashboard/adminhome"><FaHome />Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/addItem"><FaUtensils />Add an Items</NavLink></li>
                            <li><NavLink to="/dashboard/manageitems"> <IoMenu />Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
                            
                        </> : <>
                            <li><NavLink to="/dashboard/userhome"><FaHome />User Home</NavLink></li>  
                           <li><NavLink to="/dashboard/reservations"><SlCalender></SlCalender> Reservations</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/mycart"><FaCartShopping />My Cart
                                    <span className="badge badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/postreview"><MdReviews></MdReviews>Post Review</NavLink>
                            </li>
                        </>
                       
                    }





                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome />Home</NavLink></li>
                    <li><NavLink to="/menu"> <IoMenu />Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><MdRestaurantMenu />Order Food</NavLink></li>


                </ul>
                    
            </div>
        </div>
        
    );
  
};

export default Dashboard;