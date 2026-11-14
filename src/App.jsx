import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/HomePage'
import ProductPage from "./pages/ProductPage";
import AuthPage from "./pages/AuthPage";
import  SellPage from "./pages/SellPage";
import ProductDetailPage from './pages/ProductDetailPage';
import {AuthProvider} from "./context/AuthContext";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./components/ProtectedRoute";
import MyListingPage from './pages/MyListingPage';
const App = () => {
  return (
    <BrowserRouter>
    <AuthProvider>

      <div>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/allproducts' element={<ProductPage />} />
          <Route path='/auth' element={<AuthPage/>}/>
          <Route path='/sell' element={<SellPage/>}/>
          <Route path='/product/:id' element={<ProductDetailPage/>}/>
          <Route path='/profile' element={<ProtectedRoute>
            <ProfilePage />
        </ProtectedRoute>}/>
          <Route path='/my-listings' element={<ProtectedRoute>
            <MyListingPage />
        </ProtectedRoute>}/>
        </Routes>
      </div>
    </AuthProvider>
    </BrowserRouter>
  )
}

export default App