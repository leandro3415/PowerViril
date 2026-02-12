# Como publicar na Vercel

A Vercel detecta automaticamente projetos Vite e faz o deploy com um clique.

---

## Opção 1: Via interface (GitHub)

### 1. Envie o projeto para o GitHub

Se ainda não tiver:
1. Crie um repositório no [GitHub](https://github.com/new)
2. No terminal, dentro da pasta do projeto:
```bash
cd "c:\Users\leand\OneDrive\Desktop\app de exercícios"
git init
git add .
git commit -m "App Saúde Masculina"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
git push -u origin main
```

### 2. Importe na Vercel

1. Acesse [vercel.com](https://vercel.com) e faça login (pode usar conta GitHub)
2. Clique em **Add New** → **Project**
3. Importe o repositório do GitHub
4. A Vercel detecta o Vite automaticamente
5. Clique em **Deploy**
6. Em cerca de 1 minuto seu site estará no ar

---

## Opção 2: Via terminal (Vercel CLI)

### 1. Instale a Vercel CLI

```bash
npm i -g vercel
```

### 2. Faça o deploy

```bash
cd "c:\Users\leand\OneDrive\Desktop\app de exercícios"
vercel
```

Na primeira vez, ele pedirá:
- **Login** na conta Vercel (abre o navegador)
- **Link to existing project?** → No
- **Project name?** → Enter (usa o nome da pasta)
- **Directory?** → Enter (usa .)
- Depois: **Deploy** automaticamente

### 3. Deploy em produção

```bash
vercel --prod
```

---

## Resultado

Você receberá uma URL como: `https://app-de-exerc-cios.vercel.app`

O site ficará online e será atualizado automaticamente se conectar ao GitHub.
