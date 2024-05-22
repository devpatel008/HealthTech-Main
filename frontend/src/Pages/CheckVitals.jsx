
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../main";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { VitalsComponent } from "./assets/vitals";
import  { createContext} from "react";
import ReactDOM from "react-dom/client";

const VitalsPage = () => {
 const [vitals, setVitals] = useState([]);

    useEffect(() => {
        const fetchVitals = async () => {
            try {
                const { data } = await axios.get(
                    "http://localhost:4000/api/v1/user/patient/vitals/getlatestvitals",
                    { withCredentials: true }
                );
                // console.log(data.vitals);
                setVitals(data.vitals);
            } catch (error) {
                setVitals([]);
            }
        };
        fetchVitals();
    }, []);

    const { isAuthenticated, user } = useContext(Context);
    if (!isAuthenticated) {
        return <Navigate to={"/login"} />;
    }
    return (
          <VitalsComponent vitals1 = {vitals} user1 = {user}/>
      );
    };
    // export const VitalsContext = createContext({
    //     vitals: [],
    //     user: {},
    // });

export default VitalsPage;