import React, { useState, useEffect } from 'react'

const SellPage = () => {
  const [images, setImages] = useState([])
  const [imagePreviews, setImagePreviews] = useState([])

  // Generate image previews
  useEffect(() => {
    const urls = images.map((image) =>
      URL.createObjectURL(image)
    )

    setImagePreviews(urls)

    // Clean up temporary URLs
    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url))
    }
  }, [images])

  // Handle image selection
  const handleImageChange = (e) => {
    setImages(Array.from(e.target.files))

    // Allow selecting the same file again
    e.target.value = ''
  }

  // Remove selected image
  const removeImage = (indexToRemove) => {
    setImages((prevImages) =>
      prevImages.filter((_, index) => index !== indexToRemove)
    )
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()

    if (images.length === 0) {
      alert('Please upload at least one product image!')
      return
    }

    const formData = new FormData(e.target)

    const productData = {
      productName: formData.get('productName'),
      category: formData.get('category'),
      description: formData.get('description'),
      condition: formData.get('condition'),
      location: formData.get('location'),
      contact: formData.get('contact'),
      price: Number(formData.get('price')),
      images: images
    }

    console.log('Product Details:', productData)

    alert('Product details captured successfully!')

    e.target.reset()
    setImages([])
  }

  const inputStyle =
    "w-full min-w-0 px-3 sm:px-4 py-3 rounded-xl border border-[#DCE3D6] bg-[#F4F0E6] text-sm sm:text-base text-[#303B32] placeholder:text-[#829B78] outline-none focus:ring-2 focus:ring-[#829B78] focus:border-transparent transition"

  const labelStyle =
    "block text-sm font-semibold text-[#303B32] mb-2"

  return (
    <div className="min-h-screen bg-[#F4F0E6] px-4 sm:px-6 py-8 sm:py-10 md:py-14">

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-7 sm:mb-10">

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#303B32]">
            Sell Your Product
          </h1>

          <p className="text-sm sm:text-base text-[#829B78] mt-3">
            Give your unused products a new home!
          </p>

        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-10">

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">

            {/* Product Name */}
            <div>
              <label className={labelStyle}>
                Product Name *
              </label>

              <input
                type="text"
                name="productName"
                placeholder="Enter product name"
                className={inputStyle}
                required
              />
            </div>

            {/* Category and Condition */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

              <div>
                <label className={labelStyle}>
                  Category *
                </label>

                <select
                  name="category"
                  className={inputStyle}
                  required
                  defaultValue=""
                >
                  <option value="" disabled>Select Category</option>
                  <option value="Mobiles">Mobiles</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Vehicles">Vehicles</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Fashion">Fashion</option>
                  <option value="Books">Books</option>
                </select>
              </div>

              <div>
                <label className={labelStyle}>
                  Condition *
                </label>

                <select
                  name="condition"
                  className={inputStyle}
                  required
                  defaultValue=""
                >
                  <option value="" disabled>Select Condition</option>
                  <option value="New">New</option>
                  <option value="Used">Used</option>
                </select>
              </div>

            </div>

            {/* Description */}
            <div>
              <label className={labelStyle}>
                Product Description *
              </label>

              <textarea
                name="description"
                rows="4"
                placeholder="Describe your product..."
                className={`${inputStyle} resize-y`}
                required
              />
            </div>

            {/* Price and Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">

              <div>
                <label className={labelStyle}>
                  Price (₹) *
                </label>

                <input
                  type="number"
                  name="price"
                  placeholder="Enter price"
                  min="1"
                  className={inputStyle}
                  required
                />
              </div>

              <div>
                <label className={labelStyle}>
                  Location *
                </label>

                <input
                  type="text"
                  name="location"
                  placeholder="Enter your city"
                  className={inputStyle}
                  required
                />
              </div>

            </div>

            {/* Contact */}
            <div>
              <label className={labelStyle}>
                Contact Number *
              </label>

              <input
                type="tel"
                name="contact"
                placeholder="Enter 10-digit mobile number"
                inputMode="numeric"
                pattern="[0-9]{10}"
                className={inputStyle}
                required
              />
            </div>

            {/* Image Upload */}
            <div>

              <label className={labelStyle}>
                Upload Product Images *
              </label>

              <div className="border-2 border-dashed border-[#829B78] rounded-xl p-4 sm:p-6 bg-[#F4F0E6] text-center">

                <div className="text-3xl sm:text-4xl mb-3">
                  📸
                </div>

                <p className="text-sm sm:text-base text-[#303B32] font-medium mb-2">
                  Choose product images
                </p>

                <p className="text-xs sm:text-sm text-[#829B78] mb-4">
                  You can select multiple images
                </p>

                <input
                  type="file"
                  name="images"
                  accept="image/*"
                  multiple
                  onChange={handleImageChange}
                  className="w-full min-w-0 text-xs sm:text-sm text-[#303B32]
                    file:mr-2 sm:file:mr-3 file:py-2 file:px-3 sm:file:px-4
                    file:rounded-lg file:border-0
                    file:bg-[#829B78] file:text-white
                    file:font-semibold hover:file:bg-[#6F8966]
                    cursor-pointer"
                />

              </div>

              <p className="text-xs sm:text-sm text-[#829B78] mt-3">
                Selected images: {images.length}
              </p>

              {/* Image Previews */}
              {imagePreviews.length > 0 && (

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mt-4">

                  {imagePreviews.map((preview, index) => (

                    <div
                      key={preview}
                      className="relative rounded-xl overflow-hidden border border-[#DCE3D6] shadow-sm group"
                    >

                      <img
                        src={preview}
                        alt={`Product preview ${index + 1}`}
                        className="w-full aspect-square object-cover"
                      />

                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute top-2 right-2 bg-[#303B32] text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center hover:bg-red-600 active:scale-90 transition duration-300 shadow-md"
                        aria-label={`Remove image ${index + 1}`}
                      >
                        ✕
                      </button>

                    </div>

                  ))}

                </div>

              )}

            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#829B78] hover:bg-[#6F8966] active:scale-[0.98] text-white font-bold py-3 sm:py-3.5 rounded-xl transition duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              Post Product
            </button>

            <p className="text-center text-xs text-[#829B78] leading-5">
              By posting, you agree to provide accurate product details.
            </p>

          </form>

        </div>

      </div>

    </div>
  )
}

export default SellPage

