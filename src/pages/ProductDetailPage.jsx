import React, { useEffect } from 'react'
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { ArrowLeft, EarOffIcon } from "lucide-react";
import { BASE_URL, useFetch } from '../components/useFetch';



const ProductDetailPage = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const { id } = useParams()
  const{data,error}=useFetch(`${BASE_URL}/products/:id${id}`)
  
  const product = location.state?.product;
  // const BASE_URL='https://resellr-backend.vercel.app/'
  // useEffect(()=>{
  //   const fetchProductData=async()=>{
  //     const response=await fetch(`${BASE_URL}products/:id` )
  //     if(!response.ok)
  //     {
  //       throw new Error("Fail to fetch the product data");
  //     }
  //     return response.json()
  //   }
  // })


  if (!product) {
    return (
      <div className="min-h-screen bg-[#F4F0E6] flex flex-col items-center justify-center px-4 sm:px-6 py-10 text-center">

        <h2 className="text-xl sm:text-2xl font-bold text-[#303B32] mb-3">
          Product Not Found
        </h2>

        <p className="text-sm sm:text-base text-gray-600 mb-6">
          Product information is not available.
        </p>

        <button
          onClick={() => navigate("/products/:id")}
          className="bg-[#303B32] text-white px-5 sm:px-6 py-3 rounded-xl hover:bg-[#6F8966] active:scale-95 transition text-sm sm:text-base"
        >
          Back to Explore Products
        </button>

      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F0E6] px-4 sm:px-5 md:px-8 py-7 sm:py-10">

      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate("/products")}
          className="mb-5 sm:mb-8 flex items-center gap-2 text-[#303B32] text-sm sm:text-base font-semibold hover:text-[#829B78] transition"
        >
          <ArrowLeft size={20} />
          Back to Explore Products
        </button>

        {/* Main Product Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-md overflow-hidden border border-[#DCE3D6]">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-6 md:p-10">

            {/* Product Image */}
            <div className="bg-[#DCE3D6] rounded-xl sm:rounded-2xl overflow-hidden h-64 sm:h-80 md:h-105">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center">

              <p className="text-xs sm:text-sm uppercase tracking-widest text-[#829B78] font-bold mb-3">
                {product.category}
              </p>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#303B32] mb-3 sm:mb-4 capitalize wrap-break-word">
                {product.name}
              </h1>

              <p className="text-2xl sm:text-3xl font-bold text-[#303B32] mb-4 sm:mb-5">
                ₹{product.price.toLocaleString("en-IN")}
              </p>

              {/* Condition */}
              <span className={`w-fit px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-5 sm:mb-6 ${
                product.condition === "new"
                  ? "bg-[#DCE3D6] text-[#303B32]"
                  : "bg-[#303B32] text-white"
              }`}>
                {product.condition === "new" ? "New" : "Used"}
              </span>

              {/* Location */}
              <div className="flex items-center gap-2 text-sm sm:text-base text-gray-600 mb-5 sm:mb-6">
                
                <p>{product.location}</p>
              </div>

              {/* Description */}
              <div className="border-t border-[#DCE3D6] pt-4 sm:pt-5">

                <h2 className="text-lg sm:text-xl font-bold text-[#303B32] mb-3">
                  Product Description
                </h2>

                <p className="text-sm sm:text-base text-gray-600 leading-6 sm:leading-7 wrap-break-word">
                  {product.description}
                </p>

              </div>

            </div>
          </div>

          {/* Seller Information */}
          <div className="bg-[#E5E9DF] p-5 sm:p-6 md:p-10">

            <h2 className="text-xl sm:text-2xl font-bold text-[#303B32] mb-5 sm:mb-6">
              Seller Information
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

              <div className="min-w-0">

                <p className="text-xs sm:text-sm text-gray-500 mb-2">
                  Listed By
                </p>

                <h3 className="text-lg sm:text-xl font-bold text-[#303B32] wrap-break-word">
                  {product.sellerName}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 mt-2">
                  {product.sellerPhone}
                </p>

              </div>

              <a
                href={`tel:${product.sellerPhone}`}
                className="w-full sm:w-auto inline-flex justify-center items-center bg-[#303B32] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-[#6F8966] active:scale-95 transition duration-300 shadow-sm text-sm sm:text-base"
              >
                Contact Owner
              </a>

            </div>

          </div>

        </div>

        {/* Product ID */}
        <p className="text-center text-xs sm:text-sm text-gray-500 mt-5">
          Product ID: {id}
        </p>

      </div>

    </div>
  )
}

export default ProductDetailPage
