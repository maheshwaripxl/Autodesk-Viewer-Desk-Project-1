import React from 'react'
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import Dashboard from './Components/Dashboard/Dashboard';
import Location from './Components/Locations/Location';
import Product from './Components/Products/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Asset from './Components/Locations/Asset';
import UserGmailProfile from './Components/Common/Gmail';
import OpenProductImg from './Components/OpenProductImage/OpenProductImg';

const App = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/location' element={<Location/>}/>
          <Route path='/product' element={<Product />}/>
          <Route path='/openproduct' element={<OpenProductImg />}/>
        </Routes>
      </BrowserRouter>
      {/* <h1>Hey Mahi !!!</h1> */}
      {/* <SignIn /> */}
      {/* <SignUp/> */}
      {/* <Dashboard /> */}
      {/* <Location/> */}
      {/* <Product/> */}
      {/* <Asset/> */}
      {/* <UserGmailProfile/> */}
    </>

  )
}

export default App;