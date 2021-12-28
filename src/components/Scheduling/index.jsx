import React from "react";
import './global.css'

const Scheduling = () =>{
    return (
        
        <div className="scheduling">
            <div>
                <h2> Confira seus próximos agendamentos </h2>
            </div>
            
            <div className="scheduling__container ">
                
                <div class="scheduling__date-title">
                    <h3> 
                        Data
                    </h3>
                </div>

                <div class="scheduling__time-title gridCol2">
                    <h3 >
                        Hora
                    </h3>
                </div>

                <div class="scheduling__confirmation-title ">
                    <h3 >
                        Status
                    </h3>
                </div>
                
                <div class="scheduling__date-res">
                    <p >
                        17 / 01 - Segunda-feira 
                    </p>
                </div>

                <div class="scheduling__time-res gridCol2">
                    <p >
                        14:32 
                    </p>
                </div>

                <div class="scheduling__confirmation ">
                    <p>
                        Aguardando confirmação
                    </p>
                </div>

            </div>

        </div > 
    )
}


export default Scheduling