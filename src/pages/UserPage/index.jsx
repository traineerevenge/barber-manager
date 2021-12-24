import React from "react";
import Header from "../../components/Header";
import './global.css'
import BarberBanner from '../../images/barber_banner.jpg'
import Loyalty from "../../components/Loyalty";

const UserPage = () => {
    return (
        <>
            < Header />
            <main className="user__main">
                <section className="user__container">
                    <div className="user__barber-banner">
                        <img src={BarberBanner} alt="" />
                    </div>
                    <div className="user__barber-description">
                        <h2>
                            Hairline - Barber Shop
                        </h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into electronic typesetting, 
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
                            Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                </section>
                <Loyalty />
            </main>
         </>
    )
}

export default UserPage