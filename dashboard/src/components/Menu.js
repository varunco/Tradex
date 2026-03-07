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

    localStorage.removeItem("username");
    localStorage.removeItem("userId");

    window.location.href = "http://localhost:3000/login";

  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (

    <div className="menu-container">

      <img src="logo.png" style={{ width: "50px" }} />

      <div className="menus">

        <ul>

          <li>
            <Link to="/" style={{textDecoration:"none"}}>
              <p className={selectedMenu===0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>

          <li>
            <Link to="/orders" style={{textDecoration:"none"}}>
              <p className={selectedMenu===1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>

          <li>
            <Link to="/holdings" style={{textDecoration:"none"}}>
              <p className={selectedMenu===2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>

          <li>
            <Link to="/positions" style={{textDecoration:"none"}}>
              <p className={selectedMenu===3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>

        </ul>

        <hr/>

        <div className="profile">

          <div className="avatar">
            {username ? username[0].toUpperCase() : "U"}
          </div>

          <p className="username">
            {username}
          </p>

          <button
            className="btn btn-sm btn-danger"
            onClick={logout}
            style={{marginLeft:"10px"}}
          >
            Logout
          </button>

        </div>

      </div>

    </div>

  );

};

export default Menu;