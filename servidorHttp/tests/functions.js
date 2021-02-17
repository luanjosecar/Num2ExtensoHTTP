const fs = require('fs');

function Extenso(numero) {

    var retorno = "";
    var controle = "";
    var negativo = 0;

    var parametros = [ ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"],
         ["dez", "vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"],
         ["cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos","setecentos","oitocentos", "novecentos"] ];
    var unidades = ["cem", " mil"];
        
        if(numero[0]== '-'){
            negativo = 1;
            numero = numero.substr(1);
        }
        if(numero == 0){
            return "zero";
        }

        if (numero < 20 ) {
            var index = parseInt(numero)
            retorno = parametros[0][numero-1];
            return retorno;

        } else {
            
            var mod = 0;
            for(var i = numero.length-1; i>=0;i--){

                // Reseta a variável de controle
                controle = '';
                dezenas = 0;
                
                // Controle base dos números para alocação 
                if(numero[i] == 0){
                    controle += "";
                }
                else{
                    controle = parametros[mod][numero[i]-1];
                }

                //Tratamento para o caso do número 10 e 10K
                if(numero[i-1] == '1' && ( i == numero.length-1 || i == numero.length-4)){
                    controle = parametros[0][numero.substr(i-1,i+1)-1];
                    dezenas = 1;

                    if( i == numero.length-4){
                        controle = controle + unidades[1];
                    }

                    i--;
                    mod++;

                }

                // tratamentopara o caso do numero 100
                if(i == numero.length-3 && numero.substr(numero.length-3) == 100){
                    controle = unidades[0]  ;
                }

                // Adiciona o "mil" e o "e" na string
                if( i == numero.length-4){
                    controle  += unidades[1];
                    if(numero[i]!=0){
                        controle = " e " + controle;
                    }
                }
                else if(i <= numero.length-1 &&  numero[i] != 0  ){
                    controle = " e " + controle;
                }
                
                // Controle o mod para as unidades
                if(i == numero.length-3){
                    mod =0;
                }
                else{
                    mod++
                }

                retorno =  controle + retorno;
                
                
            }

        }
    // Tratamento da variavel
    retorno = retorno.substring(3)

    if(negativo == 1){
        return retorno = "menos " + retorno;
    }
    else{
        return retorno;
    }
}


function VarCheck(numero){

    if(Number(numero) != 'NaN' && Number.isInteger(Number(numero))){
        if(numero <= 99999 && numero >= -99999){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }

}

function TestarSistema(){
    
    fs.writeFile("./tests/output.txt", '', function(err) {
        if(err) {
            return console.log(err);
        }
        
    }); 
    

    var writeStream = fs.createWriteStream('./tests/output.txt');
    var i = 0000;
    var extenso = '';
    while (i<= 99999){
        // This pipes the POST data to the file
        writeStream.write(i.toString())
        writeStream.write(" = ")
        writeStream.write(Extenso(i.toString()));
        writeStream.write('\n');
        console.log(i);
        i++;
        
    }

    console.log("Arquivo Criado")
    
}



//num = '16254';
//console.log(Extenso(num));
//console.log(VarCheck(num));

TestarSistema();


//var writeStream = fs.createWriteStream('./output.txt');
//var endLine = '\n';
//var number = Extenso(num);
// This pipes the POST data to the file
//writeStream.write(number);
//writeStream.write(endLine);

