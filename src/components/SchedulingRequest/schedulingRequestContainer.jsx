import React from "react";
import './global.css'

const SchedulingRequestContainer = () => {

    return ( 
        <>
            <div className="scheduling-request__container">
                
                <div class="scheduling-request__client">
                    <h2> 
                        Peter B. Parker
                    </h2>
                </div>

                <div class="scheduling-request__date-title">
                    <h3> 
                        Data
                    </h3>
                </div>

                <div class="scheduling-request__time-title gridCol2">
                    <h3 >
                        Hora
                    </h3>
                </div>

                <div class="scheduling-request__confirmation-title ">
                    <h3 >
                        Status
                    </h3>
                </div>
                
                <div class="scheduling-request__date-res">
                    <p >
                        17 / 01 - Segunda-feira 
                    </p>
                </div>

                <div class="scheduling-request__time-res gridCol2">
                    <p >
                        14:32 
                    </p>
                </div>

                <div class="scheduling-request__confirmation ">
                    <button className="accept">
                    aceitar
                    </button>
                    <button className="decline">
                    recusar
                    </button>
                </div>

            </div>
            <div className="scheduling-request__container">
                
                <div class="scheduling-request__client">
                    <h2> 
                       Miles G. Morales
                    </h2>
                </div>
                <div class="scheduling-request__date-title">
                    <h3> 
                        Data
                    </h3>
                </div>

                <div class="scheduling-request__time-title gridCol2">
                    <h3 >
                        Hora
                    </h3>
                </div>

                <div class="scheduling-request__confirmation-title ">
                    <h3 >
                        Status
                    </h3>
                </div>
                
                <div class="scheduling-request__date-res">
                    <p >
                        17 / 01 - Segunda-feira 
                    </p>
                </div>

                <div class="scheduling-request__time-res gridCol2">
                    <p >
                        16:00
                    </p>
                </div>

                <div class="scheduling-request__confirmation ">
                    <button className="accept">
                    aceitar
                    </button>
                    <button className="decline">
                    recusar
                    </button>
                </div>

            </div>
        </>     
    )

}

export default SchedulingRequestContainer 