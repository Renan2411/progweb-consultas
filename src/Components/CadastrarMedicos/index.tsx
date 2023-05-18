import { Box, Button, Card, Container, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { ConsultasContext } from "../../context/ConsultasContext";

export function CadastrarMedicos() {

    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [nome, setNome] = useState('')

    const { adicionarDoutor } = useContext(ConsultasContext)

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        adicionarDoutor!({ nome, email, telefone })
    }

    return (
        <>
            <Container maxWidth="sm">
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    minHeight="100vh"
                >
                    <Card elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

                            <TextField
                                label="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></TextField>

                            <TextField
                                label="Telefone"
                                type="tel"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)}
                            ></TextField>

                            <TextField
                                label="Nome"
                                type="text"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            ></TextField>


                            <Button type="submit">Enviar</Button>
                        </form>
                    </Card>

                </Box>
            </Container>
        </>
    )
}