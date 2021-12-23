import React from "react";
import './global.css'


const Header = () => {
    return (
        <header >
            <div className="header__logo">
                <a href="/">
                  Seu_<em>Barber </em> 
                </a>
            </div>
            <div className="header__barber-logo">
                <a href="/">
                        <img src="https://www.hairlinebarbers.co.uk/wp-content/uploads/hairline-barbers-logo-white.png" alt="" />
                </a>
            </div>
            <div className="header__user">
                    <a href="/">
                        <img src="https://sm.ign.com/ign_pt/news/b/brazilian-/brazilian-spider-man-no-way-home-trailer-seems-to-include-a_j64u.jpg" alt="" />
                    </a>
            </div>
        </header >
    )
}

export default Header