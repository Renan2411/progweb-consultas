import { BrowserRouter, Route, Routes, Link as RouterLink } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { ConsultasContext, ConsultasProvider } from "./context/ConsultasContext";
import CadastrarMedicos from "./Components/CadastrarMedicos";
import ListarConsultas from "./Components/ListarConsultas";
import AgendarConsulta from "./Components/AgendarConsultas";
import { useContext, useEffect } from "react";



function App() {
  return (
    <ConsultasProvider>
      <BrowserRouter>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '100vh', textAlign: 'center' }}>

          <nav>
            <Button
              component={RouterLink}
              to="/cadastrar"
              variant="contained"
              color="primary"
              style={{ marginRight: '10px' }}
            >
              Cadastrar Médicos
            </Button>
            <Button
              component={RouterLink}
              to="/agendar"
              variant="contained"
              color="primary"
              style={{ marginRight: '10px' }}
            >
              Agendar Consultas
            </Button>
            <Button
              component={RouterLink}
              to="/listar"
              variant="contained"
              color="primary"
              style={{ marginRight: '10px' }}
            >
              Listar Consultas
            </Button>
          </nav>

          <Routes>
            <Route path="/cadastrar" element={<CadastrarMedicos />} />
            <Route path="/agendar" element={<AgendarConsulta />} />
            <Route path="/listar" element={<ListarConsultas />} />
          </Routes>
        </ Box>
      </BrowserRouter >
    </ConsultasProvider>
  )
}

export default App

