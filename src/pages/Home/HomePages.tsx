import React from "react";
import { auth } from "../../utils/firebase-config";
import { signOut } from "firebase/auth";
import { useAuth } from "../../context/loginAuthentication/AuthContext";
import { Link } from "react-router-dom";
import LoginPage from "../Login/LoginPage";
import JoinPage from "../Login/JoinPage";

const HomePages = () => {
  const { currentUser, logout, signInWithGoogle } = useAuth();
  console.log(currentUser);
  return (
    <div>
      {currentUser ? (
        <Link to="/homes">logout</Link>
      ) : (
        <Link to="/login">login</Link>
      )}
    </div>
  );
};

export default HomePages;
