import logo from './logo.svg';
import './App.css';
import AddProducts from './Pages/AddProducts';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './Pages/Error';
import Products from './Pages/Products';
import Update from './Pages/Update';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path="/addproducts" element={<AddProducts/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path='/updates/:id' element={<Update/>}/>
      <Route path="*" element={<Error/>} />
    </Routes>
    </BrowserRouter>


      
    </div>
  );
}

export default App;
