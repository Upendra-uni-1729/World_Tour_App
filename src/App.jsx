import { BrowserRouter,Routes,Route } from "react-router-dom"
import Product from "./pages/Product"
import HomePage from "./pages/Homepage"
import Pricing from "./pages/Pricing"
import Login from "./pages/Login"
import AppLayout from "./pages/AppLayout"
import { useEffect, useState } from "react"


const URL = 'https://redesigned-bassoon-949qjrq69r7hpw4w-9000.app.github.dev';
function App() {
const [cities,setCities]  = useState({});
const [isLoading,setIsLoading] = useState(false);

//console.log(cities,isLoading);

  useEffect(function(){
    async function getCities(){
      try{
        setIsLoading(true);
        const res = await fetch(`${URL}/cities`);
        const data = await res.json();
        setIsLoading(false);
        setCities(() => data);

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

        <Route index element={<p>List</p>}/>
        <Route path="cities" element={<p>List of cities</p>}/>
        <Route path="countries" element={<p>List of countries</p>}/>
        <Route path="form" element={<p>form</p>}/>
        </Route>

      </Routes>
    </BrowserRouter>
    
  )
}

export default App
