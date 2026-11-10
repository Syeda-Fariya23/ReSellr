import React, { useState,useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
const AuthPage = () => {
  const navigate = useNavigate()
  const { setUser } = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)

    const email = formData.get('email')
    const password = formData.get('password')

    if (isLogin) {
      // console.log("Login:", email, password)
      setUser({
        name:"fariya",
        email:email,
      })
      navigate("/")
    } else {
      const name = formData.get('name')
      const phone = formData.get('phone')
      const confirmPassword = formData.get('confirmPassword')

      if (password !== confirmPassword) {
        alert("Passwords do not match!")
        return
      }

      console.log("Name:", name)
      console.log("Email:", email)
      console.log("Phone:", phone)

      alert("Account created successfully!")

      navigate('/')
    }
  }

  return (
    <div className="min-h-screen bg-[#F4F0E6] flex items-center justify-center px-4 sm:px-6 py-8 sm:py-10">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-5 sm:p-7 md:p-8">

        {/* Heading */}
        <div className="text-center mb-6 sm:mb-8">

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#303B32] mb-2">
            {isLogin ? "Welcome Back!" : "Create Account"}
          </h2>

          <p className="text-sm sm:text-base text-gray-500">
            {isLogin
              ? "Login to your ReSellr account"
              : "Join ReSellr and start buying & selling"}
          </p>

        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

          {/* Full Name - Sign Up Only */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold text-[#303B32] mb-2">
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                autoComplete="name"
                required
                className="w-full min-w-0 border border-[#DCE3D6] rounded-lg px-3 sm:px-4 py-3 text-sm sm:text-base outline-none focus:border-[#829B78] focus:ring-2 focus:ring-[#DCE3D6] transition"
              />
            </div>
          )}

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-[#303B32] mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              autoComplete="email"
              required
              className="w-full min-w-0 border border-[#DCE3D6] rounded-lg px-3 sm:px-4 py-3 text-sm sm:text-base outline-none focus:border-[#829B78] focus:ring-2 focus:ring-[#DCE3D6] transition"
            />
          </div>

          {/* Phone - Sign Up Only */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold text-[#303B32] mb-2">
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                autoComplete="tel"
                inputMode="numeric"
                pattern="[0-9]{10}"
                title="Enter a valid 10-digit phone number"
                required
                className="w-full min-w-0 border border-[#DCE3D6] rounded-lg px-3 sm:px-4 py-3 text-sm sm:text-base outline-none focus:border-[#829B78] focus:ring-2 focus:ring-[#DCE3D6] transition"
              />
            </div>
          )}

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-[#303B32] mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              autoComplete={isLogin ? "current-password" : "new-password"}
              minLength="6"
              required
              className="w-full min-w-0 border border-[#DCE3D6] rounded-lg px-3 sm:px-4 py-3 text-sm sm:text-base outline-none focus:border-[#829B78] focus:ring-2 focus:ring-[#DCE3D6] transition"
            />
          </div>

          {/* Confirm Password - Sign Up Only */}
          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold text-[#303B32] mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                autoComplete="new-password"
                minLength="6"
                required
                className="w-full min-w-0 border border-[#DCE3D6] rounded-lg px-3 sm:px-4 py-3 text-sm sm:text-base outline-none focus:border-[#829B78] focus:ring-2 focus:ring-[#DCE3D6] transition"
              />
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#829B78] hover:bg-[#6F8966] active:scale-[0.98] text-white font-bold py-3 rounded-lg shadow-sm transition duration-300"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>

          {/* Switch Form */}
          <p className="text-center text-xs sm:text-sm text-gray-600 pt-2">

            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#829B78] font-bold ml-1 hover:underline"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>

          </p>

        </form>

      </div>

    </div>
  )
}

export default AuthPage
