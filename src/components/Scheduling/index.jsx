import React from "react";
import './global.css'
import SchedulingContainer from './schedulingContainer';

const Scheduling = () =>{
    return (
        
        <div className="scheduling">
            <div>
                <h2> Confira seus próximos agendamentos </h2>
            </div>
            < SchedulingContainer />
            < SchedulingContainer />
            < SchedulingContainer />

        </div > 
    )
}


export default Scheduling