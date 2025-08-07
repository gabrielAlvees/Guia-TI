export type StatusChamado = 'ABERTO' | 'EM_ATENDIMENTO' | 'FECHADO';

export interface Chamado {
    id?: number;
    titulo: string;
    descricao: string;
    status?: StatusChamado;
    dataAbertura?: string;
    dataFechamento?: string;
    dataAtendimento?: string;
}
