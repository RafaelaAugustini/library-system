package com.library.librarysystem.repository;

import com.library.librarysystem.model.Livro;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LivroRepository extends JpaRepository<Livro, Long> {
}