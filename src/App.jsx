
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Programs from './Pages/Programs/Programs';





const App = () => {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/programs' element={<Programs/>}/>
       
      </Routes>

    </>
  )
}

export default App
