import React from 'react'
import NavbarJS from "./Navbar";

import naac from "../naac.jpg";
import mine from "../mine.jpg";
function Home() {
    return (
      <div>
        <NavbarJS />

        <div className="d-flex mt-5">
          <div className="col-lg-4">
            <img
              src={mine}
              width="70%"
              height="70%"
              style={{ opacity: "0.75" }}
            />
          </div>
          <div className="col-lg-4">
            <img
              src="https://i.pinimg.com/564x/2a/13/29/2a13298a13781e1289cdd48a52103473.jpg"
              width="70%"
              height="70%"
              style={{ opacity: "0.75" }}
            />
          </div>
          <div className="col-lg-4">
            <img
              src="https://www.teahub.io/photos/full/194-1948843_beautiful-nature-wallpaper-peaceful-spring-beautiful-scenery.jpg"
              width="70%"
              height="70%"
              style={{ opacity: "0.75" }}
            />
          </div>
        </div>
      </div>
    );
}

export default Home
