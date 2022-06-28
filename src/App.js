import "./App.css";
import Clock from './Clock';
import Timer from './Timer';
import ButtonBase from "./Components/ButtonBase.js";
import { useState } from "react";

function App() {
  let [activeTimer, setActiveTimer] = useState(false);
  let [startTimer, setStartTimer] = useState(false);
  let [startReset, setStartReset] = useState(false);
  function changer() {
    activeTimer?setActiveTimer(false):setActiveTimer(true);
    setStartTimer(false);
  }
  function runTimer() {
    startTimer?setStartTimer(false):setStartTimer(true);
    setStartReset(false);
  }
  function runReset() {
    setStartTimer(false)
    setStartReset(true);
  }
  return <>      
  {
    activeTimer ? <Timer boolTimer = {startTimer} boolReset = {startReset}/> : <Clock/>
  }  
  {
    activeTimer ? <div className="btn_menu">{startTimer?<ButtonBase defComponent="STOP" defClass="btn_start" defFunction={runTimer}/>:<ButtonBase defComponent="START" defClass="btn_start" defFunction={runTimer}/>}<ButtonBase defComponent="RESET" defClass="btn_reset" defFunction={runReset}/><ButtonBase defComponent="CLOCK" defClass="btn_clock" defFunction={changer}/> </div> : <ButtonBase defComponent="TIMER" defClass="btn_timer" defFunction={changer} />
  }
  </>    
}

export default App;
