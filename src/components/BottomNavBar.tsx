'use client';

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
    // BiGrid,
    // BiSpa,
    BiHomeAlt,
    // BiCurrentLocation,
    BiUserCircle,
    // BiGridAlt,
    BiDesktop,
    BiLaptop,
} from 'react-icons/bi';
import type { IconType } from 'react-icons';

interface NavItem {
    name: string;
    icon: IconType;
    path: string;
    active: boolean;
}

function BottomNavBar() {
    const router = useRouter();
    const pathname = usePathname();

    const handleNavClick = (path: string) => {
        router.push(path);
    };

    //   const navItems: NavItem[] = [
    //     { name: 'UC', icon: BiGrid, path: '/', active: pathname === '/' },
    //     { name: 'Laptops', icon: BiSpa, path: '/beauty', active: pathname === '/Laptops' },
    //     { name: 'Homes', icon: BiHomeAlt, path: '/homes', active: pathname === '/homes' },
    //     { name: 'Native', icon: BiCurrentLocation, path: '/native', active: pathname === '/native' },
    //     { name: 'Account', icon: BiUserCircle, path: '/account', active: pathname === '/account' },
    //   ];

    const navItems: NavItem[] = [
        {
            name: 'Home',
            icon: BiHomeAlt,
            path: '/',
            active: pathname === '/',
        },
        {
            name: 'PC',
            icon: BiDesktop,
            path: '/pc',
            active: pathname === '/pc' || pathname.startsWith('/pc/'), // Handle nested routes
        },
        {
            name: 'Laptop',
            icon: BiLaptop,
            path: '/laptop',
            active: pathname === '/laptop' || pathname.startsWith('/laptop/'), // Handle nested routes
        },
        {
            name: 'Account',
            icon: BiUserCircle,
            path: '/profile',
            active: pathname === '/profile' || pathname.startsWith('/profile/'), // Handle nested routes
        },
    ];

    return (
        <div className="fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 z-[9000] shadow-2xl md:hidden">
            <div className="flex justify-around items-center h-full">
                {navItems.map((item) => {
                    const IconComponent = item.icon;

                    return (
                        <button
                            key={item.name}
                            className={`flex flex-col items-center justify-center p-1 w-full h-full transition duration-150 ${item.active
                                ? 'text-red-500'
                                : 'text-gray-500 hover:text-red-400'
                                }`}
                            onClick={() => handleNavClick(item.path)}
                            aria-label={item.name}
                        >
                            <div className="relative">
                                <IconComponent className="w-6 h-6" />
                                {item.name === 'Native' && (
                                    <span className="absolute top-0 right-0 block w-2 h-2 translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500" />
                                )}
                            </div>
                            <span className="text-xs font-medium mt-1">{item.name}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default BottomNavBar;
