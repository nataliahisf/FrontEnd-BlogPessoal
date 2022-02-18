import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" style={{ backgroundColor: "#D2691E" }}>
                    <Box style={{ cursor: "pointer" }} >
                        <Typography variant="h5" color="inherit">
                            BLOG PESSOAL
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Inicial
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit" >
                                Cadastrar tema
                            </Typography>
                        </Box>
                        <Link to="/login" className="text-decorator-none">
                            <Box mx={1} style={{ cursor: "pointer", color: "white"  }}>
                                <Typography variant="h6" color="inherit">
                                    Sair
                                </Typography>
                         </Box>
                        </Link>

                </Box>

            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar;