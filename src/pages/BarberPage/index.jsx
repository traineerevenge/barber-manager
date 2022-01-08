import React from "react";
import BarberPerfil from "../../components/BarberPerfil";
import BarberDay from "../../components/BarberDay";
import BarberService from "../../components/BarberService";
import BarberHour from "../../components/BarberHour";
import BarberButton from "../../components/BarberButtonAgende";

import './global.css'

const BarberPage = () => {
    return (
        <>
            <main className="perfil">
                <div className="container">
                    <div className="perfil-area">
                        <BarberPerfil/>
                        <div className="perfil-geral">
                            <div className="perfil-services">
                                <h3 className="perfil-services__title">Serviços:</h3>
                                <div className="perfil-services__servicos">
                                    <BarberService/>
                                </div>
                            </div>
                            <div className="perfil-days">
                                <h3 className="perfil-services__title">Dias:</h3>
                                <div className="perfil-services__servicos">
                                    <BarberDay/>
                                </div>
                            </div>
                            <div className="perfil-hours">
                                <h3 className="perfil-services__title">Horários:</h3>
                                <div className="perfil-services__servicos">
                                    <BarberHour/>
                                </div>
                            </div>
                            <BarberButton/>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default BarberPage