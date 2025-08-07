import {
    Container,
    Form,
    Lista,
    ChamadoCard
} from "../styles/chamadosStyle.ts";

import { useEffect, useState } from "react";
import { api } from "../api/api.ts";
import type {Chamado} from "../types/Chamado.ts";

export const Chamados = () => {
    const [chamados, setChamados] = useState<Chamado[]>([]);
    const [novoChamado, setNovoChamado] = useState({ titulo: "", descricao: "" });

    useEffect(() => {
        carregarChamados();
    }, []);

    const carregarChamados = async () => {
        const response = await api.get<Chamado[]>("/chamados");
        setChamados(response.data);
    };

    const abrirChamado = async () => {
        if (!novoChamado.titulo || !novoChamado.descricao) return;
        await api.post("/chamados", novoChamado);
        setNovoChamado({ titulo: "", descricao: "" });
        carregarChamados();
    };

    const atenderChamado = async (id: number) => {
        await api.put(`/chamados/${id}/atender`);
        carregarChamados();
    };

    const fecharChamado = async (id: number) => {
        await api.put(`/chamados/${id}/fechar`);
        carregarChamados();
    };

    return (
        <Container>
            <h2>Abertura de Chamados</h2>

            <Form>
                <input
                    type="text"
                    placeholder="Título"
                    value={novoChamado.titulo}
                    onChange={(e) => setNovoChamado({ ...novoChamado, titulo: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Descrição"
                    value={novoChamado.descricao}
                    onChange={(e) => setNovoChamado({ ...novoChamado, descricao: e.target.value })}
                />
                <button onClick={abrirChamado}>Abrir Chamado</button>
            </Form>

            <Lista>
                {chamados.map((chamado) => (
                    <ChamadoCard key={chamado.id}>
                        <strong>{chamado.titulo}</strong>
                        <p>{chamado.descricao}</p>
                        <p>Status: {chamado.status}</p>
                        <p>Abertura: {chamado.dataAbertura?.split("T")[0]}</p>

                        {chamado.status === "ABERTO" && (
                            <button onClick={() => atenderChamado(chamado.id!)}>Atender</button>
                        )}

                        {chamado.status === "EM_ATENDIMENTO" && (
                            <button onClick={() => fecharChamado(chamado.id!)}>Fechar</button>
                        )}
                    </ChamadoCard>
                ))}
            </Lista>
        </Container>
    );
};
