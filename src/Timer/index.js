import { useState, useEffect } from 'react';
import './styles.css';
import ButtonBase from "../Components/ButtonBase.js";
import runTimer from "../App.js";

export default function Timer({boolTimer,boolReset}) {
    const [date, setDate] = useState(new Date());
    let [debut, setTempsDebut] = useState({ heures: date.getHours(), minutes: date.getMinutes(), secondes: date.getSeconds() });
    let [tempsRestant, setTempsRestant] = useState({ heures: date.getHours(), minutes: date.getMinutes(), secondes: date.getSeconds() });
    let  [startTimer, setStartTimer] = useState({runTimer});    
    let timer;

    console.log("booltimer : "+boolTimer);
    console.log("boolReset : "+boolReset);    

    useEffect(() => {        
        timer = setInterval(() => {
            if (boolReset){
                setTempsRestant(debut);
            }
            if(boolTimer==true){
            if (tempsRestant.heures != 0 || tempsRestant.minutes != 0 || tempsRestant.secondes != 0) {
                let reste = { heures: tempsRestant.heures, minutes: tempsRestant.minutes, secondes: tempsRestant.secondes-1 };
                
                if (reste.secondes == -1) {
                    reste.secondes = 59;
                    reste.minutes = reste.minutes-1;
                }
                if (reste.minutes == -1) {
                    reste.minutes = 59;
                    reste.heures = reste.heures-1;
                }
                setTempsRestant(reste);            
            }
            else {
                clearInterval(timer)
            }
        }
        }, 1000);
    return () => {
        clearInterval(timer);
    };
});


//<ButtonBase defComponent="Timer here" defClass="btn_clock_here" defFunction="" /> to return

return (
    <div className="clock-container">
        <p className="clock">
            <span>{tempsRestant.heures.toString().padStart(2, '0')}</span>:
            <span>{tempsRestant.minutes.toString().padStart(2, '0')}</span>:
            <span>{tempsRestant.secondes.toString().padStart(2, '0')}</span>
        </p>
    </div>
)
}