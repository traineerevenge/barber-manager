import React from "react";
import './global.css'
import SchedulingRequestContainer from './schedulingRequestContainer';

const Scheduling = () =>{
    return (
        
        <div className=".scheduling-request">
            <div>
                <h2> Confira seus próximos agendamentos </h2>
            </div>
            < SchedulingRequestContainer />
            < SchedulingRequestContainer />
            < SchedulingRequestContainer />

        </div > 
    )
}


export default Scheduling