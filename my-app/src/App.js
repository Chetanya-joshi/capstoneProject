import React from 'react'
import {BrowserRouter  , Route , Routes} from 'react-router-dom';
import Signup from './components/SignUp/Signup';
import Home from './components/Home/Home';
import Signin from './components/SignIn/Signin';
import Product from './components/Products/Products';
export default function App() {
  return (
    <div>
        <BrowserRouter>

<Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/signup" element={<Signup />}></Route>
  <Route path="/signin" element={<Signin />}></Route>
  <Route path="/product" element={<Product />}></Route>
</Routes>

</BrowserRouter>
    </div>
  )
}
