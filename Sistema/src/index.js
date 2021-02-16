const { request, response } = require('express');
const express = require('express');
const {uuid} = require('uuidv4');

const {Extenso} = require('./functions');

const app = express();
app.use(express.json());


// sdfdfsdf
app.get('/', (request, response) => {
    const {Number} = request.query;
    const number = Number;
    //const number = Extenso(Number);
    
    return response.json({"teste":number});
});


app.post('/', (request, response) => {
    return response.status(204).send()
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