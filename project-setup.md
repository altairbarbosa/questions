📝 Questions - Plataforma de Perguntas e Respostas

Plataforma completa para gerenciamento de perguntas e respostas construída com Node.js, React e MariaDB, utilizando Docker para containerização.

🏗️ Arquitetura do Projeto

O projeto segue uma arquitetura modular com separação clara de responsabilidades:

questions/
├── backend/               # API Node.js (Express + Sequelize)
│   ├── src/
│   │   ├── controllers/   # Lógica de negócio
│   │   ├── models/        # Modelos de dados
│   │   ├── routes/        # Definição de rotas API
│   │   ├── services/      # Lógica de serviço
│   │   ├── utils/         # Utilitários e helpers
│   │   ├── app.js         # Configuração do Express
│   │   └── server.js      # Inicialização do servidor
│   └── Dockerfile
│
├── frontend/              # Aplicação React
│   ├── src/
│   │   ├── components/    # Componentes reutilizáveis
│   │   ├── pages/         # Páginas da aplicação
│   │   ├── services/      # Chamadas à API
│   │   ├── styles/        # Estilos globais
│   │   ├── App.js         # Componente raiz
│   │   └── index.js       # Ponto de entrada
│   └── Dockerfile
│
├── docker-compose.yml     # Orquestração dos containers
└── README.md              # Documentação

🚀 Como Executar o Projeto

Pré-requisitos

Docker (20.10+) e Docker Compose (2.0+)
Node.js (18+) e npm (9+) - apenas para desenvolvimento local

▶️ Executando com Docker (recomendado)

Clone o repositório:

git clone https://github.com/altairbarbosa/questions.git
cd questions

Inicie os containers:

docker-compose up --build

Acesse:

Frontend: http://localhost:3000

API Backend: http://localhost:3001/api/questions

🛠️ Desenvolvimento Local

Backend

cd backend
npm install
npm run dev  # Executa em modo desenvolvimento com nodemon

Frontend

cd frontend
npm install
npm start  # Inicia em http://localhost:3000

🌐 Endpoints da API

Método	Endpoint	Descrição
GET	/api/questions	Lista todas as perguntas
POST	/api/questions	Cria uma nova pergunta
GET	/api/questions/:id	Obtém detalhes de uma pergunta

Exemplo de requisição:

curl -X POST -H "Content-Type: application/json" \
-d '{"title":"Como usar Docker?","content":"Quero aprender Docker..."}' \
http://localhost:3001/api/questions

🐛 Solução de Problemas

Problemas comuns
Erro ao conectar ao banco de dados:

Verifique se o container do MariaDB está rodando

Execute docker-compose logs db para ver os logs

Problemas de build:

Limpe containers antigos: docker-compose down -v

Reconstrua as imagens: docker-compose build --no-cache

Problemas de autenticação:

Verifique as variáveis de ambiente no .env

🤝 Como Contribuir

Faça um fork do projeto

Crie uma branch para sua feature (git checkout -b feature/awesome-feature)

Commit suas mudanças (git commit -m 'Add awesome feature')

Push para a branch (git push origin feature/awesome-feature)

Abra um Pull Request

📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

Desenvolvido com ❤️ por Altair Barbosa | altairbarbosa@outlook.com