import React,{useState} from 'react'
import { auth,  } from '../firebase';
// import {  storage } from '../firebase';
import {useNavigate} from 'react-router-dom'

export default function Signup() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    // const [image, setImage] = useState(null);

    const handleSubmit= async (e)=>{
        e.preventDefault()
        console.log(email,password)

        try{
          const result = await auth.createUserWithEmailAndPassword(email,password)
          window.M.toast({html: `Welcome ${result.user.email}`, classes:"green"})
          navigate('/')
        }
        catch(err){
          window.M.toast({html: err.message, classes:"red"})
        }
      
    }

    // const handleFileInputChange = (e) => {
    //   setImage(e.target.files[0]);
    // };

    // const handleUpload = async () => {
    //   try {
    //     const user = auth.currentUser;
    //     const storageRef = storage.ref(`users/${user.uid}/profile-picture`);
    //     const uploadTask = storageRef.put(image);
  
    //     uploadTask.on('state_changed', null, null, () => {
    //       uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
    //         user.updateProfile({
    //           photoURL: downloadURL,
    //         });
    //         window.M.toast({ html: 'Profile picture updated', classes: 'green' });
    //         // navigate('/profile');
    //       });
    //     });
    //   } catch (err) {
    //     window.M.toast({ html: err.message, classes: 'red' });
    //   }
    // };


  return (
    <div className='container z-depth-2 white br1' style={{maxWidth:'500px', padding:'30px', marginTop:'37px'}} >
      <h3 className='center '>Please Signup</h3>
      <form onSubmit={(e)=>handleSubmit(e)}>
      <div class="input-field ">
          <input placeholder='Email' type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input placeholder='Password' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        

          <button className="btn green" type='submit' >Signup</button>
          
        </div>
      </form>
    </div>
  )
}
