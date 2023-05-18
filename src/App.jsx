import Navbar from "./components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import VisualPage from "./pages/VisualPage";
import About from "./pages/About";
import Features from "./pages/Features";
// import Loader from "./components/Loader";
import NotFound from "./pages/NotFound";
// import { useEffect } from "react";

import Scrolltotop from './components/Scrolltotop';
import More from "./pages/More";
import Weather from "./components/MoreServices.jsx/Weather";
import Diary from "./components/MoreServices.jsx/Diary";
import Market from "./components/MoreServices.jsx/Market";
import Calendar from "./components/MoreServices.jsx/Calendar";
import MoreInfo from "./components/MoreServices.jsx/MoreInfo";
import Top5crops from "./pages/Top5crops";

function App() {


  return (

      <BrowserRouter>
    
        <Navbar/>
        <Scrolltotop></Scrolltotop>
          <Routes >

            <Route index element={<Home/>}></Route>
            <Route exact path="/features" element={<Features/>}></Route>
            <Route exact path="/top5crops" element={<Top5crops/>}></Route>

            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/visualpage" element={<VisualPage/>}></Route>

            <Route path="/more" element={<More/>}>
                  <Route index element={<MoreInfo/>}></Route>
                  <Route  path="weather" element={<Weather/>}></Route>
                  <Route path="calendar" element={<Calendar/>}></Route>
                  <Route  path="market" element={<Market/>}></Route>
                  <Route  path="diary" element={<Diary/>}></Route>


            </Route>


            {/* for tetstinf loader */}
            <Route path="*" element={<NotFound/>} ></Route>
            {/* <Route path="test" element={<Predictor2/>} ></Route> */}
        
          </Routes>
    
      </BrowserRouter>
    
  );
}

export default App;
