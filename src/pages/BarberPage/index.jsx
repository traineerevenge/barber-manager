import React from "react";
import Header from "../../components/Header";
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
                                <h3 className="perfil-services__title">Serviços</h3>
                                <div className="perfil-services__servicos">
                                    <div className="perfil-servico">
                                        <p className="perfil-servico__title">HairCut Only</p>
                                        <p className="perfil-servico__price">R$ 39,00</p>
                                    </div>
                                    <div className="perfil-servico">
                                        <p className="perfil-servico__title">HairCut Only</p>
                                        <p className="perfil-servico__price">R$ 39,00</p>
                                    </div>
                                    <div className="perfil-servico">
                                        <p className="perfil-servico__title">HairCut Only</p>
                                        <p className="perfil-servico__price">R$ 39,00</p>
                                    </div>
                                    <div className="perfil-servico">
                                        <p className="perfil-servico__title">HairCut Only</p>
                                        <p className="perfil-servico__price">R$ 39,00</p>
                                    </div>
                                    <div className="perfil-servico">
                                        <p className="perfil-servico__title">HairCut Only</p>
                                        <p className="perfil-servico__price">R$ 39,00</p>
                                    </div>
                                    <div className="perfil-servico">
                                        <p className="perfil-servico__title">HairCut Only</p>
                                        <p className="perfil-servico__price">R$ 39,00</p>
                                    </div>
                                    <div className="perfil-servico">
                                        <p className="perfil-servico__title">HairCut Only</p>
                                        <p className="perfil-servico__price">R$ 39,00</p>
                                    </div>
                                </div>
                            </div>
                            <div className="perfil-horarios">

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default BarberPage