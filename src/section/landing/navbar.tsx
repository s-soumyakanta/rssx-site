import React from 'react';
import { FaGithub } from "react-icons/fa";
import Logo from "@/components/Logo";
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-6 px-6 lg:px-60 backdrop-blur-sm bg-white/90 border-b border-gray-100 ">
            <div className="transform hover:scale-105 transition-transform duration-200">
                <Logo />
            </div>

            <div className="flex items-center space-x-8">
                <Link
                    href="/blog"
                    className="text-gray-600 hover:text-orange-500 transition-all duration-300 font-medium hover:scale-110 transform"
                >
                    Blog
                </Link>

                <Link
                    href="https://github.com/s-soumyakanta/rssx-site"
                    target='_blank'
                    className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-all duration-300 font-medium group"
                >
                    <FaGithub className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    <span className="group-hover:scale-110 transform transition-transform duration-300">GitHub</span>
                </Link>
            </div>
        </nav>
    );
};


export default Navbar;