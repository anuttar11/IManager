import './App.css';
import Detailpage from './components/DetailPage/Detailpage';
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
// import Login from './components/Login/Login';
// import Login from './components/Login/Login';
import Homepage from './Pages/Homepage';

function App() {
  return (
    <div >
      {/* <Login/> */}
    
      <Routes>
        <Route path="/" element={ <Homepage/> } />
        {/* <Route path="detail" element={   <Detailpage/> } /> */}
    
      </Routes>
      
    </div>
  );
}

export default App;
