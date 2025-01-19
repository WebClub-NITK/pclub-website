import { Link } from "react-router"
import logo from "../../assets/images/temp-logo.png"
import { FiCamera } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useState } from "react";
import { useTheme } from "../../context/ThemeContext"

export default function Header() {
    const [nav, setNav] = useState(false)
    const { theme } = useTheme()

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <>
            <header className="
                z-10
                fixed top-0 left-0 right-0
                h-[65px]
                bg-navbar bg-opacity-50 backdrop-blur-lg font-test text-primary
                border-b-2 border-b-secondary  
                flex justify-between items-center
                px-10
            ">
                <Link to="/">
                    <img
                        src={logo}
                        alt="PClub Logo"
                        className={`w-[90px] ${theme === 'light' ? 'invert' : ''}`}
                    />
                </Link>
                <div className="hidden md:flex items-center justify-center gap-5">
                    <Link to="/">
                        Events
                    </Link>
                    <Link to="/portfolio">
                        Members
                    </Link>
                    <Link to="/">
                        Blogs
                    </Link>
                    |
                    <Link to="/photo-reels">
                        <div className="flex items-center gap-2">
                            <FiCamera size={20} />
                            <p>Photo Reel</p>
                        </div>
                    </Link>
                </div>
                <div onClick={handleNav} className='block md:hidden'>
                    <AiOutlineMenu size={20} />
                </div>
                <div className="hidden md:block">
                    <div className="flex items-center gap-2">
                        <FaRegUser className="w-[17px] h-[17px]" />
                        <p>Club Member</p>
                    </div>
                </div>

            </header >
            <div className={`fixed ease-in duration-100 ${nav ? "z-20 text-primary left-0 top-0 w-[70%] border-r-2 border-secondary h-screen bg-green/50 backdrop-blur-2xl" : "left-[-100%]"}`}>
                <div className="pt-10 pr-4 flex justify-between flex-col items-end w-[100%] text-primary">
                    <div onClick={handleNav} >
                        <AiOutlineClose size={30} />
                    </div>
                    <ul className='p-4 pt-10 flex flex-col gap-5 w-full'>
                        <Link onClick={handleNav} to="/">
                            Events
                        </Link>
                        <Link onClick={handleNav} to="/portfolio">
                            Members
                        </Link>
                        <Link onClick={handleNav} to="/">
                            Blogs
                        </Link>
                        <hr className="border-tertiary" />
                        <Link onClick={handleNav} to="/photo-reels">
                            <div className="flex items-center gap-2">
                                <FiCamera size={20} />
                                <p>Photo Reel</p>
                            </div>
                        </Link>
                        <hr className="border-tertiary" />
                        <div onClick={handleNav} className="flex items-center gap-2">
                            <FaRegUser className="w-[17px] h-[17px]" />
                            <p>Club Member</p>
                        </div>
                    </ul>
                </div>
            </div >
        </>
    )
}