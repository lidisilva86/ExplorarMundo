# 🌎 WorldExplorer

O WorldExplorer é um portal de consulta de informações sobre países do mundo.

O projeto foi desenvolvido utilizando Next.js 14 com App Router e integração com uma API de países.

## 🚀 Tecnologias utilizadas

- Next.js 14
- React
- TypeScript
- CSS
- REST API

## 📁 Estrutura do projeto

```text
worldexplorer/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── sobre/
│   │   └── page.tsx
│   ├── api/
│   │   └── pais/
│   │       └── [name]/
│   │           └── route.ts
│   └── pais/
│       └── [name]/
│           └── page.tsx
│
├── components/
│   ├── CountryCard.tsx
│   └── SearchBar.tsx
│
├── .env.local
└── README.md