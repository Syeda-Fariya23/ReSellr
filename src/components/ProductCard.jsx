import React from 'react'
import { Link } from "react-router-dom";
// import { BASE_URL } from "./useFetch";

const ProductCard = ({ productData }) => {
  // const navigate = useNavigate();

  // const handleProductClick = () => {
  //   navigate(`/product/${product.id}`, {
  //     state: { product }
  //   });
  // };

  return (
    <Link to={`/allproducts/${productData.id}`}>
    <div
      // onClick={handleProductClick}
      // onKeyDown={(e) => {
      //   if (e.key === "Enter" || e.key === " ") {
      //     e.preventDefault();
      //     handleProductClick();
      //   }
      // }}
      // role="button"
      // tabIndex={0}
      aria-label={`View ${productData.name}, priced at ₹${productData.price.toLocaleString("en-IN")}`}
      className="bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group border border-[#DCE3D6] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#829B78]"
    >

      {/* Product Image */}
      <div className="h-36 xs:h-44 sm:h-48 md:h-52 bg-[#DCE3D6] overflow-hidden relative">

        <img
          src={productData.image}
          alt={productData.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Condition Badge */}
        <span className={`absolute top-2 right-2 sm:top-3 sm:right-3 px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold ${
          productData.condition === "new"
            ? "bg-[#829B78] text-white"
            : "bg-[#303B32] text-white"
        }`}>
          {productData.condition === "new" ? "New" : "Used"}
        </span>

      </div>

      {/* Product Details */}
      <div className="p-3 sm:p-4 md:p-5">

        <p className="text-[10px] sm:text-xs uppercase tracking-wider text-[#829B78] font-semibold mb-1.5 sm:mb-2">
          {productData.category}
        </p>

        <h3 className="text-sm sm:text-base md:text-lg font-bold text-[#303B32] capitalize mb-2 line-clamp-1">
          {productData.name}
        </h3>

        <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#303B32] mb-2 sm:mb-3">
          ₹{productData.price.toLocaleString("en-IN")}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#DCE3D6] pt-2 sm:pt-3">

          <p className="text-xs sm:text-sm text-gray-500 truncate">
            {productData.location}
          </p>

          <span className="text-[10px] sm:text-xs text-[#829B78] font-medium">
            ReSellr
          </span>

        </div>

      </div>

    </div>
    </Link>
  )
}

export default ProductCard
