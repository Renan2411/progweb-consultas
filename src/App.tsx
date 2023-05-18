import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { CadastrarMedicos } from './Components/CadastrarMedicos'
import { AgendarConsultas } from './Components/AgendarConsultas'
import { ListarConsultas } from './Components/ListarConsultas'
import { Box, Button } from '@mui/material'
import { ConsultasProvider } from './context/ConsultasContext'

function App() {
  return (
    <>


      <ConsultasProvider>
        <BrowserRouter>

          <Routes>
            <Route path='/cadastrar' element={<CadastrarMedicos />}></Route>
            <Route path='/agendar' element={<AgendarConsultas />}></Route>
            <Route path='/listar' element={<ListarConsultas />}></Route>
          </Routes>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh', textAlign: 'center' }}>

            <nav>
              <Button
                component={Link}
                to="/cadastrar"
                variant="contained"
                color="primary"
                style={{ marginRight: '1-px' }}>
                Cadastrar
              </Button>

              <Button
                component={Link}
                to="/agendar"
                variant="contained"
                color="primary"
                style={{ marginRight: '1-px' }}>
                Agendar
              </Button>

              <Button
                component={Link}
                to="/listar"
                variant="contained"
                color="primary"
                style={{ marginRight: '1-px' }}>
                Listar
              </Button>
            </nav>

          </Box>


        </BrowserRouter>
      </ConsultasProvider>

    </>
  )
}

export default App
