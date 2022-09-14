# Steps

## npm init -y

Inicia um projeto node de maneira rápida.

## npm install express nodemon mongoose

Instala as dependências

## Criar script para executar o nodemon

No package.json, na propriedade scripts, criar uma propriedade 
chamada start com o valor "nodemon ./index.js localhost 3000"

```JSON
{
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon ./index.js localhost 3000"
  }
}
```

## Criar index.js

Criar o principal arquivo do projeto

## Executar npm start

Iniciar o script "start" que irá inicilizar o projeto com o nodemon

## Configurações iniciais no index.js


