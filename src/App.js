import './App.css'
import Navbar from './components/Navbar';
import {BrowserRouter} from 'react-router-dom';
// import {Route} from 'react-router-dom'
import { Routes ,Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import React,{useState, useEffect} from 'react'
import {auth} from './firebase'


function App() {
const [user,setUser] = useState(null)
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user) setUser(user)
      else setUser(null)
    })
  }, [])


  return (
<BrowserRouter>
      <Navbar user= {user}/>
      
    <Routes>

      <Route exact path='/'  element={<Home user={user} />}/>
        
      <Route  path='/login' element={<Login/>}/>
        
      <Route  path='/signup' element={<Signup/>}/>
       
    </Routes>  

</BrowserRouter>
  );
}

export default App;
