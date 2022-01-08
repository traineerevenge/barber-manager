import React from 'react';
import './global.css'
import BarChart from '../../components/BarChart';
import SchedulingRequestContainer from './../../components/SchedulingRequest/schedulingRequestContainer';

const PanelSystem = () => {
      
    return (
        <>
            <div className='admin__bg'>
                <h2 className="admin__title">Dashboard</h2>

                <section className='admin__dash-container'>
                    <BarChart />

                    <div className='admin__dash-text'>
                        <p>
                            Parabéns! 
                            <br />
                             Você teve  <b> 328 </b> agendamentos essa semana,
                            <b> 25 </b> a mais que semana passada!

                        </p>
                    </div>

                </section>
                
                <h2 className="admin__title" >Pedidos de Agendamento </h2>
               
                <div className='admin__schedulingRequest'>
                    < SchedulingRequestContainer />
                </div>
            </div>

        </>

    )
}

export default PanelSystem