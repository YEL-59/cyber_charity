
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Programs from './Pages/Programs/Programs';
import Aboutus from './Pages/Aboutus/Aboutus';





const App = () => {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/programs' element={<Programs/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
      </Routes>

    </>
  )
}

export default App
