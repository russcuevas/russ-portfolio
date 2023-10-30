import React, { useState, useEffect } from 'react';
import './App.css';
import First_Container from './_components/First_Container';
import Footer from './_components/Footer';
import Navbar from './_components/Navbar';
import Second_Container from './_components/Second_Container';
import { ClimbingBoxLoader } from 'react-spinners';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loading your chat SDK
    const loadFacebookSDK = () => {
      // Your SDK code
      window.fbAsyncInit = function () {
        window.FB.init({
          xfbml: true,
          version: 'v18.0'
        });
      };

      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');
    };

    // Load the SDK after 5 seconds (or after the loading state changes)
    const timeout = setTimeout(() => {
      setLoading(false);
      loadFacebookSDK(); // Load the Facebook Customer Chat SDK
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <ClimbingBoxLoader loading={loading} size={25} color={"#2ecc71"} />
        </div>
      ) : (
        <div>
          <Navbar />
          <First_Container />
          <Second_Container />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
