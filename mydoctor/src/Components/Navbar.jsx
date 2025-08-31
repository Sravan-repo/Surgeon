import React, { useState, useRef, useEffect } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import Doco from '../assets/Doco.png'
import { assets } from '../assets/assets'

const Navbar = () => {
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown on outside clicks
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const toggleDropdown = () => setIsOpen((prev) => !prev);


    return (
        <div className='flex items-center justify-between text-sm py-4 mb-4 mt-2 h-14 px-4 md:px-12 w-full'>
            <div className='flex'>
                <img
                    onClick={() => navigate('/')}
                    className='h-50 w-60 cursor-pointer mr-0'
                    src={Doco}
                    alt="logo"
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <div className='flex-1 flex items-center'>
                <ul className='hidden md:flex items-start gap-4 font-medium'>
                    <NavLink to='/'><li className='py-1'>HOME</li></NavLink>
                    <NavLink to='/doctors'><li className='py-1'>DOCTORS</li></NavLink>
                    <NavLink to='/explore-mbbs'><li className='py-1'>EXPLORE MBBS</li></NavLink>
                    <NavLink to='/top-universities'><li className='py-1'>TOP UNIVERSITIES</li></NavLink>

                    <NavLink to='/gallery'><li className='py-1'>GALLERY</li></NavLink>
                    <NavLink to='/about'><li className='py-1'>ABOUT US</li></NavLink>
                    <NavLink to='/contact'><li className='py-1'>CONTACT</li></NavLink>
                    <NavLink to='/faq'><li className='py-1'>FAQ</li></NavLink>
                </ul>

                {/* Profile and Notifications Dropdown */}
                <div className="flex items-center ml-10 gap-4 relative" ref={dropdownRef}>
                    {token ? (
                        <>
                            <div
                                className="flex items-center gap-2 cursor-pointer"
                                onClick={toggleDropdown}
                            >
                                <img
                                    src={assets.profile_pic}
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full border border-gray-200"
                                />
                                <img src={assets.dropdown_icon} alt="Dropdown" className="w-2.5" />
                            </div>

                            {isOpen && (
                                <div className="absolute top-full left-0 mt-1 z-10">
                                    <ul className="flex flex-col min-w-[180px] bg-white shadow-lg rounded-md gap-2 py-2">
                                        <li
                                            onClick={() => {
                                                navigate("/my-profile");
                                                setIsOpen(false);
                                            }}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded"
                                        >
                                            My Profile
                                        </li>
                                        <li
                                            onClick={() => {
                                                navigate("/my-appointments");
                                                setIsOpen(false);
                                            }}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded"
                                        >
                                            My Appointments
                                        </li>
                                        <li
                                            onClick={() => {
                                                setToken(false);
                                                setIsOpen(false);
                                            }}
                                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded text-red-500"
                                        >
                                            Logout
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </>
                    ) : (
                        <button
                            onClick={() => navigate("/login")}
                            className="border border-amber-400 px-6 py-2 rounded-full hover:bg-amber-400 hover:text-white text-black transition-all"
                        >
                            My Account
                        </button>
                    )}
                </div>
            </div>

            <div className='flex items-center gap-4'>
                <img onClick={() => setShowMenu(true)} className='w-6 md:hidden ml-4' src={assets.menu_icon} alt="" />
                <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                    <div className='flex items-center justify-between px-5 py-6'>
                        <img className='w-36' src={Doco} alt="" />
                        <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium' >
                        <NavLink onClick={() => setShowMenu(false)} to='/'> <p className='px-4 py-2 rounded inline-block'>Home</p> </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/doctors'> <p className='px-4 py-2 rounded inline-block'>DOCTORS</p> </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/about'> <p className='px-4 py-2 rounded inline-block'>ABOUT US</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/explore-mbbs'> <p className='px-4 py-2 rounded inline-block'>EXPLORE MBBS</p> </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/top-universities'> <p className='px-4 py-2 rounded inline-block'>TOP UNIVERSITIES</p> </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/gallery'> <p className='px-4 py-2 rounded inline-block'>GALLERY</p> </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/faq'> <p className='px-4 py-2 rounded inline-block'>FAQ</p> </NavLink>
                        <NavLink onClick={() => setShowMenu(false)} to='/my-profile'> <p className='px-4 py-2 rounded inline-block'>MY PROFILE</p> </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar