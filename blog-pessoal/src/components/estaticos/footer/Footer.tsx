import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography, Box, Grid } from '@material-ui/core';
import "./Footer.css";
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token != "") {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className='box1'>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom className='textos'>Siga minhas redes sociais </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://github.com/nataliahisf" target="_blank">
                            <GitHubIcon className='redes' />
                        </a>
                        <a href="https://www.linkedin.com/school/generationbrasil/" target="blank">
                            <LinkedInIcon className='redes' />
                        </a>
                        <a href="https://www.instagram.com/natyhisf/" target="_blank">
                            <InstagramIcon className='redes' />
                        </a>
                    </Box>
                </Box>
                <Box className='box2'>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© 2020 Copyright:</Typography>
                    </Box>
                    <Box>
                        <a target="white" href="https://brasil.generation.org">
                            <Typography variant="subtitle2" gutterBottom className="textos" align="center">brasil.generation.org</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    }
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;