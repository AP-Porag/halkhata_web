import {Route, Routes} from 'react-router-dom'
import Login from "./pages/Login"
import PublicOutlet from "./components/common/PublicOutlet.jsx";
import Home from "./pages/Home.jsx";
import Due from "./views/customer/Due.jsx";
import Dashboard from "./views/customer/Dashboard.jsx";
import Payment from "./views/customer/Payment.jsx";
import Shops from "./views/customer/Shops.jsx";
import Profile from "./views/customer/Profile.jsx";
import ShopProfile from "./views/customer/ShopProfile.jsx";


export default function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<PublicOutlet/>}>
            <Route path="/login" element={<Login/>}/>
          </Route>
          <Route path="/*" element={<Home />}>
            <Route path="home" element={<Dashboard title="Home" />} />
            <Route path="due" element={<Due title="Due" />} />
            <Route path="payment" element={<Payment title="Due" />} />
            <Route path="shops" element={<Shops title="Due" />} />
            <Route path="shop/:id" element={<ShopProfile title="Due" />} />
            <Route path="profile" element={<Profile title="Due" />} />
          </Route>

        </Routes>
      </div>

  )
}
