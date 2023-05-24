import { createContext, useEffect, useState } from "react";

export interface Doutor {
    nome: string,
    email: string,
    telefone: string,
}

export interface Consulta {
    id: number,
    data: string,
    nomePaciente: string,
    numeroTel: string,
    emailDoutor: string,
}

interface ContextProps {
    doutores: Doutor[],
    consultas: Consulta[],
    adicionarDoutor: (doutor: Doutor) => void;
    agendarConsulta: (consulta: Consulta) => void;
    popularArrayDoutores: (doutores: Doutor[]) => void;
}

export const ConsultasContext = createContext<Partial<ContextProps>>({})

export const ConsultasProvider = ({ children }) => {
    const [doutores, setDoutores] = useState<Doutor[]>(JSON.parse(localStorage.getItem('doutores')) || [])
    const [consultas, setConsultas] = useState<Consulta[]>(JSON.parse(localStorage.getItem('consultas')) || [])

    const adicionarDoutor = (doutor: Doutor) => {
        setDoutores([...doutores, doutor])
    }

    const agendarConsulta = (consulta: Consulta) => {
        setConsultas([...consultas, consulta])
    }

    useEffect(() => {
        localStorage.setItem('consultas', JSON.stringify(consultas))
    }, [consultas])

    useEffect(() => {
        localStorage.setItem('doutores', JSON.stringify(doutores))
    }, [doutores])

    useEffect(() => {
        
    }, [])

    return (
        <ConsultasContext.Provider value={{ doutores, consultas, adicionarDoutor, agendarConsulta }}>
            {children}
        </ConsultasContext.Provider>
    )
}