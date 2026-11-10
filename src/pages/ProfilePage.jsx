import React, { useContext } from 'react'
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, Package, Heart, Settings, LogOut } from "lucide-react";

const ProfilePage = () => {
    const navigate = useNavigate();
    const { user, setUser } = useContext(AuthContext);

    const handleLogout = () => {
        setUser(null);
        navigate("/");
    }

    return (
        <div className="min-h-screen bg-[#F5F6F2] px-6 py-12">

            <div className="max-w-5xl mx-auto">

                {/* Page Heading */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-[#303B32]">
                        My Account
                    </h1>
                    <p className="text-gray-500 mt-2">
                        Manage your ReSellr account and activities.
                    </p>
                </div>

                {/* Profile Header */}
                <div className="bg-white rounded-2xl p-8 shadow-sm flex items-center gap-6 mb-8">

                    <div className="w-20 h-20 rounded-full bg-[#E5EBDD] flex items-center justify-center">
                        <User size={38} className="text-[#303B32]" />
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-[#303B32]">
                            {user.name}
                        </h2>
                        <p className="text-gray-500 mt-1">
                            {user.email}
                        </p>
                        <span className="inline-block mt-3 text-sm bg-[#E5EBDD] text-[#303B32] px-3 py-1 rounded-full">
                            ReSellr Member
                        </span>
                    </div>

                </div>

                {/* Account Information */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">

                    <h3 className="text-xl font-semibold text-[#303B32] mb-6">
                        Account Information
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">

                        <div className="flex items-center gap-4">
                            <User className="text-[#647A62]" />
                            <div>
                                <p className="text-sm text-gray-400">Full Name</p>
                                <p className="font-medium">{user.name}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <Mail className="text-[#647A62]" />
                            <div>
                                <p className="text-sm text-gray-400">Email Address</p>
                                <p className="font-medium">{user.email}</p>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Account Activities */}
                <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">

                    <h3 className="text-xl font-semibold text-[#303B32] mb-6">
                        My Activities
                    </h3>

                    <div className="grid md:grid-cols-3 gap-5">

                        <div className="border rounded-xl p-5">
                            <Package className="text-[#647A62] mb-3" />
                            <h4 className="font-semibold">My Listings</h4>
                            <p className="text-sm text-gray-500 mt-1">
                                Manage your products
                            </p>
                        </div>

                        <div className="border rounded-xl p-5">
                            <Heart className="text-[#647A62] mb-3" />
                            <h4 className="font-semibold">Saved Products</h4>
                            <p className="text-sm text-gray-500 mt-1">
                                View your favourites
                            </p>
                        </div>

                        <div className="border rounded-xl p-5">
                            <Settings className="text-[#647A62] mb-3" />
                            <h4 className="font-semibold">Settings</h4>
                            <p className="text-sm text-gray-500 mt-1">
                                Manage account settings
                            </p>
                        </div>

                    </div>

                </div>

                {/* Logout */}
                <div className="flex justify-end">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-2 bg-red-50 text-red-600 px-6 py-3 rounded-xl font-semibold hover:bg-red-100 transition"
                    >
                        <LogOut size={18} />
                        Logout
                    </button>
                </div>

            </div>

        </div>
    )
}

export default ProfilePage;
