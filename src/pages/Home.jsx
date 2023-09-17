import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth.jsx";
import Navbar from '../components/customer/Navbar'
import Footer from "../components/common/Footer.jsx";

export default function Home() {
    const auth = useAuth();
    return auth ? <div className="bg-blue-50 h-screen"><Navbar/><Outlet /><Footer/></div> : <Navigate to="/login" />;
  // return (
  //     <div className="bg-blue-50 h-screen">
  //         {/*<Navbar/>*/}
  //         {/*<Outlet/>*/}
  //         <Dashboard/>
  //         {/*<Footer/>*/}
  //     </div>
  // )
}
