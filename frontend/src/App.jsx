import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Appointment from "./Pages/Appointment";
import AboutUs from "./Pages/AboutUs";
import Register from "./Pages/Register";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Chatpage from "./Pages/Chatpage";
import axios from "axios";
import { Context } from "./main";
import Login from "./Pages/Login";
import UserFetch from "./components/UserFetch"
import Doctor from "./Pages/Doctor"
import CheckVitals from "./Pages/CheckVitals";
import UpdateVitals from "./Pages/UpdateVitals";
const App = () => {

  return (
    <>
      <Router>
        <Navbar />
        <UserFetch /> {/* Place this component here to run the fetching logic */}
        <Routes>
          <Route path="/Doctor" element={<Doctor />} />
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/vitals" element={<CheckVitals />} />
          {/* <ChakraProvider>
            <BrowserRouter>
              <ChatProvider>
                <Route path="/chats" component={Chatpage} />
              </ChatProvider>
            </BrowserRouter>
          </ChakraProvider> */}
          <Route path="/vitals/update" element={<UpdateVitals />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;
