/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase/config/Config";
import { useDispatch } from "react-redux";
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from "../../redux/slice/authSlice";
import {useSelector} from "react-redux"


function Header() {
  const [changeMenu, setChangeMenu] = useState(false);
  const [displayNam, setDisplayNam] = useState("");
  const [showLinks, setShowLinks] = useState(false);
  const amount = useSelector((store) => store.cart.amount);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const changeMenuToTimes = () => {
    setChangeMenu(!changeMenu);
  };

  const hideMenu = () => {
    setChangeMenu(false);
  };

  const logOutUser = () => {
    signOut(auth)
      .then(() => {
        toast.success("logout successful");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };



  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setShowLinks(false);
      if (user) {
        // console.log(user)
        setShowLinks(true);
        if(user.displayName == null) {
          const name = user.email.slice(0, -10)
          const username = name.charAt(0).toUpperCase() + name.slice(1);
         setDisplayNam(username)
        } else {
          setDisplayNam(user.displayName);
        }


        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName ? user.displayName : displayNam,
            userId: user.uid,
          }));    

      } else {
        setShowLinks(false);
        setDisplayNam("");
        dispatch(
          REMOVE_ACTIVE_USER()
        )
      }
    });

  }, []);


  


  return (
    <header>

      <div className="header">
        <div className="flex-now">
        <div className="logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="35px"
            height="35px"
          >
            <path
              fill="#f80"
              d="M30,43H9c-2.209,0-4-1.791-4-4V18c0-2.209,1.791-4,4-4h21c2.209,0,4,1.791,4,4v21 C34,41.209,32.209,43,30,43z M28,34V23c0-1.657-1.343-3-3-3H14c-1.657,0-3,1.343-3,3v11c0,1.657,1.343,3,3,3h11 C26.657,37,28,35.657,28,34z"
            />
            <path
              d="M34,27v8h-6.18c0.12-0.31,0.18-0.65,0.18-1v-7H34z"
              opacity=".07"
            />
            <path
              d="M34,27.5v7h-6.05C27.99,34.34,28,34.17,28,34v-6.5H34z"
              opacity=".07"
            />
            <path
              fill="#25a2e5"
              d="M39,5H18c-2.21,0-4,1.79-4,4v5h6c0-1.66,1.34-3,3-3h11c1.66,0,3,1.34,3,3v11c0,1.66-1.34,3-3,3H23 c-1.66,0-3-1.34-3-3v-5h-6v10c0,2.21,1.79,4,4,4h21c2.21,0,4-1.79,4-4V9C43,6.79,41.21,5,39,5z"
            />
            <path
              d="M20.18,13C20.06,13.31,20,13.65,20,14h-6.02v-1H20.18z"
              opacity=".05"
            />
            <path
              d="M20.05,13.5C20.01,13.66,20,13.83,20,14h-6.02v-0.5H20.05z"
              opacity=".07"
            />
            <rect
              width="6.019"
              height="1"
              x="13.981"
              y="20"
              opacity=".05"
              transform="rotate(-180 16.99 20.5)"
            />
            <rect
              width="6.019"
              height=".5"
              x="13.981"
              y="20"
              opacity=".07"
              transform="rotate(-180 16.99 20.25)"
            />
          </svg>
          <Link to="/">
            <h1>
              Shop<span className="red">Now</span>
            </h1>
          </Link>
        </div>
        
        <div className="menubars">
          <li>
            <NavLink to="/cart" className="logo">
              Cart
              <FiShoppingCart style={{ color: "white" }} />
            </NavLink>
          </li>
          <li>
            <Link to="#">
              {showLinks && <FaUserCircle style={{ color: "#dd4e40" }}/>}
              {showLinks && <span style={{ color: "#dd4e40" }} >Hi, {displayNam}</span>}
            </Link>
          </li>
          {changeMenu === false ? (
            <FaBars
              className="z-index"
              onClick={changeMenuToTimes}
              style={{ color: "white" }}
            />
          ) : (
            <FaTimes
              className="z-index"
              onClick={changeMenuToTimes}
              style={{ color: "white" }}
            />
          )}
        </div>
        </div>
        
        <nav className="max-display">
          <ul>
            {showLinks && (
              <li>
                <Link to="/admin" className="admin-css">
                  Admin
                </Link>
              </li>
            )}
            {showLinks && (
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
            )}
            {showLinks && (
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            )}
            {showLinks && (
              <li>
                <Link to="/">
                  <FaUserCircle />
                  <span style={{ color: "#dd4e40" }}>Hi, {displayNam}</span>
                </Link>
              </li>
            )}
            {!showLinks && (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
            
            <li>
              <NavLink to="/cart" className="logo">
                Cart
                <FiShoppingCart style={{ color: "white" }} />
                <span className="p-top">{amount}</span>
              </NavLink>
            </li>
            {showLinks && (
              <li>
                <Link to="/" onClick={logOutUser}>
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>

        <nav
          className={`min-display ${
            changeMenu === true ? "opennav" : "min-display"
          }`}
        >
          <ul onClick={hideMenu}>
            {showLinks && (
              <li>
                <Link to="/admin" className="admin-css">
                  Admin
                </Link>
              </li>
            )}
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            {!showLinks && (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
            {!showLinks && (
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            )}
            {showLinks && (
              <li>
                <NavLink to="/" onClick={logOutUser}>
                  Logout
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <div
        className={changeMenu ? `menu-blur` : "menu-blur2"}
        onClick={hideMenu}
      ></div> 
    </header>
  );
}

export default Header;
