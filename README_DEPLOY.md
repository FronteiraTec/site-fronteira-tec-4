# 🚀 Guia de Deploy - FronteiraTec

## 📋 Índice
- [Atualizando Membros do Time](#atualizando-membros-do-time)
- [Processo de Build e Deploy](#processo-de-build-e-deploy)
- [Resolução de Problemas](#resolução-de-problemas)
- [Cache do GitHub Pages](#cache-do-github-pages)
- [Checklist Pré-Deploy](#checklist-pré-deploy)

---

## 👥 Atualizando Membros do Time

### 1. Editar Configuração
Arquivo: `Components/config/timeConfig.jsx`

```javascript
export const membrosAtuais = [
  {
    id: 1,
    nome: 'Nome Completo',
    cargo: 'Cargo na Empresa',
    diretoria: 'Nome da Diretoria',
    curso: 'Curso Universitário',
    foto: '/imagens/nome.jpeg', // ⚠️ Use a extensão correta!
    linkedin: 'https://linkedin.com/in/perfil',
    github: 'https://github.com/usuario'
  }
];
```

### 2. Adicionar Imagem
- Coloque a foto em: `public/imagens/`
- Formatos aceitos: `.png`, `.jpg`, `.jpeg`
- **IMPORTANTE**: Verifique a extensão no arquivo vs configuração!

```powershell
# Verificar imagens disponíveis
Get-ChildItem -Path "public\imagens" -Filter "*.png","*.jpg","*.jpeg"
```

---

## 🔨 Processo de Build e Deploy

### Passo 1: Limpar Builds Antigos
```powershell
Remove-Item -Path "out","_next",".next" -Recurse -Force -ErrorAction SilentlyContinue
```

### Passo 2: Build do Next.js
```powershell
npm run build
```

**Verificações após build:**
- ✅ Build concluído sem erros
- ✅ Pasta `out/` foi criada
- ✅ Arquivos HTML gerados em `out/`
- ✅ Pasta `out/_next/static/` contém chunks, CSS e fontes

### Passo 3: Copiar Arquivos Adicionais
```powershell
# Service Worker e recursos extras
Copy-Item -Path "public\sw.js" -Destination "out\sw.js" -Force
Copy-Item -Path "public\imagens" -Destination "out\imagens" -Recurse -Force
Copy-Item -Path "public\limpar-cache.html" -Destination "out\limpar-cache.html" -Force
```

### Passo 4: Commit e Push
```powershell
git add .
git commit -m "Update: Descrição da mudança"
git push
```

**⚠️ IMPORTANTE:** A pasta `out/` agora é versionada no Git para o GitHub Pages funcionar corretamente!

---

## 🐛 Resolução de Problemas

### Problema: Arquivos 404 no site em produção

**Sintoma**: Erros 404 para arquivos `_next/static/chunks/*.js`, `*.css` ou `*.woff2`

**Causa**: Pasta `out/` não foi commitada ao Git

**Solução**:
1. Verificar se `.gitignore` NÃO está bloqueando `/out/`
2. Rebuild completo:
   ```powershell
   Remove-Item -Path "out","_next",".next" -Recurse -Force -ErrorAction SilentlyContinue
   npm run build
   Copy-Item -Path "public\sw.js" -Destination "out\sw.js" -Force
   Copy-Item -Path "public\imagens" -Destination "out\imagens" -Recurse -Force
   git add .
   git commit -m "fix: rebuild completo"
   git push
   ```

---

### Problema: Imagem não aparece (404)

**Causa**: Extensão incorreta no `timeConfig.jsx`

**Solução**:
1. Verificar arquivo real:
   ```powershell
   Get-ChildItem -Path "public\imagens" -Filter "isabela.*"
   ```
2. Corrigir extensão no `timeConfig.jsx`
3. Refazer build completo

---

### Problema: Membros novos não aparecem

**Causa**: HTML estático desatualizado

**Solução**:
```powershell
# 1. Limpar tudo
Remove-Item -Path "out","_next",".next" -Recurse -Force -ErrorAction SilentlyContinue

# 2. Novo build
npm run build

# 3. Copiar arquivos
Remove-Item -Path "_next" -Recurse -Force -ErrorAction SilentlyContinue
Copy-Item -Path "out\_next" -Destination "_next" -Recurse -Force
Copy-Item -Path "out\*.html" -Destination "." -Force

# 4. Deploy
git add .
git commit -m "Fix: Atualiza build com novos membros"
git push
```

---

### Problema: Erro "Multiple artifacts" no GitHub Actions

**Causa**: Workflow com artefatos duplicados

**Solução**:
1. Acessar: https://github.com/FronteiraTec/site-fronteira-tec-4/actions
2. Localizar o workflow problemático (verificar ID no erro)
3. Clicar em "Cancel workflow"
4. Aguardar 2-3 minutos
5. Fazer novo push:
   ```powershell
   # Forçar trigger de novo deploy
   Set-Content -Path "DEPLOY_TRIGGER.txt" -Value "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm')`n"
   git add DEPLOY_TRIGGER.txt
   git commit -m "Trigger: Novo deploy"
   git push
   ```

---

### Problema: Fontes .woff2 com erro 404

**Causa**: Arquivos estáticos do `_next/` não foram copiados

**Solução**:
```powershell
# Copiar novamente os arquivos estáticos
Remove-Item -Path "_next" -Recurse -Force
Copy-Item -Path "out\_next" -Destination "_next" -Recurse -Force
git add _next/
git commit -m "Fix: Adiciona arquivos estáticos"
git push
```

---

## 🕐 Cache do GitHub Pages

### Entendendo o Cache

O GitHub Pages usa CDN com cache de **10 minutos** (`max-age=600`)

**Headers de cache:**
```
cache-control: max-age=600
age: 78
x-cache: HIT
```

### Como Lidar com Cache

**Opção 1: Aguardar** (Recomendado)
- Aguarde 10-15 minutos após deploy
- O cache expira automaticamente

**Opção 2: Hard Refresh** (Imediato)
- **Desktop**: `Ctrl+Shift+R` (Windows) ou `Cmd+Shift+R` (Mac)
- **Mobile**: Limpar cache do navegador ou modo anônimo

**Opção 3: Verificar sem cache**
```powershell
# Usar curl para ver versão atual no servidor
curl -I https://fronteiratec.com/nossotime.html
```

---

## ✅ Checklist Pré-Deploy

Antes de fazer `git push`, verifique:

- [ ] ✅ Imagens adicionadas em `public/imagens/`
- [ ] ✅ Extensões corretas no `timeConfig.jsx`
- [ ] ✅ Build executado com sucesso (`npm run build`)
- [ ] ✅ Arquivos estáticos copiados de `out/` para raiz
- [ ] ✅ Nenhum erro no console do build
- [ ] ✅ IDs dos membros únicos e sequenciais

### Comando Completo (Copy-Paste)
```powershell
# Build completo e deploy em um comando
Remove-Item -Path "out","_next",".next" -Recurse -Force -ErrorAction SilentlyContinue; `
npm run build; `
Remove-Item -Path "_next" -Recurse -Force -ErrorAction SilentlyContinue; `
Copy-Item -Path "out\_next" -Destination "_next" -Recurse -Force; `
Copy-Item -Path "out\*.html" -Destination "." -Force; `
git add .; `
git commit -m "Update: Build completo"; `
git push
```

---

## 📊 Verificação Pós-Deploy

### 1. Monitorar GitHub Actions
https://github.com/FronteiraTec/site-fronteira-tec-4/actions

**Aguardar:**
- ✅ Build job: ~2-3 minutos
- ✅ Deploy job: ~1-2 minutos
- ⏱️ **Total**: ~5 minutos

### 2. Verificar Site em Produção
https://fronteiratec.com/nossotime

**Checklist:**
- [ ] Todas as imagens carregam (sem 404)
- [ ] Todos os membros aparecem
- [ ] Links do LinkedIn/GitHub funcionam
- [ ] Design está correto

### 3. Se houver problemas
1. Aguardar 10 minutos (cache)
2. Fazer hard refresh (`Ctrl+Shift+R`)
3. Se persistir, verificar logs do GitHub Actions

---

## 🆘 Comandos de Emergência

### Reset Total
```powershell
# Limpar TUDO e recomeçar
git reset --hard origin/main
Remove-Item -Path "out","_next",".next","node_modules" -Recurse -Force -ErrorAction SilentlyContinue
npm install
npm run build
```

### Verificar Diferenças
```powershell
# Ver arquivos modificados
git status

# Ver diferenças
git diff Components/config/timeConfig.jsx
```

---

## 📞 Contatos de Suporte

- **GitHub Issues**: https://github.com/FronteiraTec/site-fronteira-tec-4/issues
- **Documentação Next.js**: https://nextjs.org/docs
- **GitHub Pages Status**: https://www.githubstatus.com/

---

**Última atualização**: 23 de janeiro de 2026
**Versão do Next.js**: 16.1.4
**Modo de Build**: Static Export (GitHub Pages)
