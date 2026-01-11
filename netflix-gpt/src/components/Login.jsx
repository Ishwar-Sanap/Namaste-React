import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkvalidData } from "../utils/validate";
import { LuEye } from "react-icons/lu";
import { LuEyeOff } from "react-icons/lu";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/userSlice";
import {
  BACKGROUND_IMG_URL,
  INVALID_CREDENTIALS,
  INVALID_PASSWORD,
  WEAK_PASSWORD,
} from "../utils/constants";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const dispatch = useDispatch();

  const handleSignIn = () => {
    setSignIn(!signIn);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const message = checkvalidData(email.current.value, password.current.value);
    if (message) {
      if (signIn && message === WEAK_PASSWORD) setErrMessage(INVALID_PASSWORD);
      else setErrMessage(message);

      return;
    }

    setErrMessage(null);

    if (!signIn) {
      //Sign Up Logic

      const handleSignUp = async () => {
        try {
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
          );
          //Adding display UserName
          await updateProfile(userCredential.user, {
            displayName: userName.current.value,
          });

          dispatch(
            updateUser({
              displayName: userCredential?.user?.displayName,
              email: userCredential?.user?.email,
              uid: userCredential?.user?.uid,
            })
          ); // adding user deatails in store to access everywhere..
        } catch (error) {
          setErrMessage(error.message);
        }
      };

      handleSignUp();
    } else {
      //sign in Logic
      const handleSignIn = async () => {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
          );

          dispatch(
            updateUser({
              displayName: userCredential?.user?.displayName,
              email: userCredential?.user?.email,
              uid: userCredential?.user?.uid,
            })
          ); // adding user deatails in store to access everywhere..
        } catch (error) {
          setErrMessage(INVALID_CREDENTIALS);
        }
      };

      handleSignIn();
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen relative">
      <Header />
      <img
        src={BACKGROUND_IMG_URL}
        className="w-full object-cover h-screen"
        alt="Netflix background"
      />
      <div className="flex items-center justify-center absolute inset-0">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-6 bg-black opacity-80 px-8 py-12 rounded-lg text-white w-5/20"
        >
          <h1 className="text-3xl font-bold mb-6 ">
            {signIn ? "Sign In" : "Sign Up"}
          </h1>

          {!signIn && (
            <input
              type="text"
              ref={userName}
              placeholder="Name"
              className="p-3 rounded w-full text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            />
          )}
          <input
            type="text"
            ref={email}
            placeholder="Email"
            className="p-3 rounded w-full text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
          />

          <div className="relative w-full">
            <input
              ref={password}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="p-3 rounded w-full pr-10 text-white bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center hover:cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <LuEyeOff size={20} /> : <LuEye size={20} />}
            </span>
          </div>

          {errMessage && <p className="text-red-500">{errMessage}</p>}
          <button
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full mt-2 hover:cursor-pointer"
            onClick={handleFormSubmit}
          >
            {signIn ? "Sign In" : "Sign Up"}
          </button>
          {signIn ? (
            <p>
              New to Netflix?
              <span
                className="font-bold hover:underline cursor-pointer"
                onClick={handleSignIn}
              >
                Sign up now.
              </span>
            </p>
          ) : (
            <p>
              Already registered?
              <span
                className="font-bold hover:underline cursor-pointer"
                onClick={handleSignIn}
              >
                Sign in now.
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
