import { signOut } from "firebase/auth";
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { removeUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //Sign Out success
        dispatch(removeUser());
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        //An error occured
      });
  };

  return (
    <div className="absolute w-full flex  justify-between bg-linear-to-b from-gray-950  h-20 z-10">
      <h1 className="text-4xl  p-5 font-bold text-red-500 ">NETFLIX</h1>

      {user && (
        <button
          className="bg-red-500 w-30 h-10 my-auto mx-10 rounded-2xl font-bold text-white hover:bg-red-600 hover:cursor-pointer"
          onClick={handleSignOut}
        >
          <span className="flex  items-center justify-center gap-1.5">
            SignOut
            <FaSignOutAlt />
          </span>
        </button>
      )}
    </div>
  );
};

export default Header;
