import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered onChange={handleChange} className='fundoTabPostagem'> 
            <Tab className="titulo" label="Todas as postagens" value="1"/>
            <Tab className="titulo" label="Sobre mim" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" >Sobre mim</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Olá! Eu sou a Natália Ferreira, tenho 28 anos, sou de São Paulo Capital e vim contar pra vocês como a minha curiosidade e teimosia em aprender me trouxeram até aqui.
Eu sou técnica em automação industrial e em eletroeletrônica, cursei porque sempre gostei de ver coisas relacionadas a tecnologia, mas também porque quando pequena eu queria ter um carrinho de controle remoto e eu "não podia ganhar brinquedos de meninos", então fui estudar automação pra criar o meu.
Fiz o projeto do meu carrinho, me descobri apaixonada por programar (até então em assembly) e trabalhei por 4 anos na área de eletrônica onde aprendi muito.
Mas não ter interação com o usuário começou a me gerar um certo incômodo, foi assim que fui fazer cursos mais administrativos e entrei na SumUp cuidando dos consultores de vendas.
Nesses quase três anos de SumUp, interagi com programadores e percebi que eu poderia sim fazer os dois, ouvindo o usuário e programando melhorias.
Foi nesse momento de "re-calculo de rota" unindo meu lado falante e programador que a Generation me foi apresentada.
Ao cursar o bootcamp, ficou muito claro pra mim como quero trilhar a minha carreira daqui pra frente.
Bom, foi um prazer contar um pouco dessa trajetória pra vocês, espero que possamos conversar mais e termos ótimas trocas juntes.</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;