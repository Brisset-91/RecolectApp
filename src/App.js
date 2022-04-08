import { Routes, Route } from 'react-router-dom'
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
import ThirdButton from './Components/thirdButton/thirdButton';
import AddNewBusinessOne from './pages/AddNewBusinessOne/addNewBusinessOne'
import Login from './pages/Login/login';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={ < Login /> } />
        <Route path='prueba' element={ < ThirdButton /> } />
        <Route path='AddNewBusinessOne' element={<AddNewBusinessOne />} />
      </Routes>
    </div>
  );
}

export default App;
