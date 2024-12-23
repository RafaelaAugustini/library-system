function carregarLivros() {
    fetch('http://localhost:8080/livros')
        .then(response => response.json())
        .then(livros => {
            const tabelaLivros = document.getElementById('tabela-livros').getElementsByTagName('tbody')[0];
            tabelaLivros.innerHTML = '';
            livros.forEach(livro => {
                const linha = document.createElement('tr');

                const cellId = document.createElement('td');
                cellId.textContent = livro.id;

                const cellTitulo = document.createElement('td');
                cellTitulo.textContent = livro.titulo;

                const cellAutor = document.createElement('td');
                cellAutor.textContent = livro.autor;

                const cellAno = document.createElement('td');
                cellAno.textContent = livro.anoPublicacao;

                const cellGenero = document.createElement('td');
                cellGenero.textContent = livro.genero;

                const cellAcoes = document.createElement('td');

                const buttonEditar = document.createElement('button');
                buttonEditar.textContent = 'Editar';
                buttonEditar.onclick = function() {
                    editarLivro(livro);
                };

                const buttonExcluir = document.createElement('button');
                buttonExcluir.textContent = 'Excluir';
                buttonExcluir.onclick = function() {
                    excluirLivro(livro.id);
                };

                cellAcoes.appendChild(buttonEditar);
                cellAcoes.appendChild(buttonExcluir);

                linha.appendChild(cellId);
                linha.appendChild(cellTitulo);
                linha.appendChild(cellAutor);
                linha.appendChild(cellAno);
                linha.appendChild(cellGenero);
                linha.appendChild(cellAcoes);

                tabelaLivros.appendChild(linha);
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os livros:', error);
            alert('Erro ao carregar a lista de livros.');
        });
}

function editarLivro(livro) {
    document.getElementById('editar-id').value = livro.id;
    document.getElementById('editar-titulo').value = livro.titulo;
    document.getElementById('editar-autor').value = livro.autor;
    document.getElementById('editar-ano_publicacao').value = livro.anoPublicacao;
    document.getElementById('editar-genero').value = livro.genero;

    document.getElementById('form-editar-livro').style.display = 'block';
}

function cancelarEdicao() {
    document.getElementById('form-editar-livro').style.display = 'none';
}

document.getElementById('form-editar-livro').addEventListener('submit', function(event) {
    event.preventDefault();

    const livroAtualizado = {
        id: document.getElementById('editar-id').value,
        titulo: document.getElementById('editar-titulo').value,
        autor: document.getElementById('editar-autor').value,
        anoPublicacao: document.getElementById('editar-ano_publicacao').value,
        genero: document.getElementById('editar-genero').value
    };

    fetch(`http://localhost:8080/livros/${livroAtualizado.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(livroAtualizado)
    })
        .then(response => response.json())
        .then(() => {
            alert('Livro atualizado com sucesso!');
            document.getElementById('form-editar-livro').style.display = 'none';
            carregarLivros();
        })
        .catch(error => {
            console.error('Erro ao atualizar o livro:', error);
            alert('Erro ao atualizar o livro.');
        });
});

function excluirLivro(id) {
    if (confirm('Tem certeza que deseja excluir este livro?')) {
        fetch(`http://localhost:8080/livros/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response.ok) {
                    alert('Livro excluído com sucesso!');
                    carregarLivros();
                } else {
                    alert('Erro ao excluir o livro.');
                }
            })
            .catch(error => {
                console.error('Erro ao excluir o livro:', error);
                alert('Erro ao excluir o livro.');
            });
    }
}

function voltarParaPaginaPrincipal() {
    window.location.href = 'index.html';
}

window.onload = carregarLivros;