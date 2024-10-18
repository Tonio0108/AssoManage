import { useState } from "react";
import { Link } from "react-router-dom";
function Header({ handleLogout }) {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div id="header" className="row bg-dark text-light">
                <div className="col-10">
                    <h3>AssoManage</h3>
                    <h6>V.1.0.0</h6>
                </div>
                <div className="col-2 text-end">
                    <button className="btn btn-outline-light" onClick={toggleMenu}>
                        <i className="bi bi-list"></i>
                    </button>
                </div>
            </div>

            {/* Menu latéral qui apparaît depuis la droite */}
            <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
                <button className="btn btn-light" onClick={toggleMenu}>
                    <i className="bi bi-x"></i>
                </button>
                <div id="user" className="row mt-4 text-center text-light">
                    <div className="row">
                        <div id="pdp" className="col-7 mx-auto shadow rounded-circle mt-3">

                        </div>
                    </div>
                    <div className="row mt-3">
                        <h4>Username</h4>
                    </div>
                </div>
                <div className="row text-light ">
                    <ul className="list-unstyled mt-3 text-center" >
                        <li><Link to = '/member/administration' onClick={toggleMenu} className="nav-link mt-5">Membres de bureau</Link></li>
                        <li><Link to = '/users' onClick={toggleMenu} className="nav-link mt-5">Gestion des utilisateurs</Link></li>
                        <li><button onClick={ handleLogout } className="nav-link mt-5">Déconnexion</button></li>
                    </ul>
                </div>

            </div>

            {/* Masque pour cliquer à l'extérieur du menu et le fermer */}
            {isMenuOpen && <div className="backdrop" onClick={toggleMenu}></div>}
        </>
    );
}

export default Header;
