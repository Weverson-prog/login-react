# Github Branches

### Antes de começar a trabalhar em um projeto, é importante verificar se a sua branch está atualizada com a branch main. Para isso, execute o comando:

1. `git checkout main` -> vai mudar a sua branch para a main.
2. `git pull` -> vai atualizar a branch main no seu repositório local.
3. `git checkout <nome-da-sua-branch>` -> vai mudar a sua branch para a branch que você estava trabalhando.
4. `git rebase main` -> vai atualizar a sua branch com a main.
5. `git push -f` -> vai atualizar a sua branch no repositório remoto.
6. `git status` -> vai mostrar o status da sua branch.

### Após fazer as alterações no seu projeto, basta fazer os commits e pushs normais (importante verificar se está na sua branch), se baseando nos commits semanticos:

1. `git add .` -> adiciona todos os arquivos modificados.
2. `git commit -m "feat: add new feature"` -> adiciona uma mensagem de commit.
3. `git push` -> envia as alterações para o repositório remoto.
