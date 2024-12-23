package com.library.librarysystem.controller;

import com.library.librarysystem.model.Livro;
import com.library.librarysystem.service.LivroService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/livros")
public class Controller {

    private final LivroService livroService;

    public Controller(LivroService livroService) {
        this.livroService = livroService;
    }

    @PostMapping
    public ResponseEntity<Livro> criarLivro(@RequestBody Livro livro) {
        Livro novoLivro = livroService.salvarLivro(livro);
        return ResponseEntity.ok(novoLivro);
    }

    @GetMapping
    public List<Livro> listarLivros() {
        return livroService.listarLivros();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Livro> obterLivro(@PathVariable Long id) {
        Optional<Livro> livro = livroService.obterLivroPorId(id);
        return livro.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Livro> atualizarLivro(@PathVariable Long id, @RequestBody Livro livro) {
        livro.setId(id);
        Livro livroAtualizado = livroService.atualizarLivro(livro);
        return ResponseEntity.ok(livroAtualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarLivro(@PathVariable Long id) {
        livroService.deletarLivro(id);
        return ResponseEntity.noContent().build();
    }
}