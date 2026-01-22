import { useEffect, useState } from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"


import Product from "./pages/Product"
import HomePage from "./pages/Homepage"
import Pricing from "./pages/Pricing"
import Login from "./pages/Login"
import AppLayout from "./pages/AppLayout"
import CityList from './components/CityList';
import CountryList from "./components/CountryList"
import City from "./components/City"



const URL = 'https://redesigned-bassoon-949qjrq69r7hpw4w-9000.app.github.dev';
function App() {
const [cities,setCities]  = useState([]);
const [isLoading,setIsLoading] = useState(false);



  useEffect(function(){
    async function getCities(){
      try{
        setIsLoading(true);
        const res = await fetch(`${URL}/cities`);
        const data = await res.json();
        setIsLoading(false);
        setCities(data);

      }catch(err){
        console.log(err.message);
      }
    }
    getCities();
  },[])


  return (
    
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />

        <Route path="app" element={<AppLayout />} >

        <Route index element={<CityList cities={cities} isLoading={isLoading}/>} />
        <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>}/>

        {/* managing state inside a url require three steps 
        1. create a route
        2. create link 
        3. update state/ give state  */}

        <Route path="cities/:id" element={<City />} />
        <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading} />} />
        <Route path="form" element={<p>form</p>}/>
        </Route>

      </Routes>
    </BrowserRouter>
    
  )
}

export default App
