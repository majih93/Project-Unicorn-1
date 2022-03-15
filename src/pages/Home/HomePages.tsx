import React from "react";
import { useAuth } from "../../context/loginAuthentication/AuthContext";
import { Link } from "react-router-dom";

const HomePages = () => {
  const { logout } = useAuth();
  const authToken = sessionStorage.getItem("Auth Token");
  console.log(authToken);

  return (
    <div>
      {authToken ? (
        <Link
          to="/login"
          style={{
            padding: "10px 70px",
            display: "block",
            width: "200px",
            height: "50px",
            border: "4px solid slateblue",
            marginTop: "100px",
            marginLeft: "100px",
          }}
          onClick={logout}
        >
          logout
        </Link>
      ) : (
        <Link
          to="/login"
          style={{
            padding: "10px 70px",
            display: "block",
            width: "200px",
            height: "50px",
            border: "4px solid slateblue",
            marginTop: "100px",
            marginLeft: "100px",
          }}
        >
          login
        </Link>
      )}
    </div>
  );
};

export default HomePages;
