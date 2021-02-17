

module.exports = function () {

    this.Extenso = function (numero) {


        var retorno = "";
        var controle = "";
        var negativo = 0;

        var parametros = [["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"],
        ["dez", "vinte", "trinta", "quarenta", "cinqüenta", "sessenta", "setenta", "oitenta", "noventa"],
        ["cento", "duzentos", "trezentos", "quatocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"]];
        var unidades = ["cem", "mil e "];

        if (numero[0] == '-') {
            negativo = 1;
            numero = numero.substr(1);
        }
        if (numero == 0) {
            return "zero";
        }

        if (numero < 20) {
            var index = parseInt(numero)
            retorno = parametros[0][numero - 1];
            return retorno;

        } else {

            var mod = 0;
            for (var i = numero.length - 1; i >= 0; i--) {
                // Reseta a variável de controle
                controle = '';

                // Controle base dos números para alocação 
                if (numero[i] == 0) {
                    controle += "";
                }
                else {
                    controle = parametros[mod][numero[i] - 1];
                    if (i != numero.length - 5) {
                        controle += " e "
                    }
                }

                //Tratamento para o caso do número 10
                if (numero[i - 1] == '1' && (i == numero.length - 1 || i == numero.length - 4)) {
                    controle = parametros[0][numero.substr(i - 1, i + 1) - 1];

                    if (i == numero.length - 4) {
                        controle = controle + ' ' + unidades[1];
                    }

                    i--;
                    mod++;

                }

                // tratamentopara o caso do numero 100
                if (i == numero.length - 3 && numero.substr(numero.length - 3) == 100) {
                    controle = unidades[0] + " e ";
                }

                // Adiciona o mil no sistema
                if (i == numero.length - 4) {
                    controle = controle.substr(0, controle.length - 2) + unidades[1];
                }

                // Controle o mod para as unidades
                if (i == numero.length - 3) {
                    mod = 0;
                }
                else {
                    mod++
                }

                retorno = controle + retorno;


            }

        }
        // Tratamento da variavel
        if (retorno.substr(retorno.length - 3) == ' e ') {
            retorno = retorno.substr(0, retorno.length - 3)
        }

        if (negativo == 1) {
            return retorno = "menos " + retorno;
        }
        else {
            return retorno;
        }
    },

        this.ChecarNumero = function (numero) {

            if (Number(numero) != 'NaN' && Number.isInteger(Number(numero))) {
                if (numero <= 99999 && numero >= -99999) {
                    return true;
                }
                else {
                    return false;
                }
            }
            else {
                return false;
            }

        }

};