import "./App.css";
import Clock from './Clock';
import Timer from './Timer';
import ButtonBase from "./Components/ButtonBase.js";
import { useState } from "react";

function App() {
  let [activeTimer, setActiveTimer] = useState(false);
  let [debutTimer, setADebutTimer] = useState(false);
  let [startTimer, setStartTimer] = useState(false);
  let [startReset, setStartReset] = useState(true);

  function changer0() {
    activeTimer ? setActiveTimer(false) : setActiveTimer(true);
    setStartTimer(false);
    setADebutTimer(true);
  }
  function changer() {
    activeTimer ? setActiveTimer(false) : setActiveTimer(true);
    setStartTimer(false);
  }
  function runTimer() {
    startTimer ? setStartTimer(false) : setStartTimer(true);
    setStartReset(false);
    setADebutTimer(false);
  }
  function runReset() {
    setStartTimer(false);
    setStartReset(true);
    setADebutTimer(true);
  }

  const btn_start_resume = debutTimer ? <ButtonBase defComponent="START" defClass="btn_start" defFunction={runTimer} /> : <ButtonBase defComponent="RESUME" defClass="btn_start" defFunction={runTimer} />

  return <>
    {
      activeTimer ? <Timer boolTimer={startTimer} boolReset={startReset} boolDebut ={debutTimer} /> : <Clock />
    }
    {
      activeTimer ? <div className="btn_menu">{startTimer ? <ButtonBase defComponent="PAUSE" defClass="btn_start" defFunction={runTimer} /> : btn_start_resume}<ButtonBase defComponent="RESET" defClass="btn_reset" defFunction={runReset} /><ButtonBase defComponent="CLOCK" defClass="btn_clock" defFunction={changer} /> </div> : <ButtonBase defComponent="TIMER" defClass="btn_timer" defFunction={changer0} />
    }
  </>
}

export default App;
