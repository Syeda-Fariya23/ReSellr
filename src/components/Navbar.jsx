import React, { useState,useContext } from 'react';
import { Search } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const{user,setUser}=useContext(AuthContext);

    const handleSearch = (e) => {
        e.preventDefault();

        const search = searchTerm.trim();

        if (!search) return;

        navigate(`/products?search=${encodeURIComponent(search)}`);
    };

    return (
        <nav className="w-full bg-white shadow-sm px-4 sm:px-6 py-3 sm:py-4">
            <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap items-center gap-3 md:gap-5">

                {/* Logo */}
                <div className="flex items-center gap-2 sm:gap-3 shrink-0 order-1 flex-1 md:flex-none">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#E5E9DF] flex items-center justify-center overflow-hidden border-2 border-[#829B78] shadow-sm">
                        <img
                            src="/images/resellr_logo.png"
                            alt="ReSellr Logo"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>

                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#303B32] tracking-tight">
                        ReSellr
                    </h2>
                </div>

                {/* Login and Sell */}
                <div className="flex items-center gap-3 sm:gap-4 shrink-0 order-2 md:order-4">
                    <button
                        onClick={() => navigate(user?"/profile":"/auth")}
                        className="text-sm sm:text-base text-[#303B32] font-semibold hover:text-[#829B78] transition"
                    >
                        {user ? "My Account" : "Login"}
                    </button>

                    <button
                        onClick={() => navigate('/sell')}
                        className="bg-[#829B78] hover:bg-[#6F8966] text-white text-sm sm:text-base font-bold px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg shadow-sm transition whitespace-nowrap"
                    >
                        + SELL
                    </button>
                </div>

                {/* Location */}
                <div className="w-full md:w-auto flex items-center border border-[#DCE3D6] rounded-lg px-3 py-2.5 bg-white order-3 md:order-2">
                    <select
                        aria-label="Select your city"
                        className="w-full md:w-auto max-w-full outline-none bg-transparent text-[#303B32] text-sm cursor-pointer"
                    >
                        <option value="">Select Your City</option>
                        <option value="Bengaluru">Bengaluru</option>
                        <option value="Mysuru">Mysuru</option>
                        <option value="Mangaluru">Mangaluru</option>
                        <option value="Hubballi">Hubballi</option>
                        <option value="Belagavi">Belagavi</option>
                        <option value="Kalaburagi">Kalaburagi</option>
                        <option value="Davangere">Davangere</option>
                        <option value="Ballari">Ballari</option>
                        <option value="Shivamogga">Shivamogga</option>
                        <option value="Tumakuru">Tumakuru</option>
                    </select>
                </div>

                {/* Search Bar */}
                <form
                    onSubmit={handleSearch}
                    className="w-full min-w-0 md:flex-1 flex items-center border border-[#DCE3D6] rounded-lg overflow-hidden bg-[#F4F0E6] order-4 md:order-3"
                >
                    <input
                        type="text"
                        placeholder="Search for products..."
                        aria-label="Search for products"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full min-w-0 px-3 sm:px-4 py-3 outline-none text-sm sm:text-base text-[#303B32] bg-transparent"
                    />

                    <button
                        type="submit"
                        aria-label="Search"
                        className="bg-[#829B78] hover:bg-[#6F8966] text-white px-4 sm:px-5 py-3 transition shrink-0"
                    >
                        <Search size={20} />
                    </button>
                </form>

            </div>
        </nav>
    );
};

export default Navbar;
