# Mudanças

- Adicionado plugin SWC para o vite para melhorar a performance tanto no desenvolvimento quanto na build.
- Removidos imports, variaveis e estilos que não estava sendo utilizados.
- Padronização e formatação de nomes e estrutura de arquivos e componentes.
- Limpeza e Atualização de dependências.
- Abstração de diversas funções e componentes.
- Utilização da nova API do react-router-dom que permite mais funcionalidades.
- Adicionado icone favicon e nome da aplicação na aba do navegador.
- Adicionado tela de loading ao dashboard.
- Correção da exibição de alguns dados no dashboard.
- Adicionado o nome da pagina atual no header e na aba do navegador.
- Criado lógica de cache e revalidação para os dados do dashboard.

# Padronizações

## Mensagens de commits semânticos

See how a minor change to your commit message style can make you a better programmer.

Format: `<type>(<scope>): <subject>`

`<scope>` is optional

## Example

```
feat: add hat wobble
^--^  ^------------^
|     |
|     +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, style, or test.
```

More Examples:

- `feat`: (new feature for the user, not a new feature for build script)
- `fix`: (bug fix for the user, not a fix to a build script)
- `docs`: (changes to the documentation)
- `style`: (formatting, missing semi colons, etc; no production code change)
- `refactor`: (refactoring production code, eg. renaming a variable)
- `test`: (adding missing tests, refactoring tests; no production code change)
- `chore`: (updating grunt tasks etc; no production code change)

References:

- https://www.conventionalcommits.org/
- https://seesparkbox.com/foundry/semantic_commit_messages
- http://karma-runner.github.io/1.0/dev/git-commit-msg.html

## Nomes de arquivos e componentes

- Nomes de arquivos devem ser escritos sem acentos, sem espaços, sem caracteres especiais e em PascalCase. (Exemplo de PascalCase: NomeDoArquivoAquiTestandoUmDoisTres)

## Nomes de variáveis e funções

- Nomes em camelCase (Exemplo de camelCase: nomeDaVariavel) e descritivos evitar nomes genéricos, por exemplo: data, dataType, value, options, array, etc. (Exemplo de nome descritivo: clientCardsData)

## Estrutura de componentes

```tsx
export function NomeDoComponente() {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}
```

# Plugins Essenciais do VSCode para JS/TS

1. Prettier
2. ESLint

## Por que utilizar o Prettier?

O Prettier é um formatador de código projetado para formatar automaticamente o código em um estilo consistente. Ele pode ajudar a melhorar a legibilidade do seu código e facilitar o trabalho, especialmente em uma base de código com vários desenvolvedores.

As duas principiais razões pelas quais usar o Prettier em qualquer projeto:

Economia de tempo: o Prettier pode formatar automaticamente seu código, economizando tempo e esforço que você gastaria formatando manualmente seu código.
Código compartilhado: o Prettier pode ajudar a manter o estilo consistente em um projeto com vários desenvolvedores, pois ele pode ser configurado para ser executado automaticamente em cada salvamento.
Foco aprimorado: ao usar o Prettier, você pode se concentrar no conteúdo do seu código em vez da formatação, o que pode ajudá-lo a escrever um código melhor com mais rapidez.

### Como utilizar o Prettier?

1. Instale o Prettier no VSCode
2. Na configuração do VSCode, procure por "Format On Save" e marque a opção "Editor: Format On Save"
3. Pronto, agora toda vez que você salvar um arquivo, o Prettier irá formatar o código automaticamente.

## Por que utilizar o ESLint?

ESLint é uma ferramenta popular de linting que pode ajudá-lo a identificar e corrigir possíveis problemas em seu código JavaScript. Ele pode ajudar a melhorar a qualidade e a capacidade de manutenção do seu código, detectando possíveis bugs e impondo um estilo de código consistente.

Qualidade de código aprimorada e Consistência: o ESLint pode detectar possíveis problemas em seu código, como erros de sintaxe, ponto e vírgula ausentes e outros problemas que podem não ser imediatamente aparentes ao escrever o código. Isso pode ajudar a evitar erros de tempo de execução e melhorar a qualidade geral do seu código.

### Como utilizar o ESLint?

1. Instale o ESLint no VSCode
2. Automaticamente o ESLint irá identificar os erros e avisos no seu código e irá sugerir a correção.
