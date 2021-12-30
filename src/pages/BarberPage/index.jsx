import React from "react";
import Header from "../../components/Header";
import BarberDay from "../../components/BarberDay";
import BarberService from "../../components/BarberService";
import BarberHour from "../../components/BarberHour";

import './global.css'

const BarberPage = () => {
    return (
        <>
            <Header />
            <main className="perfil">
                <div className="container">
                    <div className="perfil-area">
                        <div className="perfil-info">
                            <div className="perfil-info__img">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Foto_Perfil.jpg" alt="perfil" />
                            </div>
                            <div className="perfil-info__name">
                                <span>George Martins</span>
                            </div>
                            <div className="perfil-info__rated">

                            </div>
                        </div>
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
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default BarberPage