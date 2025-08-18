"use client";

import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const LandingCta = () => {
    return (
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-16 lg:py-20">
            <div className="max-w-4xl mx-auto space-y-12">
                <div className="space-y-8">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                        Follow Your
                        <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent block lg:inline lg:ml-4">
                            News
                        </span>
                        <span className="block">Your Way</span>
                    </h1>

                    <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        A clean, open-source RSS reader that respects your privacy.
                        No ads, no tracking, just the content you care about.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                    <Link href="/dashboard" >
                        <button
                            className="group cursor-pointer relative bg-gradient-to-r from-orange-400 to-orange-500 text-white px-10 py-5 font-bold text-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 flex items-center space-x-4"

                        >
                            <span>GET STARTED</span>
                            <GoArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />

                            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
                        </button>
                    </Link>


                </div>

                <p className="text-sm text-gray-500">
                    Free forever • Open source • No registration required
                </p>
            </div>
        </div >
    );
};

export default LandingCta;