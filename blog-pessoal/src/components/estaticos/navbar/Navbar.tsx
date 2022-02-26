import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useLocalStorage from 'react-use-localstorage';
import "./Navbar.css"

function Navbar() {
    const [token, setToken] = useLocalStorage("token");
    let history = useHistory();

    function goLogout() {
        setToken("")
        alert("Usuário deslogado")
        history.push("/login")
    }
    return (
        <>
            <AppBar position="static">
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
        </>
    )
}

export default Navbar;