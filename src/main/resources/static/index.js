document.getElementById('form-adicionar-livro').addEventListener('submit', function(event) {
  event.preventDefault();

  const livro = {
    titulo: document.getElementById('titulo').value,
    autor: document.getElementById('autor').value,
    anoPublicacao: document.getElementById('ano_publicacao').value,
    genero: document.getElementById('genero').value
  };

  fetch('http://localhost:8080/livros', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(livro)
  })
      .then(response => {
        if (response.ok) {
          alert('Livro adicionado com sucesso!');
          document.getElementById('form-adicionar-livro').reset();
        } else {
          alert('Erro ao adicionar o livro. Tente novamente.');
        }
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
        alert('Erro ao conectar com o servidor. Tente novamente.');
      });
});

function redirecionarParaListaLivros() {
  window.location.href = 'livros.html';
}