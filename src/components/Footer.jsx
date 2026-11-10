import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#303B32] text-white pt-10 sm:pt-12 pb-6">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10">

          {/* About */}
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-extrabold text-[#DCE3D6] mb-4">
              ReSellr
            </h2>

            <p className="text-gray-300 text-sm leading-7 max-w-md mx-auto sm:mx-0">
              ReSellr is your trusted online marketplace to buy and sell
              new and pre-loved products at affordable prices.
              Discover great deals and connect with local sellers easily.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-4 text-[#DCE3D6]">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-[#829B78] transition cursor-pointer">Home</li>
              <li className="hover:text-[#829B78] transition cursor-pointer">Products</li>
              <li className="hover:text-[#829B78] transition cursor-pointer">Categories</li>
              <li className="hover:text-[#829B78] transition cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Help & Support */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-4 text-[#DCE3D6]">
              Help & Support
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-[#829B78] transition cursor-pointer">FAQs</li>
              <li className="hover:text-[#829B78] transition cursor-pointer">Privacy Policy</li>
              <li className="hover:text-[#829B78] transition cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-bold mb-4 text-[#DCE3D6]">
              Follow Us
            </h3>

            <p className="text-sm text-gray-300 leading-6 mb-3">
              Stay connected with ReSellr for the latest deals and updates.
            </p>

            <p className="text-sm text-gray-300 mb-3">
              Subscribe to our newsletter!
            </p>

            <div className="flex items-center bg-white rounded-lg overflow-hidden w-full max-w-md mx-auto sm:mx-0">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Enter your email"
                className="flex-1 min-w-0 px-3 py-3 text-sm text-[#303B32] outline-none"
              />

              <button className="bg-[#829B78] hover:bg-[#6F8966] px-3 sm:px-4 py-3 text-sm text-white transition whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[#596357] pt-6">

          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left text-sm text-gray-300">

            <p>
              © 2026 ReSellr. All Rights Reserved.
            </p>

            <p className="font-medium text-[#DCE3D6]">
              Buy Smarter. Sell Faster.
            </p>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer
