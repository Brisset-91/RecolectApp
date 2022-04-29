import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/navbar/navbar';
// import PayMethodForm from './Components/payMethodForm/payMethodForm';
// import { Input } from 'reactstrap';
// import BusinessCard from './Components/businessCard/businessCard';
// import CollectConfirmedCard from './Components/collectConfirmedCard/collectConfirmedCard';
// import RegisterForm from './Components/registerForm/registerForm';
// import NavBar from './Components/navbar/navbar';
// import PrimaryButton from './Components/primaryButton/primaryButton';
// import SecundaryButton from './Components/secondaryButton/secondaryButton';
// import TotalPaymentButton from './Components/totalPaymentButton/totalPaymentButton';
// import BusinesTypeForm from './Components/businesTypeForm/businesTypeForm';
// import WasteTypeForm from './Components/wasteTypeForm/wasteTypeForm'
// import UpdateDateForm from './Components/updateDateForm/updateDateForm';
// import WalletCard from './Components/walletCard/walletCard';
// import ContactOfficeCard from './Components/contactOfficeCard/contactOfficeCard';
// import ProfileSettingForm from './Components/profileSettingForm/profileSettingForm';
// import BlogCard from './Components/blogCard/blogCard';
// import HistoryCard from './Components/historyCard/historyCard';
// import ThirdButton from './Components/thirdButton/thirdButton';

import AddNewBusiness from './pages/AddNewBusiness/addNewBusiness';
import AddNewCollect from './pages/AddNewCollect/addNewCollect';
import History from './pages/History/history';
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Payment from './pages/Payment/Payment';
import Pocket from './pages/Pocket/pocket';
import Pricing from './pages/Pricing/pricing';
import ProfileSettings from './pages/ProfileSettings/profileSettings';
import Register from './pages/Register/register';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='prueba' element={< Navbar />} />
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
        <Route path='newsletter' element={<AddNewCollect />} />

      </Routes>
    </div>
  );
}

export default App;
