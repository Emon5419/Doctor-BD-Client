import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/Home/About';
import Appointment from './Pages/Home/Appointment';
import Reviews from './Pages/Home/Reviews';
import CountactUs from './Pages/Home/ContactUs';
import Login from './Pages/Home/Login';





function App() {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/appointment' element={<Appointment></Appointment>} ></Route>
        <Route path='/reviews' element={<Reviews></Reviews>} ></Route>
        <Route path='/contact' element={<CountactUs></CountactUs>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
