import { useState } from 'react';
import { useContext } from 'react';
import { TabContext } from '../../context/TabContext';


export default function Tabs() {
    // using the tab's global context 
    const {navItems, activeItem, setActiveItem} = useContext(TabContext);

    return (
        <nav className="w-full overflow-x-auto flex justify-start sm:justify-center items-center px-2 sm:px-4 lg:px-8 ">
            <div className="flex items-center gap-2 flex-wrap">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setActiveItem(item.name)}
                        className={`border-[1.2px] py-2 px-4 text-sm sm:text-md lg:text-lg text-black font-bold transition-colors rounded-full ${
                            activeItem === item.name
                                ? 'border-black text-black'
                                : 'border-transparent text-gray-600 hover:text-gray-900'
                        }`}
                    >
                        {item.name}
                    </a>
                ))}
            </div>
        </nav>
    );
}
