# Olivario Software - Site Institucional

Documentação oficial para inicialização, desenvolvimento, padronização e deploy do site institucional da **Olivario Software** (`olivario.com.br`), utilizando **GitHub Pages** e **Cloudflare DNS**, nos mesmos moldes do projeto do portfólio pessoal.

---

## 🌐 1. Topologia de Domínios e Hospedagem

| Finalidade | Domínio / URL | Repositório GitHub | Hospedagem |
| :--- | :--- | :--- | :--- |
| **Site da Empresa** | `https://olivario.com.br` (e `www`) | `marioantonio340/olivario` | GitHub Pages |
| **Portfólio Pessoal** | `https://portfolio.olivario.com.br` | `marioantonio340/portfolio` | GitHub Pages |
| **Gerenciador DNS / SSL** | Cloudflare | - | Nameservers ativos |

---

## 🎨 2. Identidade Visual e Ativos

O projeto possui manual de identidade visual e ativos gráficos já disponíveis nesta pasta:
- [`Manual_de_Identidade_Visual_Olivario_Software.pdf`](./Manual_de_Identidade_Visual_Olivario_Software.pdf)
- [`logos/`](./logos/) (logotipos, ícones e variações)

Consulte o manual para obter a paleta de cores primária e secundária, tipografia oficial e regras de aplicação das marcas nos componentes da interface.

---

## 🚀 3. Inicialização e Estrutura do Projeto

Para manter compatibilidade e o mesmo padrão de deploy do portfólio com React e `gh-pages`:

### Passo 3.1: Inicializar o Projeto React
No diretório `olivario` (`C:\Users\Mario Fernandes\Documents\olivario`):

```bash
# Inicializar com Create React App (ou Vite React)
npx create-react-app .

# Instalar gh-pages para automatizar o deploy
npm install --save-dev gh-pages
```

### Passo 3.2: Configurar o `package.json`
Abra o `package.json` e adicione/atualize os seguintes campos:

```json
{
  "name": "olivario-website",
  "version": "1.0.0",
  "private": true,
  "homepage": "https://olivario.com.br",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

### Passo 3.3: Configurar o arquivo `CNAME`
Crie o arquivo `public/CNAME` contendo exatamente:

```text
olivario.com.br
```

---

## ⚙️ 4. Configuração de DNS na Cloudflare para o Domínio Principal

Diferente do subdomínio `portfolio` (que usa apenas um `CNAME`), o domínio raiz da empresa (`olivario.com.br`) precisa dos registros `A` oficiais do GitHub Pages, e o `www` de um `CNAME`:

No painel da **Cloudflare** (`olivario.com.br` > **DNS** > **Records**), adicione os seguintes registros:

### 1. Registros para a raiz (`@` / `olivario.com.br`):
Crie 4 registros do tipo `A` apontando para os IPs de Anycast do GitHub Pages:

| Tipo | Nome | Conteúdo (IP) | Proxy Status |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `185.199.108.153` | DNS Only (cinza) inicial |
| **A** | `@` | `185.199.109.153` | DNS Only (cinza) inicial |
| **A** | `@` | `185.199.110.153` | DNS Only (cinza) inicial |
| **A** | `@` | `185.199.111.153` | DNS Only (cinza) inicial |

### 2. Registro para o `www`:
| Tipo | Nome | Conteúdo / Target | Proxy Status |
| :--- | :--- | :--- | :--- |
| **CNAME** | `www` | `marioantonio340.github.io` | DNS Only (cinza) inicial |

> *Nota:* Mantenha o Proxy status como **DNS Only** (nuvem cinza) durante a primeira validação do certificado SSL no GitHub. Após emitido, você pode ligar o Proxy (nuvem laranja) com modo SSL configurado como **Full** ou **Full (Strict)** na Cloudflare.

---

## 📦 5. Versionamento e Deploy no GitHub

### Passo 5.1: Criar o Repositório no GitHub
1. Acesse [github.com/new](https://github.com/new).
2. Nomeie o repositório como: **`olivario`**.
3. Deixe-o como público ou privado (GitHub Pages suporta ambos).

### Passo 5.2: Conectar e Fazer o Primeiro Push
No terminal dentro da pasta `olivario`:

```bash
git init
git add .
git commit -m "feat: estrutura inicial do site institucional Olivario"
git branch -M main
git remote add origin https://github.com/marioantonio340/olivario.git
git push -u origin main
```

### Passo 5.3: Executar o Deploy
Execute o comando de deploy configurado:

```bash
npm run deploy
```

O comando irá:
1. Executar `npm run build` (gerando a pasta otimizada `build/` contendo o `CNAME`).
2. Criar ou atualizar a branch `gh-pages` no GitHub com os arquivos compilados.

---

## 🔒 6. Ativar Domínio Personalizado no GitHub Pages

1. No repositório `marioantonio340/olivario`, acesse **Settings** > **Pages**.
2. Em **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `gh-pages` / `/ (root)`
3. Em **Custom domain**:
   - Digite: `olivario.com.br`
   - Clique em **Save**.
   - O GitHub iniciará o processo de DNS check.
4. Quando a checagem for concluída (status verde), marque a caixa:
   - ✅ **Enforce HTTPS**

---

## 🔄 7. Fluxo de Trabalho Contínuo (Desenvolvimento Diário)

Para trabalhar no dia a dia do site:

```bash
# 1. Rodar em ambiente local de desenvolvimento
npm start
# Acesse no navegador: http://localhost:3000

# 2. Salvar mudanças no código
git add .
git commit -m "refactor: novos componentes da home"
git push origin main

# 3. Publicar em produção
npm run deploy
```

