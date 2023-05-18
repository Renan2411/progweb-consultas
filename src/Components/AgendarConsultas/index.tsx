import { useContext, useState } from "react"
import { ConsultasContext } from "../../context/ConsultasContext"
import { Container, Box, Card, TextField, Button, Select, MenuItem } from "@mui/material"

export function AgendarConsultas() {

    const { doutores, agendarConsulta, consultas } = useContext(ConsultasContext)

    const [data, setData] = useState('')
    const [nomePaciente, setNomePaciente] = useState('')
    const [numTelefone, setNumTelefone] = useState('')
    const [emailDoutor, setEmailDoutor] = useState('')
    const [time, setTime] = useState('08:00')


    const horarios = []

    for (let i = 8; i < 18; i++) {
        horarios.push(i < 10 ? `0${i}:00` : `${i}:00`)
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        agendarConsulta!({ id: consultas?.length || 0, nomePaciente, numTelefone, emailDoutor, data: '' })
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
                                label="Nome do Paciente"
                                type="text"
                                value={nomePaciente}
                                onChange={(e) => setNomePaciente(e.target.value)}
                            ></TextField>

                            <TextField
                                label="Telefone"
                                type="tel"
                                value={numTelefone}
                                onChange={(e) => setNumTelefone(e.target.value)}
                            ></TextField>

                            <TextField
                                label="data"
                                type="date"
                                value={data}
                                onChange={(e) => setData(e.target.value)}
                            ></TextField>

                            <Select>
                                {horarios?.map((horario, index) => (
                                    <MenuItem key={index} value={horario}>
                                        {horario}
                                    </MenuItem>
                                ))}
                            </Select>


                            <Select
                                value={emailDoutor}
                                onChange={(e) => setEmailDoutor(e.target.value)}>

                                {doutores?.map((doutor, index) => (
                                    <MenuItem key={index} value={doutor.email}>
                                        {doutor.email}
                                    </MenuItem>
                                ))}
                            </Select>

                            <Button type="submit">Enviar</Button>
                        </form>
                    </Card>

                </Box>
            </Container>
        </>
    )
}