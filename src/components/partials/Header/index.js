import React from 'react';
import { Link } from 'react-router-dom'
import {HeaderArea} from './styled';
import { isLogged } from '../../../helpers/AuthHandler';

const Header = () => {

    let logged = isLogged();
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
                                    <Link to="/sair">Sair</Link>
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
                                    <Link to="/cadastrar">Cadastrar</Link>
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