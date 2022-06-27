import "./App.css";
import Clock from './Clock';
import Timer from './Timer';
import ButtonBase from "./Components/ButtonBase.js";
import { useState } from "react";

function App() {
  let [activeTimer, setActiveTimer] = useState(false);
  function changer() {
    activeTimer?setActiveTimer(false):setActiveTimer(true);
  }

  return <>      
  {
    activeTimer ? <Timer></Timer> : <Clock></Clock>
  }  
  {
    activeTimer ? <div className="btn_menu"><ButtonBase defComponent="START" defClass="btn_start" defFunction={changer}/><ButtonBase defComponent="RESET" defClass="btn_reset" defFunction={changer}/><ButtonBase defComponent="CLOCK" defClass="btn_clock" defFunction={changer}/> </div> : <ButtonBase defComponent="TIMER" defClass="btn_timer" defFunction={changer} />
  }
  </>    
}

export default App;
