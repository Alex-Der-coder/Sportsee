import logo from './assets/SportSee.svg';
import Bike from './assets/Strong.svg';
import Weight from './assets/Strong.svg';
import Swim from './assets/Swim.svg';
import Zen from './assets/Zen.svg';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound.jsx'
import { BrowserRouter as Router, Route, Routes , Navigate } from 'react-router-dom';
import './App.css';

function App() {
  
  return (
    <div className="relative h-screen flex items-center justify-center">
      <Router>
        <Routes>
          <Route path="/user/:userId" element={<Dashboard />} />
          <Route path="/user/*" element={<Navigate to="/user/404" />} />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </Router>
      <div className="absolute h-1 w-full h-14 bg-black top-0 flex justify-between ">
        <div className="flex justify-between "><img src={logo} alt="Logo" className="z-1 h-9 top-2 pl-2 max-w-full absolute" style={{ zIndex: 1 }}/></div>
          <div className="p-2.5 bg-black font-bold text-white flex flex-row max-w-90 justify-around pl-16 mt-1 w-[70rem] ">
         {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="text-white">Accueil</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="text-white">Profil</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="text-white">Réglage</a>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a href="#" className="text-white">Communauté</a>
          </div>
        </div>
      <div className="pt-[12rem] fixed w-1 h-full w-16 bg-black left-0 flex flex-col justify-evenly items-center">
        <div className="flex flex-col justify-between h-[12rem] w-8 ">
          <img src={Zen} alt="Logo" className="" />
          <img src={Swim} alt="Logo" className="" />
          <img src={Bike} alt="Logo" className="" />
          <img src={Weight} alt="Logo" className="" />
        </div>
        <div className="flex flex-col text-white -rotate-90 whitespace-nowrap text-sm pr-12">Copiryght, SportSee 2020</div>
    </div>
    </div>  
  );
};


export default App;
