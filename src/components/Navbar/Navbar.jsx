import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { useShopping } from "../../context/ShoppingContext";
import { IoMenu } from "react-icons/io5";


const Navbar = () => {
    const location = useLocation();
    const { cart, wishlist } = useShopping();
    const navbarStyle = location.pathname === "/" ? "bg-purple-700 text-purple-300" : "bg-white text-black";
    const links = <>
        <li><NavLink to={"/"} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
        }>Home</NavLink></li>
        <li><NavLink to={"statistics"} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
        }>Statistics</NavLink></li>
        <li><NavLink to={"dashboard"} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
        }>Dashboard</NavLink></li>
        <li><NavLink to={"faqs"} className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
        }>FAQs</NavLink></li>
    </>
    return (
        <div className={`navbar ${navbarStyle} w-11/12 mx-auto mt-10 rounded-t-3xl`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <IoMenu className="size-6"/>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <FaShoppingCart></FaShoppingCart>
                        <span className="badge badge-sm indicator-item">{cart.length}</span>
                    </div>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <FaHeart></FaHeart>
                        <span className="badge badge-sm indicator-item">{wishlist.length}</span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Navbar;