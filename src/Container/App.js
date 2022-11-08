
import Navitems from '../Component/Navigation/navitems/Navitems';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import { AuthContext } from "../HOC/ContextApi/AuthCheck";
// import Service from "../Component/Pages/Service";
import { useContext } from "react";
import Login from "../Component/Pages/Login";
import Billing from "../Component/Pages/Billing";
import Category from "../Component/Pages/Category";
import Brand from "../Component/Pages/Brand";
import Layout from "../Hoc/layout/Layout"
// import SpecialOffers from "../Component/Pages/SpecialOffers";
import Staff from "../Component/Pages/Staff";
import Customer from "../Component/Pages/Customer";
import DashBoard from "../Component/Pages/Dashboard";
import Product from "../Component/Pages/Product";
function App() {
  return (
    <div className="App">
      <Router>
      {/* <Navitems/> */}
      <Layout>
          <Routes>
            <Route to exact path="/" element={<DashBoard />} />
            <Route to exact path="/product" element={<Product />} />
            {/* <Route to exact path="/dashboard/:id" element={<Products />} />  */}
            {/* <Route to exact path="/service" element={<Service />} /> */}
            <Route to exact path="/category" element={<Category />} />
            <Route exact path="/brand" element={<Brand />} />
            {/* <Route exact path="/specialOffers" element={<SpecialOffers />} /> */}
            <Route to exact path="/billing" element={<Billing />} />
            <Route to exact path="/customers" element={<Customer />} />
            <Route to exact path="/staff" element={<Staff />} />
          </Routes>
        </Layout>
          {/* <Routes>
        <Route to exact path="/login" element={<Login />} />
        </Routes> */}
        </Router>
     
    </div>
  );
}

export default App;
