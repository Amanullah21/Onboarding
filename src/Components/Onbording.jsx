import React from "react";
import style from "../Style/Onboarding.module.css";
import logo1 from "../Icon/icon.PNG";
import Welcome_sec from "./Welcome_sec";
import Data from "../Components/Data";
import LetsSee from "./LetsSee";
import Planing from "./Planing";
import Congrat from "./Congrat";

const Onbording = () => {
  // const input = (e) => {
  //   console.log(e.target.value);
  // };

  return (
    <div className={style.onbording_container}>
      <div className={style.onbording_logo}>
        <img src={logo1} alt="xyz" />
        <h2>Eden</h2>
      </div>
      <div className={style.progrss_bar}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
      <div className={style.botton_section}>
        {/* <Welcome_sec data={Data} /> */}
        {/* <LetsSee data={Data} /> */}
        <Planing data={Data} />
        {/* <Congrat data={Data} /> */}
      </div>
    </div>
  );
};

export default Onbording;
