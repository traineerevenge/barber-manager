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
                        <div className="perfil-services">

                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default BarberPage