
import GoogleButton from "react-google-button";
import { UseUserAuth } from "../Context/authContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Login() {
  const { currentUser, signInWithGoogle } = UseUserAuth();



  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser !== null) {
      navigate("/search");
    }
  }, [navigate, currentUser]);

  return (
    <>

      <h1 style={{ textAlign: 'center' }}>Sign-in for more content</h1>

      <GoogleButton
        style={{
          marginTop: 15,
          marginRight: "auto",
          marginBottom: 15,
          marginLeft: "auto",
          backgroundColor: '#181d31'
        }}
        onClick={signInWithGoogle}
      />

    </>
  );
}

export default Login;
