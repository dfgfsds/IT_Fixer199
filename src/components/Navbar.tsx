'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { BiUserCircle, BiCart, BiSearch } from 'react-icons/bi';
import { FiChevronDown, FiMapPin } from 'react-icons/fi';
import PhoneLoginModal from './Modals/LoginModal/LoginModal';
import Logo from '../../public/image/Logo.png'
/* ---------------- CONSTANTS ---------------- */
const OPTIONS = ['Pc', 'Laptops', 'Desktops', 'Repair', 'Service'];

/* ---------------- TYPES ---------------- */
interface LocationInputProps {
  locality?: string;
  city?: string;
  compactLocation?: string;
  onClick?: () => void;
}

interface SearchInputProps {
  placeholder: string;
}

interface NavLinksProps {
  className?: string;
  onItemClick: (path: string) => void;
}

interface NavLinksProps {
  className?: string;
  onItemClick: (path: string) => void;
}


/* ---------------- COMPONENT ---------------- */
function NavBar() {
  const router = useRouter();

  const [showTopSection, setShowTopSection] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  /* -------- Typing Animation -------- */
  useEffect(() => {
    const currentWord = OPTIONS[wordIndex];

    const typingInterval = setInterval(() => {
      setDisplayText((prev) => prev + currentWord[charIndex]);
      setCharIndex((prev) => prev + 1);
    }, 100);

    if (charIndex === currentWord.length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        setCharIndex(0);
        setDisplayText('');
        setWordIndex((prev) => (prev + 1) % OPTIONS.length);
      }, 1500);
    }

    return () => clearInterval(typingInterval);
  }, [charIndex, wordIndex]);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopSection(window.scrollY <= 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => router.push(path);

  /* ---------------- SUB COMPONENTS ---------------- */

const UserLoginButton = () => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // 🔥 Ignore click on button itself
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative hidden md:block">
      {/* User Icon */}
      <div
        ref={buttonRef}
        onClick={(e) => {
          e.stopPropagation(); // 🔥 VERY IMPORTANT
          setOpen((prev) => !prev);
        }}
        className="cursor-pointer w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
      >
        <BiUserCircle className="w-6 h-6 text-gray-600" />
      </div>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute right-0 mt-3 w-32 bg-white rounded-lg shadow-xl z-50 border"
          onClick={(e) => e.stopPropagation()} // 🔥 prevent auto close
        >
          <div
            className="px-4 py-2 text-sm font-semibold text-gray-700  cursor-pointer"
            onClick={() => {
              setOpen(false);
              // router.push('/login');
          setShowModal(!showModal)
            }}
          >
            Login
          </div>
        </div>
      )}
    </div>
  );
};

  const LocationInput: React.FC<LocationInputProps> = ({
    locality = 'Nungambakkam',
    city = 'Chennai',
    compactLocation = `${locality}, ${city}`,
    onClick = () => { },
  }) => (
    <div onClick={onClick} className="cursor-pointer flex-shrink-0">
      {/* Mobile */}
      <div className="flex items-start p-4 md:p-0 lg:hidden truncate">
        <FiMapPin className="w-5 h-5 mt-1 mr-2 text-gray-700" />
        <div className="truncate flex items-center-safe">
          <p className="text-xl font-semibold text-gray-900">{locality}</p>
            <FiChevronDown className="w-4 h-4 ml-1 text-gray-600" />
          {/* <div className="flex items-center">
            <p className="text-sm text-gray-600 truncate">{city}</p>
            <FiChevronDown className="w-4 h-4 ml-1 text-gray-600" />
          </div> */}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:flex items-center justify-between gap-2 px-4 py-3 border rounded-lg w-64">
        <span className="text-sm font-medium truncate">{compactLocation}</span>
        <FiChevronDown className="w-4 h-4 text-gray-500" />
      </div>
    </div>
  );

  const SearchInput: React.FC<SearchInputProps> = ({ placeholder }) => (
    <div className="flex items-center w-full bg-white border rounded-lg px-3 py-2">
      <BiSearch className="w-5 h-5 text-gray-500" />
      <input
        type="text"
        placeholder={placeholder}
        className="flex-grow bg-transparent outline-none text-sm ml-2"
      />
    </div>
  );

  const NavLinks: React.FC<NavLinksProps> = ({ className, onItemClick }) => {
    const pathname = usePathname();

    const linkClass = (path: string) =>
      `cursor-pointer pb-2 transition-all duration-200
   ${pathname === path
        ? 'text-black font-semibold border-b-2 border-black'
        : 'text-gray-500 hover:text-black border-b-2 border-transparent hover:border-black'
      }`;


    return (
      <nav className={`flex gap-6 ${className}`}>
        <span onClick={() => onItemClick('/')} className={linkClass('/')}>
          Home
        </span>

        <span onClick={() => onItemClick('/desktop/pc')} className={linkClass('/pc')}>
          PC
        </span>

        <span onClick={() => onItemClick('/desktop/laptop')} className={linkClass('/laptop')}>
          Laptop
        </span>
      </nav>
    );
  };

  /* ---------------- JSX ---------------- */
  return (
    <>
      <header className="sticky top-0 z-[9999] bg-white border-b shadow-sm px-4 md:px-8">
        {/* Mobile */}
        <div className="md:hidden flex flex-col gap-0">
          {showTopSection && (
            <div className="flex justify-between items-center py-0">
              <LocationInput />
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleNavClick('/cart')}
                  className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gray-100"
                >
                  <BiCart className="w-6 h-6" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 text-xs bg-red-500 text-white rounded-full flex items-center justify-center">
                    3
                  </span>
                </button>
                <UserLoginButton />
              </div>
            </div>
          )}

          <div className="py-2">
            <SearchInput placeholder={`Search for '${displayText}'`} />
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto py-3 gap-4">
          <div className="flex items-center gap-4">
            <Image
              // src="/_api/assets/uploaded:image_1806a3.png-0682d512-314b-4d90-9cea-ebccaebd5c19"
              src={Logo}
              alt="Logo"
              width={120}
              height={32}
              className="cursor-pointer"
              onClick={() => handleNavClick('/')}
            />
            <NavLinks
              className="flex gap-4 text-sm font-medium text-gray-700"
              onItemClick={handleNavClick}
            />
          </div>

          <div className="flex items-center gap-4 flex-grow max-w-3xl">
            <LocationInput />
            <SearchInput placeholder="Search for 'Pc'" />
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => handleNavClick('/cart')}>
              <BiCart className="w-6 h-6 text-gray-600" />
            </button>
            <UserLoginButton />
          </div>
        </div>
      </header>
      {showModal && <PhoneLoginModal handleClos={() => setShowModal(!showModal)} />}
    </>
  );
}

export default NavBar;
