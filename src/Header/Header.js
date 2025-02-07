import React from "react";
import './Header.css';
import search from '../assets/icons/search.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <nav className=" header_navigation">
                <div className="navigation">
                    <button className="arrow-left">
                        <span><FontAwesomeIcon icon={faArrowLeft} /></span>
                    </button>
                    <button className="arrow-right">
                        <span> <FontAwesomeIcon icon={faArrowRight} /></span>
                    </button>
                </div>
                <div className="header_search">
                    <img src={search}  alt=""/>
                    <input id="search-input" type="text" maxlength="800" placeholder="O que você quer ouvir?" />
                </div>
                <div className="header_login">
                    <button className="subscribe">Inscreva-se</button>
                    <button className="login">Entrar</button>
                </div>
            </nav>
    )
};

export default Header;