import React from 'react'
import { Link } from "react-router-dom";

const Categories = () => {

    const categories = [
        {
            name: "Mobiles",
            value: "mobile",
            image: "/images/mobile.avif"
        },
        {
            name: "Electronics",
            value: "electronics",
            image: "/images/electronics.jpg"
        },
        {
            name: "Vehicles",
            value: "vehicles",
            image: "/images/vehicles1.avif"
        },
        {
            name: "Furniture",
            value: "furniture",
            image: "/images/furniture.jpg"
        },
        {
            name: "Fashion",
            value: "fashion",
            image: "/images/fashion.jpg"
        },
        {
            name: "Books",
            value: "books",
            image: "/images/books1.avif"
        }
    ]



    return (
        <section className="bg-[#F4F0E6] px-4 sm:px-6 py-10 sm:py-12 lg:py-16">

            <div className="max-w-7xl mx-auto">

                <h2 className="text-2xl sm:text-3xl font-bold text-[#303B32] text-center mb-7 sm:mb-10">
                    Explore Categories
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-5 lg:gap-6">

                    {categories.map((cat,index) => (
                        <Link 
                        to={`/allproducts?category=${cat.value}`}
                        key={index}
                        
                            aria-label={`Explore ${cat.value}`}
                            className="bg-white p-2.5 sm:p-4 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 active:scale-95 transition duration-300 text-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#829B78]"
                            >
                            
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    loading="lazy"
                                    className="w-full aspect-square sm:aspect-4/3 object-cover rounded-lg mb-2 sm:mb-3"
                                />

                                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-[#303B32]">
                                    {cat.name}
                                </h3>
                           
                        </Link>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Categories
