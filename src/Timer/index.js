import { useState, useEffect } from 'react';
import './styles.css';
import { useFormik } from 'formik';

export default function Timer({boolTimer,boolReset,boolDebut}) {
    const [date, setDate] = useState(new Date());
    let [debut, setTempsDebut] = useState({ heures: date.getHours(), minutes: date.getMinutes(), secondes: date.getSeconds() });
    
    
    const formik = useFormik({
        initialValues:{
            heures: debut.heures,
            minutes: debut.minutes,
            secondes: debut.secondes
        }
    });
    let [tempsRestant, setTempsRestant] = useState(debut);
    let [temps, setTemps] = useState(debut);
    
    let timer;      
    
    
    console.log("temps restant : " + tempsRestant);

    useEffect(() => {        
        timer = setInterval(() => {
                        
            if (boolReset){
                setTempsRestant(formik.values);
            }
            if(boolTimer==true){
            if (tempsRestant.heures != 0 || tempsRestant.minutes != 0 || tempsRestant.secondes != 0) {
                let reste = { heures: tempsRestant.heures, minutes: tempsRestant.minutes, secondes: tempsRestant.secondes-1 };
                console.log("reste"+reste);
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
                alert("TIME IS UP");
                clearInterval(timer)
            }
        }
        }, 1000);
    return () => {
        clearInterval(timer);
    };
});


console.log(formik.values);
//<ButtonBase defComponent="Timer here" defClass="btn_clock_here" defFunction="" /> to return

return (
    boolDebut?
    <div className="clock-container">
    <p className="clock">
    <input id="heures" type="number" value={formik.values.heures} onChange={formik.handleChange} className="input_time" min="0" max="23"/>:
    <input id="minutes" type="number" value={formik.values.minutes} onChange={formik.handleChange} className="input_time"  min="0" max="59"/>:
    <input id="secondes" type="number" value={formik.values.secondes} onChange={formik.handleChange} className="input_time" min="0" max="59"/>
    </p>
    </div>
    : 
    <div className="clock-container">
    <p className="clock">
    <span>{tempsRestant.heures.toString().padStart(2, '0')}</span>:
    <span>{tempsRestant.minutes.toString().padStart(2, '0')}</span>:
    <span>{tempsRestant.secondes.toString().padStart(2, '0')}</span>
    </p>
    </div>

)
}