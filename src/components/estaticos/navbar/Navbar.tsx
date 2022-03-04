import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';

function Navbar() {
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(""));
        alert("Usuário deslogado")
        history.push("/login")
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar position="static">
            <Toolbar variant="dense" className='backgroundColor'>
                <Link to="/home" className="text-decorator-none">
                    <Box className='cursor' marginRight={5} >
                        <Typography variant="h5" className='tituloBogPessoal'>
                            BLOG PESSOAL
                        </Typography>
                    </Box>
                </Link>

                <Box display="flex" justifyContent="start">
                    <Link to="/home" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Inicio
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="posts" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="temas" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="/formularioTema" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit" >
                                Cadastrar tema
                            </Typography>
                        </Box>
                    </Link>

                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            Sair
                        </Typography>
                    </Box>

                </Box>

            </Toolbar>
        </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;