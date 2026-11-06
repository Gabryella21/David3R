# David 3R — Site institucional e demonstração

Landing page responsiva criada com HTML, CSS e JavaScript puro.

## Como visualizar
1. Extraia o arquivo ZIP.
2. Abra `index.html` no navegador.
3. Para publicar, envie os três arquivos (`index.html`, `style.css`, `script.js`) e este README para um repositório GitHub.

## Publicar no GitHub Pages
1. Entre em https://github.com e crie um repositório público, por exemplo `david3r`.
2. Clique em **Add file > Upload files** e envie os arquivos desta pasta.
3. Abra **Settings > Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/ (root)` e clique em **Save**.
6. Aguarde a publicação. O GitHub exibirá o endereço do site na seção Pages.

## O que já funciona nesta demonstração
- Navegação responsiva e seções institucionais do curso/sistema.
- Upload demonstrativo: seleciona um arquivo e exibe seu nome e tamanho. Não envia o arquivo a um servidor.
- Questão de múltipla escolha com correção automática no navegador.
- Agenda: cadastro, listagem e exclusão de compromissos durante a sessão.
- Solicitação de permissão de notificações do navegador para lembretes.

## Limitações importantes
Este é um protótipo front-end. Não possui login, banco de dados, armazenamento permanente, upload real, painel administrativo ou alertas em segundo plano. Os dados da agenda e os arquivos selecionados não são enviados nem sincronizados. Para uma aplicação real, conecte um backend (por exemplo, Supabase/Firebase) com autenticação, regras de acesso, armazenamento e agendador de notificações.

## Estrutura
- `index.html` — conteúdo e estrutura.
- `style.css` — identidade visual e responsividade.
- `script.js` — interações demonstrativas.
