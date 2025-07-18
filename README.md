# API Teste Pet Store

Este projeto realiza testes automatizados para API: https://petstore.swagger.io/

## 📋 Visão Geral

Conjunto de testes automatizados para validar endpoints e funcionalidades.

## ⚙️ Pré-requisitos

- Node.js (v16+ recomendado)
- npm (v8+)
- Cypress 14.5.1+

## 🚀 Instalação

```bash
# Clone o repositório
git clone https://github.com/fmatheusm/api-teste-pet-store.git

# Instale as dependências
npm install

# Executar os testes com interface
npm run open

# Executar os testes em headless
npm run cy:run

# Executar os testes e gerar relatório
npm run test:full
```

## 📁 . Estrutura do projeto

├── 📁 cypress/<br>
│ ├── 📁 e2e/ # 🧪 Casos de teste<br>
│ ├── 📁 fixtures/ # 🗃️ Dados estáticos<br>
│ ├── 📁 support/ # ⚙️ Configurações e comandos<br>
│ │ ├── 📄 commands.js # ✨ Comandos customizados<br>
│ │ └── 📄 e2e.js # 🌐 Configurações globais<br>
├── 📁 schemas/ # 📐 Schemas JSON para validação<br>
├── 📄 .gitignore<br>
├── 📄 cypress.config.js # ⚙️ Configuração do Cypress<br>
├── 📄 package.json<br>
└── 📄 README.md

## 📚 Dependências Principais

| Pacote               | Versão  | Finalidade                      |
| -------------------- | ------- | ------------------------------- |
| Cypress              | ^14.5.1 | 🧪 Framework de teste           |
| Faker.js             | ^9.9.0  | 🎭 Geração de dados fictícios   |
| chai-json-schema     | ^1.5.1  | 📐 Validação de schemas JSON    |
| chai-json-schema-ajv | ^5.2.4  | 🔌 Adaptador AJV para validação |
