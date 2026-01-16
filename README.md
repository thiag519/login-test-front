# 📄 Documentação do Projeto – MVP Plataforma de Usuários

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

---

## 1. Visão Geral

Este projeto consiste em um **MVP (Minimum Viable Product)** de uma plataforma web com foco em autenticação de usuários e interação com conteúdo. O sistema permite que usuários se cadastrem, realizem login e acessem áreas protegidas, enquanto visitantes podem visualizar conteúdo público.

O objetivo principal do projeto é demonstrar a implementação de **autenticação segura**, **separação entre front-end e back-end**, e boas práticas no desenvolvimento de aplicações web modernas.

---

## 2. Funcionalidades Principais

* Cadastro e login de usuários
* Autenticação baseada em **JWT**
* Persistência de sessão via **cookies HTTP-only**
* Rotas públicas e privadas
* Feed público acessível sem autenticação
* Ações protegidas para usuários autenticados
* Verificação automática de sessão ao recarregar a página

---

## 3. Arquitetura do Projeto

O projeto foi desenvolvido com **arquitetura desacoplada**, separando claramente as responsabilidades entre front-end e back-end.

### Front-end

Responsável pela interface do usuário, consumo da API e controle de estado da autenticação.

**Tecnologias utilizadas:**

* Next.js (App Router)
* React
* TypeScript
* React Hook Form
* Axios
* Context API

### Back-end

Responsável pela lógica de negócio, autenticação, validações e comunicação com o banco de dados.

**Tecnologias utilizadas:**

* Node.js
* Express
* TypeScript
* Prisma ORM
* JWT (JSON Web Token)
* PostgreSQL

---

## 4. Autenticação e Segurança

* Autenticação baseada em **JWT**
* Token gerado no login e armazenado em **cookies HTTP-only**
* Endpoint `/public/me` para validação da sessão
* Middleware no Next.js para proteção de rotas privadas
* Verificação automática do usuário no carregamento da aplicação

---

## 5. Fluxo de Autenticação

1. Usuário envia credenciais pelo formulário de login
2. Back-end valida os dados e gera um token JWT
3. Token é salvo em cookie seguro no front-end
4. Front-end consulta `/api/me` para validar a sessão
5. Usuário é redirecionado conforme o estado de autenticação

---

## 6. Gerenciamento de Formulários

Os formulários de autenticação foram implementados utilizando **React Hook Form**, garantindo:

* Melhor performance
* Validações simples e eficientes
* Código mais limpo e organizado

---

## 7. Comunicação com a API

A comunicação entre front-end e back-end é feita através de **Axios**, permitindo:

* Centralização das requisições HTTP
* Tratamento de erros consistente
* Envio automático de cookies de autenticação

---

## 8. Objetivo do MVP

* Validar a estrutura de autenticação
* Demonstrar domínio de tecnologias modernas
* Servir como base escalável para futuras funcionalidades
* Aplicar boas práticas de organização de código

---

## 9. Possíveis Evoluções

* Sistema de permissões por perfil (roles)
* Criação e edição de posts
* Curtidas e comentários
* Refresh token
* Testes automatizados

---

## 10. Conclusão

Este projeto demonstra a construção de um **MVP funcional e seguro**, aplicando conceitos fundamentais de desenvolvimento web, autenticação, arquitetura e boas práticas, sendo ideal para apresentação em portfólio.

