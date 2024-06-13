
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Programs from './Pages/Programs/Programs';
import Aboutus from './Pages/Aboutus/Aboutus';
import ContactUs from './Pages/ContactUs/ContactUs';
import GetInvoice from './Pages/GetInvoice/GetInvoice';
import Resources from './Pages/Resources/Resources'
import Donation from './Pages/Donation/Donation';




const App = () => {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/getinvoice" element={<GetInvoice />} />
        <Route path="/resources" element={<Resources />} />
        <Route path='/donation' element={<Donation/>}/>
      </Routes>
    </>
  );
}

export default App
