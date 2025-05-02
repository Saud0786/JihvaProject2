import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import List from './page/List/List'
import Add from './page/Add/Add'
import {Routes, Route} from 'react-router-dom'
import Orders from './page/Orders/Orders'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const url ="https://food-del-backend-4de4.onrender.com"
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className='app-content'>
        <Sidebar/>
        <Routes>
          <Route path="/orders" element={<Orders url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/add" element={<Add url={url} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
