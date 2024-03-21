
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './Components/Home';
import Cart from './Components/Cart';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import NewProduct from './Components/admin/management/NewProduct';
import AdminLogin from './Components/admin/AdminLogin';
import UserLogin from './Components/user/UserLogin';
import Shipment from './Components/checkout/Shipment';
import AdminPanel from './Components/admin/AdminPanel';
import Panel from './Components/admin/Panel';
import ShippingDetails from './Components/ship/ShippingDetails';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
            <Route index path='/login' element={<UserLogin/>}/>
            <Route index path='/' element={<Home/>}/>
            <Route  path='/cart/:id' element={<Cart/>}/>
            <Route  path='/buy' element={<ShippingDetails/>}/>
            <Route  path='/new' element={<NewProduct/>}/>
            <Route  path='/adminlogin' element={<AdminLogin/>}/>
            <Route  path='/shipment' element={<Shipment/>}/>
            <Route  path='/panel' element={<Panel/>}/>
            
        </Routes>
      </BrowserRouter>
      
         
      
    </div>
  );
}

export default App;
