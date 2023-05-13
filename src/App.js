import logo from './logo.svg';
import './App.css';
import Navbarcompo from './componets/Navbarcompo/Navbarcompo';
import Footer from './componets/Footer/Footer';


import { Outlet, Navigate } from "react-router-dom";



function App() {
  return (
    <div className="App">
  <Navbarcompo />
     
    <Navigate to="/home" />
     <Outlet/>
      
   <Footer />
    </div>
  );
}

export default App;
