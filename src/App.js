import './App.css'
import Navbar from './components/Navbar';
import {BrowserRouter} from 'react-router-dom';
// import {Route} from 'react-router-dom'
import { Routes ,Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import React,{useState, useEffect} from 'react'
import {auth} from './firebase';
import AdminLogin from './components/Adminpage';
import Dashboard from './components/Dashboard';
// import Trash from './components/Trash';
// import Trash2 from './components/Trash2';



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

      <Route exact path='/dashboard'  element={<Dashboard user={user} />}/>
     

      {/* <Route  path='/trash' element={<Trash/>}/>   */}
      {/* <Route  path='/trash2' element={<Trash2/>}/> */}


      <Route  path='/login' element={<Login/>}/>

      <Route  path='/Admin' element={<AdminLogin/>}/>
        
      <Route  path='/signup' element={<Signup/>}/>
       
    </Routes>  

</BrowserRouter>
  );
}

export default App;
