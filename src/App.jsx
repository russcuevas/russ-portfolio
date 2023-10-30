import React, { useState, useEffect } from 'react';
import './App.css';
import First_Container from './_components/First_Container';
import Footer from './_components/Footer';
import Navbar from './_components/Navbar';
import Second_Container from './_components/Second_Container';
import { ClimbingBoxLoader } from 'react-spinners';
import FacebookChat from './FacebookChat'; // Import your FacebookChat component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
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
          <FacebookChat /> {/* Include the FacebookChat component here */}
        </div>
      )}
    </>
  );
}

export default App;
