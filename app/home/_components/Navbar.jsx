"use client"; // <- Make sure this is at the very top

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link'; // Use Next.js Link
import {
    BanknotesIcon, // Keeping for Pricing
    ChartBarSquareIcon, // Keeping for Features
    DocumentChartBarIcon, // Keeping for About/Team (using for Resume Screener in dropdown)
    MagnifyingGlassIcon, // Keeping for Home/Features (using for AI Interviewer in dropdown)
    QuestionMarkCircleIcon, // Keeping for FAQ/Help
    Bars3Icon, // Hamburger Icon
    XMarkIcon, // Close Icon
    ListBulletIcon, // Keeping for general list items (using for Home)
    ChatBubbleLeftRightIcon, // Keeping for Contact
    TrophyIcon, // Keeping for Team
    ShoppingCartIcon, // Keeping for Pricing
} from '@heroicons/react/24/outline';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);
    const mobileMenuRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutsideDropdown = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                closeDropdown();
            }
        };

        const handleClickOutsideMobileMenu = (event) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && isMobileMenuOpen) {
                closeMobileMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutsideDropdown);
        document.addEventListener('mousedown', handleClickOutsideMobileMenu);

        return () => {
            document.removeEventListener('mousedown', handleClickOutsideDropdown);
            document.removeEventListener('mousedown', handleClickOutsideMobileMenu);
        };
    }, [isDropdownOpen, isMobileMenuOpen, dropdownRef, mobileMenuRef]);

    const handleFaqLinkClick = (e) => { // Function for FAQ link click
        e.preventDefault(); // Prevent default link behavior
        const faqSection = document.getElementById('faq'); // Get FAQ section by ID
        if (faqSection) {
            faqSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to FAQ
        }
        closeMobileMenu(); // Close mobile menu if open
    };

    const handlePricingLinkClick = (e) => { // Function for Pricing link click
        e.preventDefault(); // Prevent default link behavior
        const pricingSection = document.getElementById('pricing'); // Get Pricing section by ID
        if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to Pricing
        }
        closeMobileMenu(); // Close mobile menu if open
    };

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50"> {/* Sticky navbar */}
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo - Only visible on Desktop */}
                <Link href="/home" className="flex items-center cursor-pointer hidden md:flex"> {/* HIDDEN on mobile - Link to Home Page (root redirecting to /home) */}
                    {/* You can replace with your logo image if you have one */}
                    {/* <img src="./your-logo.png" alt="AI Hiring Platform Logo" className="h-8 mr-2" /> */}
                    <span className="font-bold text-xl text-blue-600">AI Hiring Platform</span> {/* Project Name */}
                </Link>

                {/* Logo - Only visible on Mobile - Inside Mobile Menu Button Area */}
                <Link href="/home" className="flex items-center cursor-pointer md:hidden"> {/* VISIBLE on mobile - Link to Home Page (root redirecting to /home) */}
                    {/* <img src="./your-logo.png" alt="AI Hiring Platform Logo" className="h-8 mr-2" /> */}
                    <span className="font-bold text-xl text-blue-600">AI Hiring</span> {/* Shortened Name for Mobile */}
                </Link>


                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button onClick={toggleMobileMenu} className="focus:outline-none cursor-pointer" aria-label="Toggle mobile menu">
                        {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6 text-gray-700" /> : <Bars3Icon className="h-6 w-6 text-gray-700" />}
                    </button>
                </div>

                {/* Navigation Links (Desktop) */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/home" className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-300">Home</Link> {/* Link to Home Page */}
                    <div className="relative" ref={dropdownRef}>
                        <button onClick={toggleDropdown} className="text-gray-700 hover:text-blue-600 focus:outline-none flex items-center cursor-pointer transition-colors duration-300" aria-expanded={isDropdownOpen} aria-haspopup="true">
                            Features <svg className={`w-4 h-4 ml-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <div className={`absolute ${isDropdownOpen ? 'block' : 'hidden'} mt-2 py-2 w-56 bg-white border rounded-md shadow-xl z-10 transform opacity-0 scale-95 transition-all duration-300 ${isDropdownOpen ? 'opacity-100 scale-100' : ''}`}>
                            <Link href="/ai-resume" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 cursor-pointer flex items-center space-x-2 transition-colors duration-300" onClick={closeDropdown}>
                                <DocumentChartBarIcon className="h-5 w-5 text-gray-500" /> <span>Resume Screener</span> {/* Link to AI Resume Screener Feature Page */}
                            </Link>
                            <Link href="/ai-interview" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 cursor-pointer flex items-center space-x-2 transition-colors duration-300" onClick={closeDropdown}>
                                <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" /> <span>AI Interviewer</span> {/* Link to AI Interviewer Feature Page */}
                             </Link>
                            {/* You can add more features here in the dropdown if you create more feature pages */}
                            {/* Example: */}
                            {/* <Link href="/pricing" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 cursor-pointer flex items-center space-x-2 transition-colors duration-300" onClick={closeDropdown}>
                                <ShoppingCartIcon className="h-5 w-5 text-gray-500" /> <span>Pricing</span>
                            </Link> */}
                        </div>
                    </div>
                    <Link href="/about" className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-300">About</Link> {/* Link to About Us Page */}
                    <Link href="/team" className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-300">Team</Link> {/* Link to Team Page */}
                    <Link href="/pricing"
                          onClick={handlePricingLinkClick}
                          className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-300"
                          >Pricing</Link> {/* Link to Pricing Section (Smooth Scroll) */}
                    <Link href="/contact" className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-300">Contact</Link> {/* Link to Contact Us Page */}
                    <Link href="/faq"
                          onClick={handleFaqLinkClick}
                          className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-300">FAQ</Link> {/* Link to FAQ Section (Smooth Scroll) */}
                </div>

                 {/* Auth Buttons (Desktop) - REMOVED - Add back later if needed */}
                <div className="hidden md:flex items-center space-x-4">
                    {/* Auth Buttons Removed */}
                </div>
            </div>

            {/* Mobile Menu */}
            <div ref={mobileMenuRef} className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md z-20 transform transition-all duration-300 origin-top ${isMobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                 {/* Mobile Menu Header - Removed Close Button */}
                <div className="px-6 py-3 border-b border-gray-200">
                    {/* Auth Links Removed in Mobile Menu */}
                </div>

                {/* Mobile Menu Body - List of Links */}
                <nav className="py-2 px-6">
                    <Link href="/home" className="block py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 cursor-pointer transition-colors duration-300 flex items-center space-x-3" onClick={closeMobileMenu}>
                        <ListBulletIcon className="h-5 w-5 text-gray-500" /> <span>Home</span> {/* Mobile Link to Home Page */}
                    </Link>
                    {/* Features Dropdown in Mobile Menu */}
                    <div className="relative">
                        <button
                            onClick={toggleDropdown}
                            className="block py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 focus:outline-none flex items-center justify-between w-full cursor-pointer transition-colors duration-300"
                            aria-expanded={isDropdownOpen}
                            aria-haspopup="true"
                        >
                            <div className="flex items-center space-x-3">
                                <ChartBarSquareIcon className="h-5 w-5 text-gray-500" /> <span>Features</span> {/* Mobile "Features" Dropdown Toggle */}
                            </div>
                            <svg className={`w-4 h-4 ml-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <div className={`absolute ${isDropdownOpen ? 'block' : 'hidden'} mt-2 py-2 w-full bg-white border rounded-md shadow-xl z-10`}>
                            <Link href="/ai-resume" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 cursor-pointer flex items-center space-x-2 transition-colors duration-300" onClick={() => { closeDropdown(); closeMobileMenu(); }}>
                                <DocumentChartBarIcon className="h-5 w-5 text-gray-500" /> <span>Resume Screener</span> {/* Mobile Link to AI Resume Screener Feature Page */}
                            </Link>
                            <Link href="/ai-interview" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 cursor-pointer flex items-center space-x-2 transition-colors duration-300" onClick={() => { closeDropdown(); closeMobileMenu(); }}>
                                <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" /> <span>AI Interviewer</span> {/* Mobile Link to AI Interviewer Feature Page */}
                            </Link>
                            {/* Add more features in mobile dropdown if needed */}
                        </div>
                    </div>
                    <Link href="/about" className="block py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 cursor-pointer transition-colors duration-300 flex items-center space-x-3" onClick={closeMobileMenu}>
                        <DocumentChartBarIcon className="h-5 w-5 text-gray-500" /> <span>About</span> {/* Mobile Link to About Us Page */}
                    </Link>
                    <Link href="/team" className="block py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 cursor-pointer transition-colors duration-300 flex items-center space-x-3" onClick={closeMobileMenu}>
                        <TrophyIcon className="h-5 w-5 text-gray-500" /> <span>Team</span> {/* Mobile Link to Team Page */}
                    </Link>
                    <Link href="/pricing"
                        onClick={(e) => { handlePricingLinkClick(e); closeMobileMenu(); }}
                        className="block py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 cursor-pointer transition-colors duration-300 flex items-center space-x-3">
                        <ShoppingCartIcon className="h-5 w-5 text-gray-500" /> <span>Pricing</span> {/* Mobile Link to Pricing Section (Smooth Scroll) */}
                    </Link>
                    <Link href="/contact" className="block py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 cursor-pointer transition-colors duration-300 flex items-center space-x-3" onClick={closeMobileMenu}>
                        <ChatBubbleLeftRightIcon className="h-5 w-5 text-gray-500" /> <span>Contact</span> {/* Mobile Link to Contact Us Page */}
                    </Link>
                    <Link href="/faq"
                        onClick={(e) => { handleFaqLinkClick(e); closeMobileMenu(); }}
                        className="block py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 cursor-pointer transition-colors duration-300 flex items-center space-x-3">
                        <QuestionMarkCircleIcon className="h-5 w-5 text-gray-500" /> <span>FAQ</span> {/* Mobile Link to FAQ Section (Smooth Scroll) */}
                    </Link>
                </nav>
            </div>
        </nav>
    );
}

export default Navbar;