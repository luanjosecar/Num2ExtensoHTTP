function Extenso(numero) {

    var retorno = "";

    var parametros = [ ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"],
         ["dez", "vinte", "trinta", "quarenta", "cinqüenta", "sessenta", "setenta", "oitenta", "noventa"],
         ["cento", "duzentos", "trezentos", "quatocentos", "quinhentos", "seiscentos","setecentos","oitocentos", "novecentos"] ];
    var unidades = ["cem", "mil"];


        if (numero < 20) {
            var index = parseInt(numero)
            retorno = parametros[0][numero];

        } else {
            
            var mod = 0;
            for(var i = numero.length-1; i>=0;i--){
                
                if(numero[i] == 0){
                    retorno += "";
                }
                else{
                    retorno = parametros[mod][numero[i]-1] + " e " + retorno ;
                }
                mod ++;
            }

        }


    return retorno.substr(0,retorno.length-3);
}
var numb = '100';

console.log(Extenso(numb));