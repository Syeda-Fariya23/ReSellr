import React from 'react'
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-[#F4F0E6] px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 lg:py-24 overflow-hidden">

            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">

                {/* Hero Content */}
                <div className="flex-1 w-full text-center lg:text-left">

                    <span className="inline-block bg-[#DCE3D6] text-[#303B32] px-4 sm:px-5 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-widest mb-5 sm:mb-6">
                        BUY • SELL • REUSE
                    </span>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#303B32] leading-tight mb-5 sm:mb-6">
                        Find It. Love It.
                        <span className="block text-[#829B78]">
                            ReSell It.
                        </span>
                    </h1>

                    <p className="text-[#303B32] text-base sm:text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-4">
                        Discover amazing deals on new and pre-loved products near you.
                    </p>

                    <p className="text-[#303B32]/70 text-xs sm:text-sm md:text-base italic mb-7 sm:mb-8">
                        "Buy smarter. Sell faster. Connect with trusted local sellers."
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-8 sm:mb-9">

                        <span className="bg-white border border-[#DCE3D6] text-[#303B32] px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold shadow-sm">
                            ✓ Affordable Deals
                        </span>

                        <span className="bg-white border border-[#DCE3D6] text-[#303B32] px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold shadow-sm">
                            ✓ Trusted Local Sellers
                        </span>

                        <span className="bg-white border border-[#DCE3D6] text-[#303B32] px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold shadow-sm">
                            ✓ Easy Selling
                        </span>

                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">

                        <button
                            onClick={() => navigate('/allproducts')}
                            className="w-full sm:w-auto bg-[#829B78] hover:bg-[#303B32] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            Explore Products →
                        </button>

                        <button
                            onClick={() => navigate('/sell')}
                            className="w-full sm:w-auto bg-white border-2 border-[#829B78] text-[#303B32] hover:bg-[#DCE3D6] px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-semibold transition-all duration-300"
                        >
                            Start Selling
                        </button>

                    </div>

                </div>

                {/* Hero Image */}
                <div className="flex-1 w-full flex justify-center items-center">

                    <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl">

                        <div className="absolute inset-8 bg-[#DCE3D6] rounded-full blur-3xl opacity-80"></div>

                        <img
                            src="/images/marketplace1.png"
                            alt="ReSellr Marketplace Products"
                            className="relative w-full h-auto object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
                        />

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Hero
