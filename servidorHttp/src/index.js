const { request, response } = require('express');
const express = require('express');

require('./modules')();

const app = express();
app.use(express.json());


app.get('/:numero', (request, response) => {
    const {numero} = request.params;
    // Retirar caso queira verificar os valores no terminal
    //console.log(numero);
    //console.log(Extenso(numero));
    //console.log(ChecarNumero(numero));
    
    
    const check = ChecarNumero(numero);
    switch(check){
        case true:
            return response.json({"extenso":Extenso(numero)});
        case false:
            return response.status(415).send();
            // retorna que o o formato requisitado não está suportado
    }

});

// Métodos não implementados, porem de forma a dar o status adequado
app.get('/', (request, response) => {
    // Metodos implementado porem sem saidas;
    return response.status(204).send();
});

app.post('/', (request, response) => {
    // retorna que o método solicitado não é permitido
    return response.status(405).send();
});

app.put('/' , (request,response) => {
    // retorna que o método solicitado não é permitido
    return response.status(405).send()
})

app.delete('/', (request,response) =>{
    // retorna que o método solicitado não é permitido
    return response.status(405).send()
})


app.listen(3000, () => {
    console.log('Iniciando Servidor em localhost:3000');
});