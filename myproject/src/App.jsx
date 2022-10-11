import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import MyNaveBare from './components/Nave';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Footer from './components/footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyShop from './pages/shoping';
import ContactUS from './pages/contactus';
import Aboutus from './pages/aboutus';
import MenProdect from './components/menprodect';
import WomenProdect from './components/women';
import KidsProdect from './components/kids';
import ProdactDetails from './components/prodectdetails';
import Newsitem from './components/newItem';
import WomenDetails from './components/womDetil';
import KidsDetails from './components/kiddet';




function App() {
  let username = "Aya";
  const [childData, setChildData] = useState("");
  const [count, setCount] = useState(0);

  let getChildData = (data) => {
    setChildData(data);
  };

  let getCounterValue = (data) => {
    setCount(data);
  };
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner&family=Roboto:ital,wght@0,100;0,500;0,700;1,400;1,500;1,700&family=Work+Sans:wght@200;800&display=swap');
  </style>
  return (
    <div className="App">
      <MyNaveBare></MyNaveBare>

      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="shop" element={<MyShop />}>

          <Route path="men" element={<MenProdect />} />
          <Route path="kids" element={<KidsProdect />} />
          <Route path="women" element={<WomenProdect />} />
        </Route>

        <Route path='contactus' element={<ContactUS />} />
        <Route path='aboutus' element={<Aboutus />} />
        <Route path='more' element={<ProdactDetails />} />
        <Route path='moredetil' element={<WomenDetails />} />
        <Route path='kidsdetil' element={<KidsDetails />} />





      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
