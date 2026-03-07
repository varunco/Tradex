import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

/* STORE USER FROM URL */

const params = new URLSearchParams(window.location.search);

const userId = params.get("userId");
const username = params.get("username");

if(userId){
  localStorage.setItem("userId",userId);
}

if(username){
  localStorage.setItem("username",username);
}

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      <div className="content">

        <Routes>

          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />

        </Routes>

      </div>
    </div>
  );
};

export default Dashboard;