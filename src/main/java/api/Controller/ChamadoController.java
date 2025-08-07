package api.Controller;

import api.Model.Chamado;
import api.Service.ChamadoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chamados")
public class ChamadoController {

    private final ChamadoService service;

    public ChamadoController(ChamadoService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Chamado> abrirChamado(@RequestBody Chamado chamado) {
        return ResponseEntity.ok(service.abrirChamado(chamado));
    }

    @PutMapping("/{id}/atender")
    public ResponseEntity<Chamado> atenderChamado(@PathVariable Long id) {
        return ResponseEntity.ok(service.marcarEmAtendimento(id));
    }

    @PutMapping("/{id}/fechar")
    public ResponseEntity<Chamado> fecharChamado(@PathVariable Long id) {
        return ResponseEntity.ok(service.fecharChamado(id));
    }

    @GetMapping
    public ResponseEntity<List<Chamado>> listarChamados() {
        return ResponseEntity.ok(service.listarTodos());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Chamado> buscarPorId(@PathVariable Long id) {
        return ResponseEntity.ok(service.buscarPorId(id));
    }
}
