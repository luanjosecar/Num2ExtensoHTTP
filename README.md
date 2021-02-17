
# Num2ExtensoHTTP

  Projeto para o desenvolvimento de um servidor HTTP que retorne a escrita por extenso de um valor numérico dado em uma requisição GET.
  - A saida escrita é dada no modelo json : *{"extenso": valorPorExtenso}*
  - Os valores colocados dentro do request podem ter um range de -99999 a 99999;
 
 
## Usando

  Para que o código consiga ser rodado forma fluida é aconselhado possuir :
  Node.js v -14.15
 
  - Para conseguir conferir a versão instalada em seu computador basta rodar no terminal
  -
  ```shell
  node -v
  ```
  Possuindo os requisitos necessários basta rodar dentro do arquivo principal :
 
  ```shell
  node .\src\index.js
  ```
 
  ou
 
  ```shell
  npm start
  ```
 
  Feito isso o servidor HTTP será iniciado na porta 3000, possibilitando seu acesso então por http://localhost:3000.
 
## Exemplos de caso
 
  **Input** : *http://localhost:30000/123*
  **Output** : *{"extenso" : "cento e vinte e três"}*
 
 Para os casos de request POST, PUT e DELETE temos um retorno de status 405 para solicitações não permitidas. Já para os casos fora do range da aplicação o status é de 415 para formatos não suportados
 
 ## Docker
 
 A imagem para o docker pode ser encontrada no repositório luanjosecar/server:latest
 Para roda-la se é necessário colocar a porta para análise, por exemplo :
 
 ```shell
 docker run -p 5000:3000 7a6c8c396fb9
 ```
 
