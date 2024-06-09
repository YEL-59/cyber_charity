
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Programs from './Pages/Programs/Programs';
import Aboutus from './Pages/Aboutus/Aboutus';
import ContactUs from './Pages/ContactUs/ContactUs';
import GetInvoice from './Pages/GetInvoice/GetInvoice';





const App = () => {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/getinvoice" element={<GetInvoice/>} />
      </Routes>
    </>
  );
}

export default App
