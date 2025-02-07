import React from "react";
import './Sidebar.css';
import logoSpotify from '../assets/icons/logo-spotify.png';  // Assumindo que a imagem está em src/assets/icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faCookie } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
        <nav className="sidebar_navigation">
            <div>
                <div className="logo">
                    <button className="buttonLogo">
                        <img src={logoSpotify} alt="Logo do Spotify"/>
                    </button>
                </div>
                <ul>
                    <li>
                        <button className="house">
                            <span className="iconHouse" ><FontAwesomeIcon icon={faHouse} /></span>
                            <span>Inicio</span>
                        </button>
                    </li>
                    <li>
                        <button className="search" >
                            <span className="searchIcon" ><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                            <span>Buscar</span>
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="biblioteca">
            <div className="content_biblioteca">
                <button className="biblioteca_botao">
                    <span className="bookIcon"><FontAwesomeIcon icon={faBook} /></span>
                    <span>Sua Biblioteca</span>
                </button>
                <span className="plusIcon"><FontAwesomeIcon icon={faPlus}/></span>
            </div>
            <section className="section-playlist">
                <div className="section-playlist_content">
                    <span className="text title">Crie sua primeira playlist</span>
                    <span className="text subtitle">É fácil,vamos te ajudar.</span>
                    <button className="section-playlist_button">
                        <span>Criar playlist</span>
                    </button>
                </div>
            </section>
            <div>
                <button className="cookies" >
                    <span className="cookieIcon"><FontAwesomeIcon icon={faCookie} /></span>
                    <span>Cookies</span>
                </button>
            </div>
            <div className="languages">
                <button className="languages_button">
                    <span className="globeIcon"><FontAwesomeIcon icon={faGlobe} /></span>
                    <span>Português do Brasil</span>
                </button>
            </div>
        </div>
    </div>


    );
};

export default Sidebar;
