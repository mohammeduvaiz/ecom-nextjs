import React, { useState } from 'react'
import { FaBars, FaTimes, FaSistrix, FaShoppingBasket, FaUser } from 'react-icons/fa'

const Header = ({ cartValue }) => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const MenuItems = [
        { name: "Edit", link: "/" },
        { name: "Arrivals", link: "/" },
        { name: "Designers", link: "/" },
        { name: "Clothing", link: "/" },
        { name: "Shoes", link: "/" },
        { name: "Bags", link: "/" },
        { name: "Accessories", link: "/" },
        { name: "Jewelry", link: "/" },
        { name: "Beauty", link: "/" },
        { name: "Home", link: "/" },
    ];
    return (
        <header className='sticky top-0 z-50 grid grid-cols-2 bg-white  p-3 md:px-109'>
            <nav className='flex'>
                {/* left side of the header */}
                <div className='relative cursor-pointer my-auto'>
                    <h1 className='text-black w-[185px] font-normal text-xl' >
                        MY COMPANY.COM
                    </h1>
                </div>
                {/* middle menu of the header */}
                <div className='px-2'>
                    <ul className='hidden md:flex items-center  justify-center p-3 '>
                        {MenuItems.map((menu, index) => (
                            <li key={index} className='px-4  uppercase text-sm font-normal text-black'>
                                {menu.name}
                            </li>
                        ))}
                    </ul>
                    {/* Mobile menu */}
                    <ul
                        className={
                            !nav
                                ? 'hidden'
                                : 'absolute top-0 left-0 w-full h-[100vh] bg-[#fff] flex flex-col justify-center items-center'
                        }
                    >
                        {MenuItems.map((menu, index) => (
                            <li className='py-3 text-sm' key={index}>
                                {menu.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
            {/* right side of the navbar */}
            <div className='flex text-gray-700 space-x-4  items-center justify-end'>
                <FaSistrix />
                <FaShoppingBasket /> {cartValue}
                <FaUser className='hidden md:inline' />
                {/* Hamburger */}
                <div onClick={handleClick} className='md:hidden  z-10 bg-white '>
                    {!nav ? <FaBars className='text-gray-500' /> : <FaTimes className='text-gray-500' />}
                </div>
            </div>
        </header>
    )
}

export default Header