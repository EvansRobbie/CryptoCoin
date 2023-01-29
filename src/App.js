import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp'
import Account from './pages/Account'
import Coin from './pages/Coin'
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  
  return (
    <div className="">
      <Navbar/>
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/signin' element={ <SignIn/>}/>
        <Route path='/signup' element={ <SignUp/>}/>
        <Route path='/account' element={<ProtectedRoute> <Account/> </ProtectedRoute>}/>
        <Route path='/coin/:coinID' element={<Coin/>}>
          <Route path =':coinID' />
        </Route>
      </Routes>
      <Footer/>
    </div>
  ); 
}

export default App;
