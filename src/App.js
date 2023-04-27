import './App.css';
import { Routes, Route } from "react-router-dom"
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
