import React from 'react';
import "./App.css";
import { Route, Routes} from "react-router-dom";
import Home from './Screens/Landing/Home';
// import Properties from './Screens/Landing/Properties';
function App() {
  return (
    <div className='w-full bg-white'>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/properties' element={<Properties/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
