import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './Components/Home/Main';
import Parts from './Components/Parts/Parts';
import ContactUs from './Components/ContactUs/ContactUs';
import AboutUs from './Components/AboutUs/AboutUs';
import PrivacyPolicy from './Components/AboutUs/PrivacyPolicy';
import ReturnPolicy from './Components/AboutUs/ReturnPolicy';
import TermsAndCondition from './Components/AboutUs/TermsAndCondition';
import Brands from './Components/Brands/Brands';
import whatsapp from './Assets/whatsapp_icon.png'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/parts" element={<Parts />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/returnpolicy" element={<ReturnPolicy />} />
        <Route path="/termandconditions" element={<TermsAndCondition />} />
        <Route path="/brands" element={<Brands />} />
      </Routes>
      <a href="https://wa.me/+919015083407" target="_blank" ><img className="whatsapp" src={whatsapp} alt="whatsapp" /></a>
    </>
  );
}

export default App;