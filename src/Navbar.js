import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-primery-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold">
                        <li className='mt-3'>Complete Task</li>
                        <li className='mt-3'>To Do </li>
                        <li className='mt-3'>Calender</li>
                    </ul>
                </div>
                <h1 className="normal-case font-bold text-xl">End Game Task</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 font-bold">
                    <li className='mx-6'>Complete Task</li>
                    <li className='mx-6'>To Do</li>
                    <li className='mx-6'>Calender</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;