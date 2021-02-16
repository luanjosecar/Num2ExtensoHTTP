
function Extenso(numero) {

    var retorno = "";
    var controle = "";

    var parametros = [ ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"],
         ["dez", "vinte", "trinta", "quarenta", "cinqüenta", "sessenta", "setenta", "oitenta", "noventa"],
         ["cento", "duzentos", "trezentos", "quatocentos", "quinhentos", "seiscentos","setecentos","oitocentos", "novecentos"] ];
    var unidades = ["cem", "mil "];
        
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
                /*
                console.log("I = " +i);
                console.log("mode = " + mod);
                console.log("Numero = " +numero[i]);
                */
                // Controle base dos números para alocação 
                if(numero[i] == 0){
                    controle += "";
                }
                else{
                    controle = parametros[mod][numero[i]-1] + " e " ;
                }

                //Tratamento para o caso do número 10
                if(numero[i-1] == '1' && ( i == numero.length-1 || i == numero.length-4)){
                    controle = parametros[0][numero.substr(i-1,i+1)-1];

                    if( i == numero.length-4){
                        controle =controle + ' '+  unidades[1];
                    }

                    i--;
                    mod++;

                }

                // tratamentopara o caso do numero 100
                if(i == numero.length-3 && numero.substr(numero.length-3) == 100){
                    controle = unidades[0] + " e "  ;
                }

                // Adiciona o mil no sistema
                if( i == numero.length-4){
                    controle =controle.substr(0, controle.length-2) + unidades[1];
                }
                
                // Controle o mod para as unidades
                if(i == numero.length-3){
                    mod =0;
                }
                else{
                    mod++
                }

                retorno =  controle + retorno;
                console.log("ok");
            }

        }

    if(retorno.substr(retorno.length-3) == ' e '){
        return retorno.substr(0,retorno.length-3)
    }
    else{
        return retorno;
    }


}