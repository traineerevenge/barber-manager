import React from "react";
import './global.css'
import Star from '../../images/estrela.png'

const BarberPerfil = () => {
    return (
        <div className="perfil-info">
            <div className="perfil-info__img">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Foto_Perfil.jpg" alt="perfil" />
            </div>
            <div className="perfil-info__name">
                <span>George Martins</span>
            </div>
            <div className="perfil-info__rated">
                <img src={Star} alt="rated" />
                <img src={Star} alt="rated" />
                <img src={Star} alt="rated" />
                <img src={Star} alt="rated" />
                <img src={Star} alt="rated" />
            </div>
            <div className="perfil-info__com">
                <div className="info-com">
                    <div className="info-com__adress">
                        <p>Endereço: Avenida das Américas 12.500</p>
                    </div>
                    <div className="info-com__adress"></div>
                    <div className="info-com__adress"></div>
                </div>
            </div>
        </div>
    )
}

export default BarberPerfil