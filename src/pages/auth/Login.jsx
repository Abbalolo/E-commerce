
import loginImg from "../../assets/bg1.jpg"
import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import {FaGoogle} from "react-icons/fa"
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/config/Config"
import 'react-toastify/dist/ReactToastify.css';
import {toast } from "react-toastify"
import Loder from "../../components/loader/Loder"



function Login() {
  const [password, setPassword] = useState("")
  const [email , setEmail] = useState("")
  const [isLoading, setIsLoading] = useState("")
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    setIsLoading(true)

    signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {

    const user = userCredential.user;
    console.log(user)
    setIsLoading(false)
    toast.success("successfully login")
    navigate("/")

  })
  .catch((error) => {
    setIsLoading(true)
    toast.error(error.message)
    toast.error("please check email or password")
    setIsLoading(false)
  });


  }
  
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    setIsLoading(true)
    signInWithPopup(auth, provider)
  .then(() => {
    setIsLoading(false)
    toast.success("login successfull ")
    navigate("/")
   
  }).catch((error) => {
    setIsLoading(false)
   toast.error(error.message)
  });

  }
   
  return (
    <>
    {isLoading && <Loder/>}
    <section className="login-page">

      <div className="login-image">
        <img src={loginImg} alt="login" />
      </div>

      <div className="form">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <input type="email" onChange={((e) => setEmail(e.target.value))} value={email} placeholder="Email Address" required/>
          <input type="password" onChange={((e) => setPassword(e.target.value))}  value={password} placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <span className="google">
        <NavLink className="forget" to="/reset">forget your password</NavLink>
        <span className="line">--or--</span>
        <button className="google-btn" onClick={signInWithGoogle}><FaGoogle/>Continue with Google</button>
        <NavLink className="forget" to="/register">Dont have an account? register here</NavLink>
        </span>

      </div>
    </section>
    </>
  )
}

export default Login