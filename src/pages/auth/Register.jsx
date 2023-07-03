import { NavLink, useNavigate } from "react-router-dom";
import registerImg from "../../assets/bg2.jpg";
import { useState } from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Loder from "../../components/loader/Loder";
import { auth } from "../../firebase/config/Config";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== password2) {
     toast.error("password does not match.");
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
     .then(() => {
        // const user = userCredential.user;
        // console.log(user)
        setIsLoading(false);
        toast.success("Registeration successfully");
        navigate("/login");
      })
      .catch((error) => {
        setIsLoading(true);
        toast.error(error.message);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <Loder />}
      <section className="login-page">
        <div className="form">
          <h2>Register</h2>
          <form className="login-form" onSubmit={handleRegister}>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email Address"
              required
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
              required
            />
            <input
              type="password"
              onChange={(e) => setPassword2(e.target.value)}
              value={password2}
              placeholder="Confirm Password"
              required
            />
            <button>Register</button>
          </form>
          <span className="google">
            <NavLink className="forget" to="/login">
              Alredy have an account? Login here
            </NavLink>
          </span>
        </div>

        <div className="login-image">
          <img src={registerImg} alt="register" />
        </div>
      </section>
    </>
  );
};

export default Register;
