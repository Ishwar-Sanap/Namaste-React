import { useState } from "react";
import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const online = useOnlineStatus();

  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={LOGO_URL} alt="Logo" className="logo" />
      </div>

      <div className="nav-container">
        <ul className="nav-items">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li> <Link to="/contact">Contact</Link></li>
          <li> {online ? "Online ✅" : "Offline 🚫"}</li>
          <li>Cart</li>
          <button
            className="btn btn-login"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
