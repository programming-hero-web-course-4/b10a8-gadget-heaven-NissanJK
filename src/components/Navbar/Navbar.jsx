import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
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
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
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
                <button class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span class="badge badge-sm indicator-item">0</span>
                    </div>
                </button>
                <button class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            class="inline-block h-5 w-5 stroke-current">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                        <span class="badge badge-sm indicator-item">0</span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Navbar;