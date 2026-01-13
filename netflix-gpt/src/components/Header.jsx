import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { removeUser, updateUser } from "../redux/userSlice";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ updateGPTBtn, showGPTSerach, movieID }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    //When user sign in or sign out i.e auth state change this event lister will be called..
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          updateUser({
            displayName: user?.displayName,
            email: user?.email,
            uid: user?.uid,
          })
        );

        //Only navigate to browse when user is signed in..
        if (movieID) navigate("/browse/" + movieID);
        else navigate("/browse");
      } else {
        // User is signed out go to home page
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Clean up logic when component unmount..
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //Sign Out success
      })
      .catch((err) => {
        console.log(err);
        //An error occured
      });
  };

  const handleGPTSearch = () => {
    updateGPTBtn();
  };
  return (
    <div className="absolute w-full flex  justify-between bg-linear-to-b from-gray-950  h-20 z-30">
      <h1 className="text-4xl  p-5 font-bold text-red-500 cursor-pointer">
        <Link to={"/browse"}> NETFLIX</Link>
      </h1>
      {user && (
        <div className="flex justify-center items-center">
          {!movieID && (
            <button
              className="bg-amber-500 p-2 rounded-2xl text-white font-bold hover:bg-amber-600 hover:cursor-pointer"
              onClick={handleGPTSearch}
            >
              {showGPTSerach ? "GoHome" : "GPTSearch"}
            </button>
          )}
          <button
            className="bg-red-500 p-2 my-auto mx-10 rounded-2xl font-bold text-white hover:bg-red-600 hover:cursor-pointer"
            onClick={handleSignOut}
          >
            <span className="flex  items-center justify-center gap-1.5">
              SignOut
              <FaSignOutAlt />
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
