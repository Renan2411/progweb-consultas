import { Box, Card, Container } from "@mui/material";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useContext } from 'react'
import { ConsultasContext } from "../../context/ConsultasContext";

export default function ListarConsultas() {
    const { consultas } = useContext(ConsultasContext)

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'data',
            headerName: 'Data',
            width: 150,
            valueFormatter: ({ value }) => new Date(value as string).toLocaleString(
                'pt-BR',
                {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
                })

        },
        {
            field: 'nomePaciente',
            headerName: 'Nome Paciente',
            width: 150,

        },
        {
            field: 'numeroTel',
            headerName: 'Telefone',
            width: 150,

        },
        {
            field: 'emailDoutor',
            headerName: 'Email Doutor',
            width: 150,
        }

    ];
    return (
        <Container maxWidth="sm">
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
            >
                <Card elevation={3} sx={{ padding: 4, borderRadious: 2, minWidth: '800px' }}>

                    <DataGrid
                        rows={consultas || []}
                        columns={columns}
                        pageSize={[5]}

                    />

                </Card>

            </Box>
        </Container>
    )
}