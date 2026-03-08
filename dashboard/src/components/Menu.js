import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = () => {

  const [selectedMenu,setSelectedMenu] = useState(0);
  const [username,setUsername] = useState("");

  useEffect(()=>{
    const user = localStorage.getItem("username");
    if(user){
      setUsername(user);
    }
  },[]);

const logout = () => {

  localStorage.clear();

  window.location.href = "http://localhost:3000/login";

};
  const menuClass = "nav-link";
  const activeMenuClass = "nav-link text-primary";

  return (

    <div className="d-flex justify-content-between align-items-center">

      {/* Left side logo */}
      <img src="./media/logo.png" style={{width:"40px"}} alt="logo"/>

      {/* Navigation */}
      <ul className="nav">

        <li className="nav-item">
          <Link to="/" className={selectedMenu===0 ? activeMenuClass : menuClass}>
            Dashboard
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/orders" className={selectedMenu===1 ? activeMenuClass : menuClass}>
            Orders
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/holdings" className={selectedMenu===2 ? activeMenuClass : menuClass}>
            Holdings
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/positions" className={selectedMenu===3 ? activeMenuClass : menuClass}>
            Positions
          </Link>
        </li>

      </ul>

      {/* Profile */}
      <div className="d-flex align-items-center">

        <div
          className="rounded-circle bg-secondary text-light d-flex justify-content-center align-items-center"
          style={{width:"32px",height:"32px"}}
        >
          {username ? username[0].toUpperCase() : "U"}
        </div>

        <span className="mx-2 text-light">
          {username}
        </span>

        <button
          className="btn btn-sm btn-danger"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </div>

  );

};

export default Menu;