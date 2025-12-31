import { useContext, useState } from "react";
import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const online = useOnlineStatus();

  // useContext Accepts a context object (the value returned from React.createContext) and returns the current context value,
  // as given by the nearest context provider for the given context.
  const { loggedInUserName } = useContext(UserContext);
  const cartItems = useSelector((state) => state.cart.items.length); //subscribing to store, when state in store changes all subscribed components will re-render

  return (
    <div className="w-full flex justify-between items-center shadow-lg bg-gray-100">
      <div className="w-30 ">
        <Link to="/">
          <img src={LOGO_URL} alt="Logo" className="rounded-full" />
        </Link>
      </div>

      <div>
        <ul className="flex mx-5 gap-6">
          <li className="text-2xl"> {online ? "Online ✅" : "Offline 🚫"}</li>
          <li className="text-2xl">
            <Link
              to="/"
              className="hover:text-red-500 hover:underline underline-offset-4 px-2 py-1 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              Home
            </Link>
          </li>
          <li className="text-2xl">
            <Link
              to="/about"
              className="hover:text-red-500 hover:underline underline-offset-4 px-2 py-1 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              About
            </Link>
          </li>
          <li className="text-2xl">
            <Link
              to="/contact"
              className="hover:text-red-500 hover:underline underline-offset-4 px-2 py-1 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              Contact
            </Link>
          </li>
          <li className="text-2xl">
            <Link
              to={"/cart"}
              className="hover:text-red-500 hover:underline underline-offset-4 px-2 py-1 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-300"
            >
              🛒 {cartItems}
            </Link>
          </li>
          <button
            className="px-4 text-xl w-20 text-white transition bg-red-500 rounded-xl hover:cursor-pointer hover:bg-red-600"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
          <li className="text-xl">{loggedInUserName}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
