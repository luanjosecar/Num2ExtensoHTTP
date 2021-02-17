const { request, response } = require('express');
const express = require('express');
const {uuid} = require('uuidv4');

require('./modules')();

const app = express();
app.use(express.json());


// sdfdfsdf
app.get('/:numero', (request, response) => {
    const {numero} = request.params;
    console.log(numero);
    console.log(Extenso(numero));
    console.log(ChecarNumero(numero));
    //const extenso = Extenso(numero);
    
    //return response.json({"extenso":extenso});

    const check = ChecarNumero(numero);
    switch(check){
        case true:
            return response.json({"extenso":Extenso(numero)});
        case false:
            return response.status(204).send();
    }

});


app.post('/', (request, response) => {
    //return response.json({"erro":"operação não implementada"});
    return response.status(204).send();
});

app.put('/' , (request,response) => {
    return response.status(204).send()
})

app.delete('/', (request,response) =>{
    return response.status(204).send()
})


app.listen(3000, () => {
    console.log('Iniciando Servidor');
});