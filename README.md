# Library System

Sistema para gerenciamento de livros de uma biblioteca municipal, com back-end e front-end integrados.

Projeto desenvolvido como parte do curso de Desenvolvimento com Python na UNIFECAF.

---

## Documentação

- [Documentação do Front-End](https://1drv.ms/w/c/2c677338f03f522f/EWk3j4gViptBmwFNTiPWWK0BOvQfuXagy8OPRzKjqsOOgA?e=ZYtRBZ)
- [Documentação do Back-End](https://1drv.ms/w/c/2c677338f03f522f/ETuDdJM6uMhAtaBL1R4COGUBIF5oyIRmToc-esmWhNNi7Q?e=bkBYQe)

---

## Tecnologias e Ferramentas Utilizadas

- **IDE**: IntelliJ IDEA (preferível utilizada)
- **Servidor de banco de dados**: XAMPP
- **Linguagens**: Java, JavaScript, CSS e HTML
- **Framework**: Spring Boot, com as seguintes dependências:
  - Spring Web
  - Spring Data JPA
  - MySQL Driver
- **Banco de Dados**: MySQL (MySQL Workbench e MySQL Server)

---

## Ferramentas Necessárias para Execução Local

Para executar o sistema localmente, é necessário ter instalado:

- MySQL Server
- MySQL Workbench ([Baixe aqui](https://www.mysql.com/products/workbench/))
- IntelliJ IDEA ([Baixe aqui](https://www.jetbrains.com/pt-br/idea/download/))

---

## Como Executar o Projeto Localmente

1. **Clone o Repositório**:
   ```bash
   git clone <url-do-repositorio>
   ```

2. **Abra o Projeto**:
   - Abra o IntelliJ IDEA e importe o projeto clonado.

3. **Configure o Banco de Dados**:
   - Certifique-se de que o MySQL Server está em execução.
   - Configure o banco de dados no arquivo `application.properties` com suas credenciais do MySQL.

4. **Execute a Aplicação**:
   - Use a classe `Application.java` como ponto de entrada.

5. **Acesse a API**:
   - A aplicação estará disponível em: [http://localhost:8080](http://localhost:8080)

---

## Referências Bibliográficas

- [Primeiro CRUD com Spring Boot](https://vitormoschetti.medium.com/primeiro-crud-com-spring-boot-5b7abd118ded)
- [Tutorial CRUD no YouTube](https://www.youtube.com/watch?v=Tnl4YnB6E54&t=155s&ab_channel=Build%26Run)
- [Build Run - CRUD Usuários no GitHub](https://github.com/buildrun-tech/buildrun-agregador-de-investimentos/tree/crud-usuarios)
- [O que é REST API](https://blog.engdb.com.br/o-que-e-rest-api/)

