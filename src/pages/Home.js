import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/burger.jpg";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <div>
          <h1>BURGER CHEF</h1>
          <p>TASTE OF HOME</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
