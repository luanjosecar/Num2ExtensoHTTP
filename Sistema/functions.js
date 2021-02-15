function Extenso(numero) {

    var retorno = "";

    var to20 = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];
    var dezenas = ["dez", "vinte", "trinta", "quarenta", "cinqüenta", "sessenta", "setenta", "oitenta", "noventa"];
    var centenas = ["cento", "duzentos", "trezentos", "quatocentos", "quinhentos", "seiscentos", "novecentos"];
    var unidades = ["cem", "mil"];


        if (numero < 20) {
            var index = parseInt(numero)
            retorno = to20[numero];

        } else {

            for(var i = numero.length-1; i>=0;i--){
                console.log(numero[i])
            }
/*
            if (segundo_numero > 0) {

                retorno += " e " + auxiliar1[primeiro_numero];

            }*/
        }


    return retorno;
}
var numb = '52';
console.log(numb.length);
console.log(Extenso(numb));