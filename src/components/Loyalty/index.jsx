import React from "react";
import './global.css'
import Star from '../../images/icon--star.png'

const Loyalty = () => {
    return (
        <div className="loyalty">
            <div className="loyalty__title">
                <h2>
                    # LEALDADE
                </h2>
               
                <p>
                    Acumule 10 estrelas e troque por um prêmio!
                </p>
            </div>

            <section className="loyalty__container">
               
                <div className="loyalty__card">
                    <img src={Star} alt="" />
                </div>

                <div className="loyalty__card">
                    <img src={Star} alt="" />
                </div>

                <div className="loyalty__card">
                    <img src={Star} alt="" />
                </div>

                <div className="loyalty__card">
                    <img src={Star} alt="" />
                </div>

                <div className="loyalty__card">
                    <img src={Star} alt="" />
                </div>
                <div className="loyalty__card">
                    <img src={Star} alt="" />
                </div>
                <div className="loyalty__card">
                    <img src={Star} alt="" />
                </div>

            </section>

            <div className="loyalty__missing-stars">
                <h3> Faltam 3 estrelas! </h3>

            <a href="#scheduling" className="loyalty__scheduling">
                Agende seu corte agora
            </a> 
            </div>
        </div>
    )
}

export default Loyalty