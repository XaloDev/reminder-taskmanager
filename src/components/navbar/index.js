import React, {useState} from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import usuarioReducer from '../../store/usuarioReducer';


function Navbar(){


    const dispatch = useDispatch();
    const usuarioEmail = useSelector(state => state.usuarioEmail);

    return(
        
        <nav className="navbar navbar-expand-lg col-12">
            <i className="fab fa-xing text-white fa-3x ml-2 mr-3"></i>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars text-white"></i>                
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        
                    
                        {
                            useSelector(state => state.usuarioLogado) > 0 ?
                        
                            <>
                                <li className="nav-item"><Link className="nav-link" to="/home">Início </Link></li>
                                <li className="nav-item"><Link className="nav-link" onClick={() => dispatch({type: 'LOG_OUT'})}>Sair</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/home">Você está logado com: {usuarioEmail} </Link></li>
                              
                            </>
                            :
                            <>
                            <li className="nav-item"><Link className="nav-link" to="/">Login </Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/novousuario">Cadastro </Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/recuperarsenha">Esqueceu a senha?</Link></li>
                            
                                
                            </>

                         } 


                    </ul>   
                </div>
        </nav>
    )
}

export default Navbar;