import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [user,setUser]=useState("")
  const navigate =useNavigate();
  return (
    <section>
    
      <div className="containers">
        <nav className="navbar  navbar-light bg-primary ">
          <div className="container">
            <a className="navbar-brand">
              <h1 id="head" className="text-light">Shop</h1>
            </a>

            {user ? <div className="btngrp">
              <div className="text-light fs-3 fw-semibold">User</div>
            </div> : <div className="btn btn-warning btn-sm" role="button" onClick={()=>navigate('/login')}>
              <div className="text-dark fs-5 fw-semibold">Login</div>
            </div>}
          </div>
        </nav>
      </div>
    </section>
  );
}
