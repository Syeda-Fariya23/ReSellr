import React, { useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {

  // Read category from URL

  const [searchParams] = useSearchParams();

  const products = [
    {
      id: 1,
      name: "Iphone 13",
      price: 35000,
      category: "mobile",
      condition: "used",
      location: "Bangalore",
      image: "/images/mobile.avif",
      description: "iPhone 13 in good working condition with a stylish design, excellent camera quality and smooth performance. Gently used and well maintained.",
      sellerName: "Sneha Patil",
      sellerPhone: "9876543213",
    },
    {
      id: 2,
      name: "Iphone 18 pro max",
      price: 350000,
      category: "mobile",
      condition: "new",
      location: "Mysuru",
      image: "/images/iphone.jpg",
      description: "Brand-new iPhone 18 Pro Max with a premium design, advanced camera features, powerful performance and excellent battery life.",
      sellerName: "Rahul Sharma",
      sellerPhone: "9876543210",
    },
    {
      id: 3,
      name: "Sofa",
      price: 34000,
      category: "furniture",
      condition: "used",
      location: "Hubballi",
      image: "/images/furniture.jpg",
      description: "Comfortable and spacious sofa with an elegant design. Gently used, well maintained and suitable for modern living rooms.",
      sellerName: "Priya Reddy",
      sellerPhone: "9876543211",
    },
    {
      id: 4,
      name: "Dell Laptop",
      price: 34000,
      category: "electronics",
      condition: "used",
      location: "Hubballi",
      image: "/images/dell.jpg",
      description: "Dell laptop in good working condition, suitable for everyday tasks, office work, browsing and online learning. Well maintained.",
      sellerName: "Arjun Kumar",
      sellerPhone: "9876543212",
    }
  ];

  // States
  const [searchTerm, setSearchTerm] = useState(searchParams.get("search")||"");
  useEffect(() => {
  setSearchTerm(searchParams.get("search") || "");
}, [searchParams]);


  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("category") || ""
  );

  const [selectedCondition, setSelectedCondition] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [sortBy, setSortBy] = useState("");

  // Filtering products
  const filterProducts = products.filter((item) => {

    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "" || item.category === selectedCategory;

    const matchesCondition =
      selectedCondition === "" || item.condition === selectedCondition;

    const matchesMinPrice =
      minPrice === "" || item.price >= Number(minPrice);

    const matchesMaxPrice =
      maxPrice === "" || item.price <= Number(maxPrice);

    const matchesLocation =
      selectedLocation === "" || item.location === selectedLocation;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesCondition &&
      matchesMinPrice &&
      matchesMaxPrice &&
      matchesLocation
    );
  });

  // Sorting products
  const sortedProducts = [...filterProducts].sort((a, b) => {
    if (sortBy === "low to high") return a.price - b.price;
    if (sortBy === "high to low") return b.price - a.price;
    return 0;
  });

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedCondition("");
    setMinPrice("");
    setMaxPrice("");
    setSelectedLocation("");
    setSortBy("");
  };

  return (
    <div className="min-h-screen bg-[#F4F0E6]">

      {/* Header */}
      <section className="bg-[#303B32] text-white px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">

        <div className="max-w-7xl mx-auto">

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Explore Products
          </h1>

          <p className="text-[#DCE3D6] text-sm sm:text-base">
            Find great deals on new and pre-loved products.
          </p>

        </div>

      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8">

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-sm p-3 sm:p-4 md:p-5 mb-6 sm:mb-7">

          {/* Search and Sort */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">

            <input
              type="text"
              placeholder="Search products..."
              aria-label="Search products"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full min-w-0 border border-[#DCE3D6] rounded-lg px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-[#829B78]"
            />

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort products"
              className="w-full min-w-0 border border-[#DCE3D6] rounded-lg px-3 py-3 text-sm bg-white outline-none focus:ring-2 focus:ring-[#829B78]"
            >
              <option value="">Default Sorting</option>
              <option value="low to high">Price: Low to High</option>
              <option value="high to low">Price: High to Low</option>
            </select>

          </div>

          {/* Other Filters */}
          <div className="grid grid-cols-1 min-[380px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-3">

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              aria-label="Filter by category"
              className="w-full min-w-0 border border-[#DCE3D6] rounded-lg px-2 sm:px-3 py-3 text-sm bg-white outline-none focus:ring-2 focus:ring-[#829B78]"
            >
              <option value="">All Categories</option>
              <option value="mobile">Mobiles</option>
              <option value="electronics">Electronics</option>
              <option value="vehicles">Vehicles</option>
              <option value="furniture">Furniture</option>
              <option value="fashion">Fashion</option>
              <option value="books">Books</option>
            </select>

            <select
              value={selectedCondition}
              onChange={(e) => setSelectedCondition(e.target.value)}
              aria-label="Filter by condition"
              className="w-full min-w-0 border border-[#DCE3D6] rounded-lg px-2 sm:px-3 py-3 text-sm bg-white outline-none focus:ring-2 focus:ring-[#829B78]"
            >
              <option value="">All Conditions</option>
              <option value="new">New</option>
              <option value="used">Used</option>
            </select>

            <input
              type="number"
              placeholder="Min price"
              aria-label="Minimum price"
              value={minPrice}
              min="0"
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full min-w-0 border border-[#DCE3D6] rounded-lg px-2 sm:px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-[#829B78]"
            />

            <input
              type="number"
              placeholder="Max price"
              aria-label="Maximum price"
              value={maxPrice}
              min="0"
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full min-w-0 border border-[#DCE3D6] rounded-lg px-2 sm:px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-[#829B78]"
            />

            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              aria-label="Filter by location"
              className="w-full min-w-0 border border-[#DCE3D6] rounded-lg px-2 sm:px-3 py-3 text-sm bg-white outline-none focus:ring-2 focus:ring-[#829B78]"
            >
              <option value="">All Locations</option>
              <option value="Bangalore">Bangalore</option>
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

            <button
              onClick={clearFilters}
              className="w-full bg-[#303B32] text-white rounded-lg px-3 py-3 text-sm font-medium hover:bg-[#829B78] active:scale-[0.98] transition"
            >
              Clear Filters
            </button>

          </div>
        </div>

        {/* Product Count */}
        <div className="flex flex-col min-[380px]:flex-row min-[380px]:justify-between min-[380px]:items-center gap-2 mb-5">

          <h2 className="text-lg sm:text-xl font-bold text-[#303B32]">
            Available Products
          </h2>

          <p className="text-xs sm:text-sm text-gray-600">
            {sortedProducts.length} Products Found
          </p>

        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (

          <div className="grid grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">

            {sortedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}

          </div>

        ) : (

          <div className="bg-white rounded-xl p-6 sm:p-10 text-center">

            <h3 className="text-lg sm:text-xl font-semibold text-[#303B32] mb-2">
              No Products Found
            </h3>

            <p className="text-gray-500 text-sm mb-5">
              Try changing your search or filters.
            </p>

            <button
              onClick={clearFilters}
              className="bg-[#303B32] text-white px-5 py-3 rounded-lg hover:bg-[#829B78] active:scale-95 transition text-sm sm:text-base"
            >
              Reset Filters
            </button>

          </div>

        )}

      </main>
    </div>
  );
};

export default ProductPage;
