import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/navbar/navbar';


import AddNewBusiness from './pages/AddNewBusiness/addNewBusiness';
import AddNewCollect from './pages/AddNewCollect/addNewCollect';
import History from './pages/History/history';
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Newsletter from './pages/Newsletter/newsletter';
import Payment from './pages/Payment/Payment';
import Pocket from './pages/Pocket/pocket';
import Pricing from './pages/Pricing/pricing';
import ProfileSettings from './pages/ProfileSettings/profileSettings';
import Register from './pages/Register/register';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='register' element={ < Register /> }/>
        <Route path='/' element={ < Login /> } />
        <Route path='home' element={ < Home /> }/>
        <Route path='addNewBusiness' element={<AddNewBusiness />} />
        <Route path='addNewCollect' element={<AddNewCollect />} />

        <Route path='pocket' element={<Pocket/>} />
        <Route path='history' element={<History />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='payment' element={<Payment />} />
        <Route path='profileSettings' element={<ProfileSettings />} />
        <Route path='newsletter' element={<Newsletter />} />

      </Routes>
    </div>
  );
}

export default App;
