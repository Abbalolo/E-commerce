
import resetImg from "../../assets/reset.jpg"
import { useState } from "react"
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import { auth } from '../../firebase/config/Config'
import { sendPasswordResetEmail } from 'firebase/auth'
import Loder from '../../components/loader/Loder'
const Reset = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const handleReset = (e) => {
    e.preventDefault();
    setIsLoading(true)

    sendPasswordResetEmail(auth, email)
  .then(() => {
    setIsLoading(false)
    toast.success("check your email to reset")
  })
  .catch((error) => {
    setIsLoading(false)
    toast.error(error.message)
  });

  }
  return (
    <>
    {isLoading && <Loder/>}
    <section className="login-page">

    <div className="login-image">
      <img src={resetImg} alt="reset" />
    </div>
    <div className="form">
      <h2>Reset</h2>
      <form className="login-form" onSubmit={handleReset}>
        <input type="email" onChange={((e) => setEmail(e.target.value)) } value={email} placeholder="Email Address" required/>
        <button>Reset</button>
      </form>
      <span className="google-reset">
      <NavLink className="forget" to="/login">-Login</NavLink>
      <NavLink className="forget" to="/register">-Register</NavLink>
      </span>

    </div>


  </section>
  </>
  )
}

export default Reset