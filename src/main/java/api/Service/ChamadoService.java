package api.Service;


import api.ENUM.StatusChamado;
import api.Model.Chamado;
import api.Repository.ChamadoRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class ChamadoService {

    private final ChamadoRepository repository;

    public ChamadoService(ChamadoRepository repository) {
        this.repository = repository;
    }

    public Chamado abrirChamado(Chamado chamado) {
        chamado.setStatus(StatusChamado.ABERTO);
        chamado.setDataAbertura(LocalDateTime.now());
        return repository.save(chamado);
    }

    public Chamado marcarEmAtendimento(Long id) {
        Chamado chamado = repository.findById(id).orElseThrow();
        chamado.setStatus(StatusChamado.EM_ATENDIMENTO);
        chamado.setDataAtendimento(LocalDateTime.now());
        return repository.save(chamado);
    }

    public Chamado fecharChamado(Long id) {
        Chamado chamado = repository.findById(id).orElseThrow();
        chamado.setStatus(StatusChamado.FECHADO);
        chamado.setDataFechamento(LocalDateTime.now());
        return repository.save(chamado);
    }

    public List<Chamado> listarTodos() {
        return repository.findAll();
    }

    public Chamado buscarPorId(Long id) {
        return repository.findById(id).orElseThrow();
    }
}