import React from 'react';
import { Link } from 'react-router-dom'
import {HeaderArea} from './styled';
import { isLogged, doLogout } from '../../../helpers/AuthHandler';

const Header = () => {

    let logged = isLogged();

    const handleLogout = () => {
        doLogout();
        window.location.href = '/';
    }

    return (
        <HeaderArea>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                        <span className="let1">F</span>
                        <span className="let2">D</span>
                        <span className="let3">P</span>
                    </Link>
                </div>
                <nav>
                    <ul>
                        {logged &&
                            <>
                                <li>
                                    <Link to="/login">Perfil</Link>
                                </li>
                                <li>
                                    <button onClick={handleLogout}>Sair</button>
                                </li>
                                <li>
                                    <Link to="/anunciar" className="button">Anunciar agora</Link>
                                </li>
                            </>
                        }
                        {!logged &&
                            <>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/cadastro">Cadastrar</Link>
                                </li>
                                <li>
                                    <Link to="/login" className="button">Anunciar agora</Link>
                                </li>
                            </>
                        }
                        
                    </ul>
                </nav>
            </div>
        </HeaderArea>
    );
}

export default Header;