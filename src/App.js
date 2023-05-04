import styles from './App.module.css'
import { Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Navbar from "./pages/navbar/Navbar"
import Classes  from './pages/classes/Classes';
import  AboutUs from './pages/aboutUs/AboutUs';
import  Footer  from './pages/footer/Footer';
import JoinUs from './pages/joinUs/JoinUs';
import Trainer from './pages/trainer/Trainer';
import Pricing from './pages/pricing/Pricing';
import SignIn from './pages/joinUs/signIn/SignIn';
function App() {
  return (
    <div className={styles.main}>
        
        <Navbar/>
        <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/aboutUs' element={<AboutUs/>}/>
           <Route path='/classes' element={<Classes/>}/>
           <Route path='/trainer' element={<Trainer/>}/>
           <Route path='/joinus' element={<JoinUs/>}/>
           <Route path='/pricing' element={<Pricing/>}/>
           <Route path='/signin' element={<SignIn/>}/>
           
        </Routes>
    
        <Footer/>
      
    </div>
  );
}

export default App;