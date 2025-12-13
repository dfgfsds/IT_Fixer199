'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// Import the icons you specified
import { BiHomeAlt, BiDesktop, BiLaptop, BiUserCircle } from 'react-icons/bi';
import type { IconType } from 'react-icons';

// Type definition remains the same
type NavItem = {
    name: string;
    icon: IconType;
    path: string;
    active: boolean;
    hasIndicator?: boolean; // For the red dot
};

export default function MobileFooter() {
    const pathname = usePathname();

    // Your requested menu data - only the active calculation is dynamic
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
            path: '/mobile/pc',
            active:
                pathname === '/mobile/pc' ||
                pathname.startsWith('/mobile/pc/'),
            hasIndicator: true,
        },
        {
            name: 'Laptop',
            icon: BiLaptop,
            path: '/mobile/laptop',
            active:
                pathname === '/mobile/laptop' ||
                pathname.startsWith('/mobile/laptop/'),
        },
        {
            name: 'Account',
            icon: BiUserCircle,
            path: '/mobile/profile',
            active:
                pathname === '/mobile/profile' ||
                pathname.startsWith('/mobile/profile/'),
        },
    ];

    return (
        // Footer wrapper: fixed bottom, white background, shadow
        <footer className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-100 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
            <div className="max-w-md mx-auto h-16 flex justify-around items-center">
                {navItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <Link
                            key={item.name}
                            href={item.path}
                            className={`flex flex-col items-center justify-center text-xs font-medium relative h-full w-full py-1 transition-all
    ${item.active ? 'text-black' : 'text-gray-400'}
  `}
                        >
                            {/* Top indicator */}
                            {item.active && (
                                <span className="absolute top-0 w-8 h-[3px] bg-black rounded-b-md" />
                            )}

                            <Icon
                                className={`w-5 h-5 ${item.active ? 'text-black' : 'text-gray-400'
                                    }`}
                            />

                            <span
                                className={`text-[11px] mt-0.5 ${item.active ? 'text-black' : 'text-gray-500'
                                    }`}
                            >
                                {item.name}
                            </span>
                        </Link>

                    );
                })}
            </div>
        </footer>
    );
}