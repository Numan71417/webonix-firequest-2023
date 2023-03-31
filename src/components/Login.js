import React,{useState} from 'react'
import {auth} from '../firebase'
import {useNavigate} from 'react-router-dom'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const handleSubmit= async (e)=>{
          e.preventDefault()
          // console.log(email,password)
  
          try{
            const result = await auth.signInWithEmailAndPassword (email,password)
            window.M.toast({html: `Welcome ${result.user.email}`, classes:"green"})
            navigate('/')
          }
          catch(err){
            window.M.toast({html: err.message, classes:"red"})
          }
    }
  return (
    <div className='container z-depth-2 white br1' style={{maxWidth:'500px', padding:'30px', marginTop:'7px'}}>
      <h3 className='center'>Please Login</h3>
      <form onSubmit={(e)=>handleSubmit(e)}>
      <div class="input-field ">
          <input placeholder='Email' type="email" value={email} onChange={(e)=>setEmail(e.target.value) } />
          <input placeholder='Password' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <button className="btn green" type='submit' >Login</button>
          
        </div>
      </form>
    </div>
  )
}
